import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseKey)

// Types pour TypeScript
export interface QuizResult {
  id?: number
  student_name: string
  date: string
  duration: number
  score: number
  total_questions: number
  percentage_score: number
  answers: any
  created_at?: string
}