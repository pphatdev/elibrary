'use client';

import { useState, useRef, DragEvent } from 'react';
import dynamic from 'next/dynamic';
import { Container } from '@/components/container';
import { Breadcrumbs } from '../../types/breadcrumbs';
import { useSearchParams } from 'next/navigation';
import { contents } from '@/data/books';
import { Input } from '@/components/ui/input';
import { SearchIcon } from 'lucide-react';
// import { Select, SelectContent, SelectTrigger, SelectValue } from '@/components/ui/select';

// Dynamically import PDFViewer with no SSR
// const PDFViewer = dynamic(() => import('../../components/pdf/preview'), {
//     ssr: false,
// });

export default function Home() {

    const searchParams = useSearchParams();
    const id = searchParams.get('id');
    const book = contents.find(content => content.id == id);


    const breadcrumbs: Breadcrumbs[] = [
        { label: "ទំព័រដើម" },
        { label: book?.category || "", href: "/" },
        { label: book?.title || "" }
    ]

    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [error, setError] = useState<string>('');
    const fileInputRef = useRef<HTMLInputElement>(null);

    const validateFile = (file: File): boolean => {
        if (!file.type.includes('pdf')) {
            setError('Please select a PDF file');
            return false;
        }
        if (file.size > 10 * 1024 * 1024) { // 10MB limit
            setError('File size should be less than 10MB');
            return false;
        }
        setError('');
        return true;
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file && validateFile(file)) {
            setSelectedFile(file);
        } else if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleDrop = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);

        const file = e.dataTransfer.files[0];
        if (file && validateFile(file)) {
            setSelectedFile(file);
        }
    };

    return (
        <Container breadcrumb={breadcrumbs}>
            <div className='container mx-auto'>
                <nav className='flex justify-between items-center'>
                    <h1 className="text-3xl font-bold">រឿងអក្សរសិល្ប៍</h1>
                    <div className='flex gap-2'>
                        <div className="relative">
                            <Input name='search' placeholder='ស្វែងរក...' className='pl-8'></Input>
                            <SearchIcon className='size-4 absolute top-2.5 left-2' />
                        </div>
                    </div>
                </nav>
                <div
                    className={`upload-section ${isDragging ? 'drag-active' : ''}`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                >
                    <input
                        type="file"
                        accept=".pdf"
                        onChange={handleFileChange}
                        ref={fileInputRef}
                    />
                    {/* <p>Drag and drop a PDF file here or click to select</p> */}

                    {selectedFile && (
                        <div className="file-info">
                            Selected file: {selectedFile.name} ({(selectedFile.size / 1024 / 1024).toFixed(2)} MB)
                        </div>
                    )}

                    {error && <p className="error-message">{error}</p>}
                </div>

                {/* <PDFViewer file={selectedFile} /> */}
            </div>
        </Container>
    );
}