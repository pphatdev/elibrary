export type Contents = {
    id?: number | string
    category: string
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
