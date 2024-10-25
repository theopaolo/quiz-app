// src/app/test/page.tsx
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

interface TestResult {
  type: 'connection' | 'insertion';
  success: boolean;
  message: string;
  details?: any;
}

export default function TestPage() {
  const [results, setResults] = useState<TestResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const testConnection = async () => {
    setIsLoading(true);
    setResults([]);

    try {
      // Test de connexion
      const connResponse = await fetch('/api/test-connection');
      const connData = await connResponse.json();

      setResults(prev => [...prev, {
        type: 'connection',
        success: connResponse.ok,
        message: connData.message || 'Connection test completed',
        details: connData
      }]);

      // Si la connexion réussit, on teste l'insertion
      if (connResponse.ok) {
        const testData = {
          studentName: `Test User ${new Date().toISOString()}`,
          date: new Date().toISOString(),
          duration: 60,
          score: 10,
          totalQuestions: 10,
          percentageScore: 100,
          answers: [{ questionId: 1, answer: 'test' }]
        };

        const insertResponse = await fetch('/api/quiz/results', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(testData)
        });

        const insertData = await insertResponse.json();

        setResults(prev => [...prev, {
          type: 'insertion',
          success: insertResponse.ok,
          message: insertResponse.ok ? 'Data insertion successful' : 'Data insertion failed',
          details: insertData
        }]);
      }
    } catch (error) {
      setResults(prev => [...prev, {
        type: 'connection',
        success: false,
        message: 'Test failed',
        details: error instanceof Error ? error.message : 'Unknown error'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen p-4 flex justify-center items-center">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle>Database Tests</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button
            onClick={testConnection}
            disabled={isLoading}
            className="w-full"
          >
            {isLoading ? 'Testing...' : 'Run Tests'}
          </Button>

          {results.map((result, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg border ${
                result.success ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                {result.success ? (
                  <CheckCircle2 className="text-green-500" />
                ) : (
                  <AlertCircle className="text-red-500" />
                )}
                <h3 className="font-medium">
                  {result.type === 'connection' ? 'Connection Test' : 'Insertion Test'}
                </h3>
              </div>
              <p className="text-sm mb-2">{result.message}</p>
              {result.details && (
                <pre className="text-xs bg-white bg-opacity-50 p-2 rounded">
                  {JSON.stringify(result.details, null, 2)}
                </pre>
              )}
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}