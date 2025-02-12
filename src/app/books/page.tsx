"use client"
import { Container } from "@/components/container";
import { contents } from "@/data/books";
import { Breadcrumbs } from "@/types/breadcrumbs";
import { useSearchParams } from "next/navigation";

export default function BookContent() {

    const searchParams = useSearchParams();
    const id = searchParams.get('id');
    const book = contents.find(content => content.id == id);

    const breadcrumbs: Breadcrumbs[] = [
        { label: "ទំព័រដើម" },
        { label: book?.category || "", href: "/" },
        { label: book?.title || "" }
    ]

    return (
        <Container breadcrumb={breadcrumbs}>
            <div className='container mx-auto'>
                <nav className='flex justify-between items-center'>
                    <h1 className="text-3xl font-bold">{book?.title}</h1>
                    <div className='flex gap-2'>

                    </div>
                </nav>

                <div className="grid grid-cols-1 mt-10 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8">

                </div>
            </div>
        </Container>
    );
}