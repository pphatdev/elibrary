
import { Container } from '@/components/container'
import { Button } from '@/components/ui/button'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { createClient } from '@/utils/supabase/server'
import { ChevronRight } from 'lucide-react'
import { cookies } from 'next/headers'

const categories = [
    {
        title: "Personal Trainings",
        workouts: "2 Workouts",
        icon: "🏋️‍♂️",
    },
    {
        title: "Yoga",
        workouts: "13 Workouts",
        icon: "🧘‍♀️",
    },
    {
        title: "Stretch",
        workouts: "16 Workouts",
        icon: "🤸‍♂️",
    },
    {
        title: "Boxing",
        workouts: "3 Workouts",
        icon: "🥊",
    },
    {
        title: "Running",
        workouts: "10 Workouts",
        icon: "🏃‍♂️",
    },
    {
        title: "Upper Body",
        workouts: "9 Workouts",
        icon: "💪",
    },
    {
        title: "Gym",
        workouts: "17 Workouts",
        icon: "🏋️",
    },
    {
        title: "Cardio",
        workouts: "17 Workouts",
        icon: "❤️",
    },
]

export default async function Home() {
    const cookieStore = await cookies()
    const supabase = createClient(cookieStore)

    const { data: books } = await supabase.from('books').select()
    console.log(books);

    return (
        <Container breadcrumb={[{ label: "ទំព័រដើម" }]}>
            <h1 className="text-3xl font-bold">ទំព័រដើម</h1>
            <p className="text-muted-foreground">Welcome back!</p>
            <ScrollArea className="mt-8 w-full">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {categories.map((category) => (
                        <Button key={category.title} variant="outline" className="h-auto justify-start gap-3 p-4 text-left">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted text-2xl">
                                {category.icon}
                            </div>
                            <div>
                                <div className="font-medium">{category.title}</div>
                                <div className="text-sm text-muted-foreground">{category.workouts}</div>
                            </div>
                            <ChevronRight className="ml-auto shrink-0 h-5 w-5" />
                        </Button>
                    ))}
                </div>
                <ScrollBar orientation="horizontal" />
            </ScrollArea>
            {/* <MainContent/> */}
        </Container>
    )
}
