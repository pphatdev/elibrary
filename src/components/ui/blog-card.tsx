import Image from 'next/image';
import { type Contents } from '../../types/books';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from './avatar';
import { EyeIcon } from 'lucide-react';
export const BlogCard = ({ cardKey, item }: { cardKey: number, item: Contents }) => {
    const randomKey: number = parseInt(Math.random().toString(36).substring(7), 36);
    return (
        <div key={cardKey || randomKey} className="flex flex-col gap-1 relative">
            <div className="bg-muted rounded-lg aspect-[3/4] mb-2 flex items-center group justify-center relative overflow-hidden bg-white ring-1 ring-border">
                <Image src={item.thumbnail} className='object-fill shadow-2xl h-full z-10 transition w-full duration-300 group-hover:scale-105' width={100} height={100} alt="Profile picture" />
                <Link href={item?.slug} className='absolute inset-0 opacity-0 z-50'></Link>
                <div className='absolute z-20 left-0 w-full bottom-0'>
                    <div className='px-2 translate-y-10 transition-all group-hover:translate-y-0 flex bg-gradient-to-t from-foreground/50 via-foreground/50 items-center py-2 justify-start gap-2'>
                        <EyeIcon className="size-4 text-background" />
                        <span className="text-xs text-background font-semibold">{item?.views}</span>
                    </div>
                </div>
            </div>
            <div className='flex justify-between gap-2 items-center'>
                <div className='relative'>
                    <Avatar className="h-8 w-8 ring-1 ring-primary ring-offset">
                        <AvatarImage src={item.publisher?.avatar} alt={item?.publisher.name} />
                        <AvatarFallback>{item?.publisher?.name?.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <Link href={item?.slug} className='absolute inset-0 opacity-0'></Link>
                </div>
                <div className='flex flex-col w-full gap-0 relative'>
                    <h1 className="text-base tracking-tight font-medium leading-7 line-clamp-1">{item?.title}</h1>
                    <p className="text-muted-foreground text-base sr-only line-clamp-3"> {item?.info?.storySource} </p>
                    <span className="text-xxs text-muted-foreground">{new Date(item.publisher.date).toLocaleDateString('km-KH', { year: 'numeric', month: 'long', day: '2-digit' })}</span>
                    <Link href={item?.slug} className='absolute inset-0 opacity-0'></Link>
                </div>

            </div>
        </div>
    )
}