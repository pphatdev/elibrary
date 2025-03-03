'use client';

import { Suspense } from 'react';

import { Container } from '@/components/container';
import { Breadcrumbs } from '../../types/breadcrumbs';
import { useSearchParams } from 'next/navigation';
import { contents } from '@/data/books';
import { Input } from '@/components/ui/input';
import { SearchIcon } from 'lucide-react';
import { Reader } from '../../components/pdf/reader';

function BookContent() {

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
                <nav className='flex flex-col gap-5 md:flex-row justify-between items-center'>
                    <div>
                        <h1 className="text-3xl font-bold line-clamp-1">រឿងអក្សរសិល្ប៍</h1>
                        <p className='mt-2 font-medium'>Descriptions</p>
                    </div>
                    <div className='flex gap-2'>
                        <div className="relative">
                            <Input name='search' placeholder='ស្វែងរក...' className='pl-8'></Input>
                            <SearchIcon className='size-4 absolute top-2.5 left-2' />
                        </div>
                    </div>
                </nav>
                <div>
                    <Reader/>
                </div>
            </div>
        </Container>
    );
}

export default function Books() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <BookContent />
        </Suspense>
    )
}