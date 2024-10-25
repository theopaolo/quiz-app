// src/app/api/test-connection/route.ts
import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET() {
  try {
    // Modifié pour utiliser une requête plus simple
    const { data, error } = await supabase
      .from('quiz_results')
      .select('id')
      .limit(1);

    if (error) throw error;

    return NextResponse.json({
      status: 'connected',
      message: 'Successfully connected to Supabase',
      data: {
        tableExists: true,
        hasRecords: data && data.length > 0
      }
    });
  } catch (error) {
    console.error('Database connection test failed:', error);
    return NextResponse.json(
      {
        status: 'error',
        message: 'Failed to connect to database',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}