import { createClient } from '@supabase/supabase-js'
import { Database } from '@/types/supabase.config'

if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
    throw new Error('Missing env.NEXT_PUBLIC_SUPABASE_URL')
}

if (!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    throw new Error('Missing env.NEXT_PUBLIC_SUPABASE_ANON_KEY')
}

// Create Supabase client
export const supabase = createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

// Database types
export type Tables = Database['public']['Tables']
export type Books = Tables['books']['Row']
export type Authors = Tables['authors']['Row']
export type Genres = Tables['genres']['Row']
export type Members = Tables['members']['Row']
export type Loans = Tables['loans']['Row']