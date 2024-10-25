'use client';

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useToast } from "@/hooks/use-toast";
import { quizData, type QuizResult, type AnswerResult } from '@/lib/quiz-data';

export default function QuizApp() {
  const { toast } = useToast();
  const [studentName, setStudentName] = useState('');
  const [showNameInput, setShowNameInput] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [answers, setAnswers] = useState<AnswerResult[]>([]);
  const [startTime, setStartTime] = useState<Date | null>(null);

  const handleStartQuiz = (e: React.FormEvent) => {
    e.preventDefault();
    if (studentName.trim()) {
      setShowNameInput(false);
      setStartTime(new Date());
    }
  };

  const handleAnswerSelect = async (isCorrect: boolean, answerText: string) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const newAnswer: AnswerResult = {
      questionIndex: currentQuestion,
      question: quizData.questions[currentQuestion].question,
      selectedAnswer: answerText,
      correct: isCorrect,
      timestamp: new Date().toISOString()
    };

    const updatedAnswers = [...answers, newAnswer];
    setAnswers(updatedAnswers);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      await finishQuiz(updatedAnswers);
    }
  };

  const finishQuiz = async (finalAnswers: AnswerResult[]) => {
    if (!startTime) return;

    const endTime = new Date();
    const duration = Math.round((endTime.getTime() - startTime.getTime()) / 1000); // Arrondi à l'entier le plus proche

    const results = {
      studentName,
      date: endTime.toISOString(),
      duration, // Maintenant c'est un entier
      score: Math.round(score), // Pour être sûr que c'est un entier
      totalQuestions: quizData.questions.length,
      percentageScore: Math.round((score / quizData.questions.length) * 100), // Arrondi le pourcentage
      answers: finalAnswers
    };

    try {
      console.log('Sending results to server:', results);

      const response = await fetch('/api/quiz/results', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(results),
      });

      const responseData = await response.json();
      console.log('Server response:', responseData);

      if (!response.ok) {
        throw new Error(`Failed to save results: ${responseData.error || 'Unknown error'}`);
      }

      // Génération du fichier local
      const resultsBlob = new Blob([JSON.stringify(results, null, 2)],
        { type: 'application/json' });
      const resultsURL = URL.createObjectURL(resultsBlob);

      const downloadLink = document.createElement('a');
      downloadLink.href = resultsURL;
      downloadLink.download = `quiz-results-${studentName}-${endTime.toISOString()}.json`;
      downloadLink.click();

      toast({
        title: "Quiz terminé !",
        description: "Vos résultats ont été enregistrés avec succès.",
      });
    } catch (error) {
      console.error('Error in finishQuiz:', error);

      toast({
        title: "Erreur",
        description: error instanceof Error ? error.message : "Impossible d'enregistrer vos résultats.",
        variant: "destructive",
      });
    }

    setShowScore(true);
  };

  const restartQuiz = () => {
    setShowNameInput(true);
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setAnswers([]);
    setStudentName('');
    setStartTime(null);
  };

  const progress = ((currentQuestion) / quizData.questions.length) * 100;

  if (showNameInput) {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">{quizData.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleStartQuiz} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="studentName" className="text-sm font-medium">
                Votre prénom
              </label>
              <Input
                id="studentName"
                type="text"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                placeholder="Entrez votre prénom"
                className="w-full"
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Commencer le quiz
            </Button>
          </form>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">
          {showScore ? "Quiz terminé !" : quizData.title}
        </CardTitle>
        <div className="text-sm">
          Étudiant: {studentName}
        </div>
      </CardHeader>
      <CardContent>
        {showScore ? (
          <div className="space-y-4">
            <div className="text-center">
              <h2 className="text-xl font-bold mb-2">
                Score final: {score} sur {quizData.questions.length}
              </h2>
              <p className="text-lg mb-4">
                ({Math.round((score / quizData.questions.length) * 100)}%)
              </p>
            </div>
            <div className="space-y-2">
              {answers.map((answer, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-2 rounded"
                >
                  {answer.correct ? (
                    <CheckCircle2 className="text-green-500" />
                  ) : (
                    <AlertCircle className="text-red-500" />
                  )}
                  <span>Question {index + 1}</span>
                </div>
              ))}
            </div>
            <Button onClick={restartQuiz} className="w-full">
              Nouveau quiz
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            <Progress value={progress} className="mb-4" />
            <p className="text-sm text-right mb-4">
              Question {currentQuestion + 1} sur {quizData.questions.length}
            </p>
            <div className="space-y-4">
              <p className="text-lg font-medium">
                {quizData.questions[currentQuestion].question}
              </p>
              <div className="grid gap-2">
                {quizData.questions[currentQuestion].answers.map((answer, index) => (
                  <Button
                    key={index}
                    onClick={() => handleAnswerSelect(answer.isCorrect, answer.text)}
                    variant="outline"
                    className="text-left h-auto py-4 px-6"
                  >
                    {answer.text}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}