export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[]

export interface Database {
    public: {
        Tables: {
            books: {
                Row: {
                    id: number
                    title: string
                    author_id: number | null
                    genre_id: number | null
                    published_date: string | null
                    created_at: string
                }
                Insert: {
                    id?: number
                    title: string
                    author_id?: number | null
                    genre_id?: number | null
                    published_date?: string | null
                    created_at?: string
                }
                Update: {
                    id?: number
                    title?: string
                    author_id?: number | null
                    genre_id?: number | null
                    published_date?: string | null
                    created_at?: string
                }
            }
            authors: {
                Row: {
                    id: number
                    name: string
                    bio: string | null
                    created_at: string
                }
            }
            genres: {
                Row: {
                    id: number
                    genre_name: string
                    created_at: string
                }
            }
            members: {
                Row: {
                    id: number
                    name: string
                    email: string
                    membership_date: string
                    created_at: string
                }
            }
            loans: {
                Row: {
                    id: number
                    book_id: number
                    member_id: number
                    loan_date: string
                    return_date: string | null
                    created_at: string
                }
            }
        }
    }
}


export type Books = Database['public']['Tables']['books']['Row']
export type Authors = Database['public']['Tables']['authors']['Row']
export type Genres = Database['public']['Tables']['genres']['Row']
export type Members = Database['public']['Tables']['members']['Row']
export type Loans = Database['public']['Tables']['loans']['Row']