// src/lib/db.ts
import { supabase } from './supabase'
import type { QuizResult } from './supabase'

export async function saveQuizResult(result: Omit<QuizResult, 'id' | 'created_at'>) {
  const { data, error } = await supabase
    .from('quiz_results')
    .insert([result])
    .select()
    .single()

  if (error) {
    console.error('Error saving quiz result:', error)
    throw error
  }

  return {
    success: true,
    id: data.id
  }
}

export async function getQuizResults() {
  const { data, error } = await supabase
    .from('quiz_results')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error getting quiz results:', error)
    throw error
  }

  return data
}

export async function getQuizResultsByStudent(studentName: string) {
  const { data, error } = await supabase
    .from('quiz_results')
    .select('*')
    .eq('student_name', studentName)
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error getting student quiz results:', error)
    throw error
  }

  return data
}

export async function getQuizStatistics() {
  const { data, error } = await supabase
    .rpc('get_quiz_statistics')

  if (error) {
    console.error('Error getting quiz statistics:', error)
    throw error
  }

  return data
}