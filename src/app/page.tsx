import { Container } from '@/components/container'
import { Input } from '@/components/ui/input';
import { SearchIcon } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { contents } from '@/data/books';
import { BlogCard } from '@/components/ui/blog-card';

export default async function Home() {
    return (
        <Container breadcrumb={[{ label: "ទំព័រដើម" }, { label: "រឿងអក្សរសិល្ប៍" }]}>
            <div className='container mx-auto'>
                <nav className='flex flex-col gap-5 md:flex-row justify-between items-center'>
                    <h1 className="text-3xl font-bold line-clamp-1">រឿងអក្សរសិល្ប៍</h1>
                    <div className='flex gap-2'>
                        <div className="relative">
                            <Input name='search' placeholder='ស្វែងរក...' className='pl-8'></Input>
                            <SearchIcon className='size-4 absolute top-2.5 left-2' />
                        </div>
                        <Select>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="ទាំងអស់" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">ទាំងអស់</SelectItem>
                                <SelectItem value="latest">ថ្មីបំផុត</SelectItem>
                                <SelectItem value="popular">ពេញនិយម</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </nav>

                <div className="grid grid-cols-1 mt-10 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8">
                    {contents.map((item) => (
                        <BlogCard
                            key={item.id || `blog-${Math.random()}`}
                            item={item} cardKey={0}                        />
                    ))}
                </div>
            </div>
        </Container>
    )
}
