import { Container } from '@/components/container'
import Image from 'next/image'
import { Input } from '@/components/ui/input';
import { EyeIcon, SearchIcon } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';

type Contents = {
    thumbnail: string
    title: string
    publisher: {
        name: string
        avatar: string
        date: string
    }
    info?: {
        authors?: string[]
        date?: string
        storyType?: string
        storySource?: string
        storyMovement?: string
        atmosphericSociety?: string
        storyCharacter?: string
    }
    slug: string
    views?: number
}

const contents: Contents[] = [
    {
        thumbnail: "/ko-li-korm-nen.jpg",
        title: "រឿង គូលីកំនែន",
        publisher: {
            name: "លាត សុផាត",
            avatar: "https://github.com/pphatdev.png",
            date: "02/09/2021 12:00:00"
        },
        info: {
            authors: ["អ៊ឹម ថុក",],
            date: "ខែសីហា ១៩៥៦",
            storyType: "អក្សរសិល្ប៍ទំនើបដែលមានទស្សនៈជឿនលឿន និងមាននិន្នាការទៅខាងលទ្ធិសង្គមនិយម។",
            storySource: "រឿងគូលីកំណែនជាប្រលោមលោកបែបមនោគមវិជ្ជា ឆ្លុះបញ្ចាំងពីតថភាព​សង្គមកម្ពុជា ក្រោមនឹមអាណានិគមនិយម។",
            storyMovement: "ខេមរនិយម ព្រោះបានបង្ហាញពីជីវភាពពិតៗក្នុងសង្គមខ្មែរក្នុងកាលៈទេសៈដែល​ត្រូវបរទេសត្រួតត្រា។",
            atmosphericSociety: "ដំណើររឿងបានប្រព្រឹត្តទៅចាប់ពីរជ្ជកាលព្រះបាទស៊ីសុវត្ថិមុនីវង្ស (ពីឆ្នាំ​ ១៩២៧ ដល់ ១៩៤២) សម័យនោះប្រទេសកម្ពុជាឋិតក្រោមអាណានិគមបារាំង ជប៉ុន។",
        },
        slug: "រឿង-គូលីកំនែន",
        views: 128
    },
    {
        thumbnail: "/mea-yerng.png",
        title: "រឿង មាយើង",
        publisher: {
            name: "លាត សុផាត",
            avatar: "https://github.com/pphatdev.png",
            date: "02/09/2021 12:00:00"
        },
        info: {
            authors: ["មិនស្គាល់ឈ្មោះ",],
            date: "មិនច្បាស់លាស់",
            storyType: "អក្សរសិល្ប៍ប្រជាប្រិយ",
            storySource: "ដំណើររឿងកើតឡើងនៅប្រទេសកម្ពុជា",
            storyMovement: "អក្សរសិល្ប៍ខេមរនិយម",
            atmosphericSociety: "ដំណើររឿងបានប្រព្រឹត្តទៅចាប់ពីរជ្ជកាលព្រះបាទស៊ីសុវត្ថិមុនីវង្ស (ពីឆ្នាំ​ ១៩២៧ ដល់ ១៩៤២) សម័យនោះប្រទេសកម្ពុជាឋិតក្រោមអាណានិគមបារាំង ជប៉ុន។",
        },
        slug: "រឿង-មាយើង",
        views: 128
    },
    {
        thumbnail: "/preah-vesandor.jpg",
        title: "រឿង ព្រះវេស្សន្តរ",
        publisher: {
            name: "លាត សុផាត",
            avatar: "https://github.com/pphatdev.png",
            date: "02/09/2021 12:00:00"
        },
        info: {
            authors: ["សព្វថ្ងៃឯកសារគោលដែលយកមកសិក្សាគឺជាស្នាដៃរបស់បណ្ឌិតមហាឈឹម សុមន៍",],
            date: "គម្ពីរដើមជាស្នាដៃនៃព្រះអដ្ឋកឋាចារ្យដែលសរសេរជាភាសាបាលីមាននៅក្នុងគម្ពីរព្រះត្រៃបិដក។ ឯគម្ពីរជាភាសាសម្រាយដែលមាននៅក្នុងកម្ពុជរដ្ឋយើងគឺមានច្រើនប្រភេទណាស់។ ",
            storyType: "អក្សរសិល្ប៍បុរាណ, សាស្រ្តាទេសន៍",
            storySource: "រឿងគូលីកំណែនជាប្រលោមលោកបែបមនោគមវិជ្ជា ឆ្លុះបញ្ចាំងពីតថភាព​សង្គមកម្ពុជា ក្រោមនឹមអាណានិគមនិយមពីរ គឺបារាំង និងជប៉ុនដែលជារឿងមួយមានប្រភព​នៅក្នុងប្រទេសកម្ពុជាយើង ពីព្រោះដំណើររឿងបានប្រព្រឹត្តទៅនៅក្នុងឃុំគោកចំបក់ ស្រុក​កណ្តាលស្ទឹង ខេត្តកណ្តាល។",
            storyMovement: "អក្សរសិល្ប៍ពុទ្ធនិយម",
            atmosphericSociety: "ដំណើររឿងបានប្រព្រឹត្តទៅចាប់ពីរជ្ជកាលព្រះបាទស៊ីសុវត្ថិមុនីវង្ស (ពីឆ្នាំ​ ១៩២៧ ដល់ ១៩៤២) សម័យនោះប្រទេសកម្ពុជាឋិតក្រោមអាណានិគមបារាំង ជប៉ុន។",
        },
        slug: "រឿង-ព្រះវេស្សន្តរ",
        views: 128
    },
]

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

                <div className="grid grid-cols-1 mt-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
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
