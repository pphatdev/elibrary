import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { Books } from "@/types/supabase.config";

// GET /api/books - Get all books
export async function GET() {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const { data, error } = await supabase
        .from("books")
        .select();

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data);
}

// POST /api/books - Create a new book
export async function POST(request: Request) {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const book: Partial<Books> = await request.json();

    const { data, error } = await supabase
        .from("books")
        .insert(book)
        .select()
        .single();

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data, { status: 201 });
}

// PUT /api/books/:id - Update a book
export async function PUT(
    request: Request,
    { params }: { params: { id: string } }
) {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const book: Partial<Books> = await request.json();

    const { data, error } = await supabase
        .from("books")
        .update(book)
        .eq("id", params.id)
        .select()
        .single();

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data);
}

// DELETE /api/books/:id - Delete a book
export async function DELETE(
    request: Request,
    { params }: { params: { id: string } }
) {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const { error } = await supabase
        .from("books")
        .delete()
        .eq("id", params.id);

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return new NextResponse(null, { status: 204 });
}