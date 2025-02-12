import { Container } from '@/components/container'
import Image from 'next/image'
import { Input } from '@/components/ui/input';
import { EyeIcon, SearchIcon } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';
import { contents } from '@/data/books';

export default async function Home() {
    return (
        <Container breadcrumb={[{ label: "ទំព័រដើម" }, { label: "រឿងអក្សរសិល្ប៍" }]}>
            <div className='container mx-auto'>
                <nav className='flex justify-between items-center'>
                    <h1 className="text-3xl font-bold">រឿងអក្សរសិល្ប៍</h1>
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
                    {contents.map((item, key) => (
                        <div key={key} className="flex flex-col gap-1 relative">
                            <div className="bg-muted rounded-lg aspect-[3/4] mb-2 flex items-center group justify-center relative overflow-hidden bg-white ring-1 ring-border">
                                <Image src={item.thumbnail} className='object-cover w-full h-full scale-125 group-hover:scale-150 transition-all blur-sm absolute bg-black -z-0' width={100} height={100} alt="Profile picture" />
                                <Image src={item.thumbnail} className='object-fill shadow-2xl w-fit h-full z-10 transition duration-300 group-hover:scale-105' width={100} height={100} alt="Profile picture" />
                                <Link href={item?.slug} className='absolute inset-0 opacity-0 z-50'></Link>
                            </div>
                            <div className='flex justify-between gap-2 items-center'>
                                <div className='relative'>
                                    <Avatar className="h-9 w-9 ring-1 ring-primary ring-offset">
                                        <AvatarImage src={item.publisher?.avatar} alt={item?.publisher.name} />
                                        <AvatarFallback>{item?.publisher?.name?.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <Link href={item?.slug} className='absolute inset-0 opacity-0'></Link>
                                </div>
                                <div className='flex flex-col w-full gap-0 relative'>
                                    <h3 className="text-xl tracking-tight font-medium leading-7 line-clamp-1">{item?.title}</h3>
                                    <p className="text-muted-foreground text-base sr-only line-clamp-3"> {item?.info?.storySource} </p>
                                    <span className="text-xs text-muted-foreground">{new Date(item.publisher.date).toLocaleDateString('km-KH', { year: 'numeric', month: 'long', day: '2-digit' })}</span>
                                    <Link href={item?.slug} className='absolute inset-0 opacity-0'></Link>
                                </div>
                                <div className='flex gap-1 items-center'>
                                    <EyeIcon className="size-4 text-foreground/60" />
                                    <div className="ml-auto text-muted-foreground">
                                        <span className="text-sm font-default">{item?.views}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    )
}
