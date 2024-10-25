// src/app/api/quiz/results/route.ts
import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

// Type pour la validation
interface QuizData {
    studentName: string;
    date: string;
    duration: number;
    score: number;
    totalQuestions: number;
    percentageScore: number;
    answers: any[];
  }

  function validateQuizData(data: any): data is QuizData {
  const required = [
    'studentName',
    'date',
    'duration',
    'score',
    'totalQuestions',
    'percentageScore',
    'answers'
  ];

  // Vérifie que toutes les propriétés requises existent
  if (!required.every(prop => prop in data)) {
    throw new Error('Missing required fields');
  }

  // Vérifie que les nombres sont bien des entiers
  if (!Number.isInteger(data.duration)) {
    throw new Error('Duration must be an integer');
  }
  if (!Number.isInteger(data.score)) {
    throw new Error('Score must be an integer');
  }
  if (!Number.isInteger(data.totalQuestions)) {
    throw new Error('Total questions must be an integer');
  }
  if (!Number.isInteger(data.percentageScore)) {
    throw new Error('Percentage score must be an integer');
  }

  return true;
}

export async function POST(request: Request) {
  try {
    console.log('API Route: Starting request processing');

    const result = await request.json();
    console.log('API Route: Received data:', result);

     // Validation des données
     try {
        validateQuizData(result);
      } catch (validationError) {
        console.error('API Route: Validation error:', validationError);
        return NextResponse.json(
          {
            error: 'Validation error',
            details: validationError instanceof Error ? validationError.message : 'Invalid data'
          },
          { status: 400 }
        );
      }


    const dataToInsert = {
      student_name: result.studentName,
      date: result.date,
      duration: result.duration,
      score: result.score,
      total_questions: result.totalQuestions,
      percentage_score: result.percentageScore,
      answers: result.answers
    };

    console.log('API Route: Prepared data for insert:', dataToInsert);

    const { data, error } = await supabase
      .from('quiz_results')
      .insert([dataToInsert])
      .select()
      .single();

    if (error) {
      console.error('API Route: Supabase error:', error);
      return NextResponse.json(
        {
          error: 'Database error',
          details: error.message,
          code: error.code
        },
        { status: 500 }
      );
    }

    console.log('API Route: Successfully saved data:', data);
    return NextResponse.json({
      success: true,
      data,
      message: 'Quiz result saved successfully'
    });

  } catch (error) {
    console.error('API Route: Fatal error:', error);
    return NextResponse.json(
      {
        error: 'Server error',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    console.log('API Route: Starting GET request');

    const { searchParams } = new URL(request.url);
    const studentName = searchParams.get('student');
    const limit = searchParams.get('limit') ? parseInt(searchParams.get('limit')!) : undefined;

    console.log('API Route: Query params:', { studentName, limit });

    let query = supabase
      .from('quiz_results')
      .select('*')
      .order('created_at', { ascending: false });

    if (studentName) {
      query = query.eq('student_name', studentName);
    }

    if (limit) {
      query = query.limit(limit);
    }

    const { data, error } = await query;

    if (error) {
      console.error('API Route: Supabase error during GET:', error);
      throw error;
    }

    console.log(`API Route: Successfully retrieved ${data?.length} results`);
    return NextResponse.json({
      success: true,
      data,
      count: data?.length,
      filters: { studentName, limit }
    });

  } catch (error) {
    console.error('API Route: Error getting quiz results:', error);
    return NextResponse.json(
      {
        error: 'Failed to get results',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

// Optionnel : Ajout d'une méthode DELETE pour la maintenance
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'ID is required' },
        { status: 400 }
      );
    }

    const { error } = await supabase
      .from('quiz_results')
      .delete()
      .eq('id', id);

    if (error) throw error;

    return NextResponse.json({
      success: true,
      message: `Result ${id} deleted successfully`
    });

  } catch (error) {
    console.error('API Route: Error deleting quiz result:', error);
    return NextResponse.json(
      { error: 'Failed to delete result' },
      { status: 500 }
    );
  }
}