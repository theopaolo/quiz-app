'use client';

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { AlertCircle, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useToast } from "@/hooks/use-toast";
import { functionsQuizData, type QuizResult, type AnswerResult, type QuizQuestion } from '@/lib/functions-quiz';
import { QuestionRenderer } from './QuestionRenderer';

interface QuizData {
  title: string;
  questions: QuizQuestion[];
}

interface QuizAppProps {
  quizData?: QuizData;
}

export default function QuizApp({ quizData = functionsQuizData }: QuizAppProps) {
  const { toast } = useToast();
  const [studentName, setStudentName] = useState('');
  const [showNameInput, setShowNameInput] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [answers, setAnswers] = useState<(AnswerResult | null)[]>(
    new Array(quizData.questions.length).fill(null)
  );

  const cardStyle: React.CSSProperties = {
    maxHeight: '90vh',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column'
  };

  const contentStyle: React.CSSProperties = {
    flex: 1,
    overflowY: 'auto',
    paddingRight: '1rem'
  };

  const handleStartQuiz = (e: React.FormEvent) => {
    e.preventDefault();
    if (studentName.trim()) {
      setShowNameInput(false);
      setStartTime(new Date());
    }
  };

  const handleAnswerSelect = (isCorrect: boolean, answerText: string) => {
    const newAnswer: AnswerResult = {
      questionIndex: currentQuestion,
      question: quizData.questions[currentQuestion].question,
      selectedAnswer: answerText,
      correct: isCorrect,
      timestamp: new Date().toISOString()
    };

    const newAnswers = [...answers];
    newAnswers[currentQuestion] = newAnswer;
    setAnswers(newAnswers);

    if (isCorrect) setScore(score + 1);

    if (currentQuestion < quizData.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      finishQuiz(newAnswers.filter((a): a is AnswerResult => a !== null));
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestion > 0) setCurrentQuestion(currentQuestion - 1);
  };

  const goToNextQuestion = () => {
    if (currentQuestion < quizData.questions.length - 1) setCurrentQuestion(currentQuestion + 1);
  };

  const finishQuiz = async (finalAnswers: AnswerResult[]) => {
    if (!startTime) return;

    const endTime = new Date();
    const duration = Math.round((endTime.getTime() - startTime.getTime()) / 1000);
    const results: QuizResult = {
      studentName,
      date: endTime.toISOString(),
      duration,
      score,
      totalQuestions: quizData.questions.length,
      percentageScore: Math.round((score / quizData.questions.length) * 100),
      answers: finalAnswers
    };

    try {
      const response = await fetch('/api/quiz/results', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(results),
      });

      if (!response.ok) throw new Error("Failed to save results");

      const downloadLink = document.createElement('a');
      const resultsBlob = new Blob([JSON.stringify(results, null, 2)], { type: 'application/json' });
      downloadLink.href = URL.createObjectURL(resultsBlob);
      downloadLink.download = `quiz-results-${studentName}-${endTime.toISOString()}.json`;
      downloadLink.click();

      toast({ title: "Quiz terminé !", description: "Vos résultats ont été enregistrés avec succès." });
    } catch (error) {
      toast({
        title: "Erreur",
        description: error instanceof Error ? error.message : "Unknown error",
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
    setAnswers(new Array(quizData.questions.length).fill(null));
    setStudentName('');
    setStartTime(null);
  };

  const progress = ((currentQuestion) / quizData.questions.length) * 100;
  const filteredAnswers = answers.filter((a): a is AnswerResult => a !== null);

  if (showNameInput) {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">{quizData.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleStartQuiz} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="studentName" className="text-sm font-medium">Votre prénom</label>
              <Input
                id="studentName"
                type="text"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                placeholder="Entrez votre prénom"
                required
              />
            </div>
            <Button type="submit" className="w-full">Commencer le quiz</Button>
          </form>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-2xl mx-auto" style={cardStyle}>
      <CardHeader className="sticky top-0 z-10 bg-card">
        <CardTitle className="text-2xl">
          {showScore ? "Quiz terminé !" : quizData.title}
        </CardTitle>
        <div className="text-sm">Étudiant: {studentName}</div>
      </CardHeader>
      <CardContent style={contentStyle}>
        {showScore ? (
          <div className="space-y-4">
            <div className="text-center">
              <h2 className="text-xl font-bold mb-2">Score final: {score} sur {quizData.questions.length}</h2>
              <p className="text-lg mb-4">({Math.round((score / quizData.questions.length) * 100)}%)</p>
            </div>
            <div className="space-y-2">
              {answers.map((answer, index) => (
                <div key={index} className="flex items-center gap-2 p-2 rounded">
                  {answer?.correct ? (
                    <CheckCircle2 className="text-green-500" />
                  ) : (
                    <AlertCircle className="text-red-500" />
                  )}
                  <span>Question {index + 1}</span>
                </div>
              ))}
            </div>
            <Button onClick={restartQuiz} className="w-full">Nouveau quiz</Button>
          </div>
        ) : (
          <div className="space-y-4">
            <Progress value={progress} className="mb-4" />
            <p className="text-sm text-right mb-4">
              Question {currentQuestion + 1} sur {quizData.questions.length}
            </p>
            <QuestionRenderer question={quizData.questions[currentQuestion].question} />
                          <div className="grid gap-2">
                {quizData.questions[currentQuestion].answers.map((answer, index) => (
                <Button
                  key={index}
                  onClick={() => handleAnswerSelect(answer.isCorrect, answer.text)}
                  variant={answers[currentQuestion]?.selectedAnswer === answer.text ? 'default' : 'outline'}
                  className="text-left h-auto py-4 px-6 break-words"
                >
                  <p>{answer.text}</p>
                </Button>
              ))}
            </div>
            <div className="flex justify-between mt-4">
              <Button
                variant="outline"
                onClick={goToPreviousQuestion}
                disabled={currentQuestion === 0}
              >
                <ChevronLeft className="w-4 h-4 mr-2" /> Précédent
              </Button>
              {currentQuestion === quizData.questions.length - 1 ? (
                <Button onClick={() => finishQuiz(filteredAnswers)}>
                  Terminer
                </Button>
              ) : (
                <Button
                  variant="outline"
                  onClick={goToNextQuestion}
                  disabled={currentQuestion === quizData.questions.length - 1}
                >
                  Suivant <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}