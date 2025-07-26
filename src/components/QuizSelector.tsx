'use client';

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Code, Zap, ArrowLeft, Database, RotateCcw, Hash, GitBranch, Layers, GitFork, Package, MonitorSpeaker, AlertTriangle } from 'lucide-react';
import QuizApp from './QuizApp';
import { functionsQuizData } from '../lib/functions-quiz';
import { asyncQuizData } from '../lib/async-quiz';
import { conditionsQuizData } from '../lib/conditions-quiz';
import { dataStructuresQuizData } from '../lib/data-structures-quiz';
import { errorHandlingQuizData } from '../lib/error-handling-quiz';
import { ioQuizData } from '../lib/io-quiz';
import { loopsQuizData } from '../lib/loops-quiz';
import { modulesImportsQuizData } from '../lib/modules-imports-quiz';
import { oopQuizData } from '../lib/oop-quiz';
import { recursionQuizData } from '../lib/recursion-quiz';
import { variablesDataTypesQuizData } from '../lib/variables-datatypes-quiz';
import { quizData } from '../lib/quiz-data';

interface QuizOption {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  data: any;
  questionsCount: number;
  difficulty: 'Débutant' | 'Intermédiaire' | 'Avancé';
}

const availableQuizzes: QuizOption[] = [
  {
    id: 'variables',
    title: 'Variables et Types de Données',
    description: 'Maîtrisez les variables, types primitifs, coercition, scope, hoisting et les concepts fondamentaux de JavaScript.',
    icon: <Hash className="w-6 h-6" />,
    data: variablesDataTypesQuizData,
    questionsCount: variablesDataTypesQuizData.questions.length,
    difficulty: 'Débutant'
  },
  {
    id: 'conditions',
    title: 'Conditions et Logique',
    description: 'Explorez les conditions if/else, switch, opérateurs logiques, évaluation court-circuit et opérateur ternaire.',
    icon: <GitFork className="w-6 h-6" />,
    data: conditionsQuizData,
    questionsCount: conditionsQuizData.questions.length,
    difficulty: 'Débutant'
  },
  {
    id: 'loops',
    title: 'Boucles et Itération',
    description: 'Maîtrisez les boucles for, while, do-while, for...in, for...of et les méthodes de tableaux comme forEach, map, filter.',
    icon: <RotateCcw className="w-6 h-6" />,
    data: loopsQuizData,
    questionsCount: loopsQuizData.questions.length,
    difficulty: 'Débutant'
  },
  {
    id: 'functions',
    title: 'JavaScript - Fonctions',
    description: 'Testez vos connaissances sur les fonctions JavaScript : déclarations, expressions, closures, arrow functions, et plus.',
    icon: <Code className="w-6 h-6" />,
    data: functionsQuizData,
    questionsCount: functionsQuizData.questions.length,
    difficulty: 'Intermédiaire'
  },
  {
    id: 'oop',
    title: 'Programmation Orientée Objet',
    description: 'Maîtrisez les classes, constructeurs, héritage, encapsulation, propriétés privées et les patterns de conception.',
    icon: <Layers className="w-6 h-6" />,
    data: oopQuizData,
    questionsCount: oopQuizData.questions.length,
    difficulty: 'Intermédiaire'
  },
  {
    id: 'recursion',
    title: 'Récursion',
    description: 'Explorez la récursion, pile d\'appels, cas de base, mémoïsation et techniques d\'optimisation des algorithmes récursifs.',
    icon: <GitBranch className="w-6 h-6" />,
    data: recursionQuizData,
    questionsCount: recursionQuizData.questions.length,
    difficulty: 'Intermédiaire'
  },
  {
    id: 'datastructures',
    title: 'Structures de Données',
    description: 'Explorez les tableaux, objets, Maps, Sets, manipulation de chaînes et techniques d\'optimisation des performances.',
    icon: <Database className="w-6 h-6" />,
    data: dataStructuresQuizData,
    questionsCount: dataStructuresQuizData.questions.length,
    difficulty: 'Intermédiaire'
  },
  {
    id: 'modules',
    title: 'Modules et Imports',
    description: 'Maîtrisez les modules ES6, imports/exports, barrel exports, imports dynamiques et organisation du code.',
    icon: <Package className="w-6 h-6" />,
    data: modulesImportsQuizData,
    questionsCount: modulesImportsQuizData.questions.length,
    difficulty: 'Intermédiaire'
  },
  {
    id: 'io',
    title: 'Entrées-Sorties',
    description: 'Maîtrisez les interactions utilisateur, APIs, stockage local, fichiers et sécurité des entrées.',
    icon: <MonitorSpeaker className="w-6 h-6" />,
    data: ioQuizData,
    questionsCount: ioQuizData.questions.length,
    difficulty: 'Intermédiaire'
  },
  {
    id: 'async',
    title: 'Programmation Asynchrone',
    description: 'Maîtrisez les concepts asynchrones : Promises, async/await, Event Loop, patterns et optimisations.',
    icon: <Zap className="w-6 h-6" />,
    data: asyncQuizData,
    questionsCount: asyncQuizData.questions.length,
    difficulty: 'Avancé'
  },
  {
    id: 'errors',
    title: 'Gestion d\'Erreurs',
    description: 'Maîtrisez try-catch, Promise errors, custom errors, logging, debugging et patterns avancés.',
    icon: <AlertTriangle className="w-6 h-6" />,
    data: errorHandlingQuizData,
    questionsCount: errorHandlingQuizData.questions.length,
    difficulty: 'Avancé'
  },
  {
    id: 'fullstack',
    title: 'JavaScript Full Stack',
    description: 'Quiz complet couvrant JavaScript, Node.js, Express, bases de données et développement full-stack.',
    icon: <BookOpen className="w-6 h-6" />,
    data: quizData,
    questionsCount: quizData.questions.length,
    difficulty: 'Intermédiaire'
  }
];

export default function QuizSelector() {
  const [selectedQuiz, setSelectedQuiz] = useState<QuizOption | null>(null);

  if (selectedQuiz) {
    return (
      <div className="w-full max-w-2xl mx-auto">
        <div className="mb-4">
          <Button
            variant="outline"
            onClick={() => setSelectedQuiz(null)}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à la sélection
          </Button>
        </div>
        <QuizApp quizData={selectedQuiz.data} />
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-3xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Centre d'Évaluation JavaScript
          </CardTitle>
          <p className="text-muted-foreground mt-2">
            Choisissez un quiz pour tester vos connaissances et améliorer vos compétences
          </p>
        </CardHeader>
      </Card>

      <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-6">
        {availableQuizzes.map((quiz) => (
          <Card key={quiz.id} className="hover:shadow-lg transition-shadow cursor-pointer group">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {quiz.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold">{quiz.title}</h3>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        quiz.difficulty === 'Débutant' ? 'bg-green-100 text-green-800' :
                        quiz.difficulty === 'Intermédiaire' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {quiz.difficulty}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {quiz.questionsCount} questions
                      </span>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">{quiz.description}</p>
                  <Button
                    onClick={() => setSelectedQuiz(quiz)}
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground"
                  >
                    Commencer ce quiz
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

            <Card className="bg-muted/50">
                <CardContent className="p-6 text-center">
          <h4 className="font-semibold mb-2">À propos des quiz</h4>
          <p className="text-sm text-muted-foreground">
            12 modules complets avec plus de 400 questions couvrant tous les aspects de JavaScript.
            Chaque quiz inclut des exemples de code avec coloration syntaxique,
            des explications détaillées et la possibilité de télécharger vos résultats.
            Prenez votre temps et bonne chance ! 🚀
          </p>
        </CardContent>
      </Card>
    </div>
  );
}