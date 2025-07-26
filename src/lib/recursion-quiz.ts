export const recursionQuizData = {
  title: "Quiz JavaScript - Récursion",
  questions: [
    {
      question: "Que se passe-t-il si une fonction récursive n'a pas de cas de base ?",
      answers: [
        { text: "Elle retourne undefined", isCorrect: false },
        { text: "Elle provoque une erreur de syntaxe", isCorrect: false },
        { text: "Elle cause un débordement de pile (stack overflow)", isCorrect: true },
        { text: "Elle s'arrête automatiquement", isCorrect: false }
      ]
    },
    {
      question: "Dans l'ordre d'exécution de la pile d'appels, lequel est correct ?",
      answers: [
        { text: "FIFO (First In, First Out)", isCorrect: false },
        { text: "LIFO (Last In, First Out)", isCorrect: true },
        { text: "Ordre aléatoire", isCorrect: false },
        { text: "Ordre alphabétique", isCorrect: false }
      ]
    },
    {
      question: "Quelle est la complexité temporelle de Fibonacci récursif naïf ?",
      answers: [
        { text: "O(n)", isCorrect: false },
        { text: "O(n²)", isCorrect: false },
        { text: "O(2^n)", isCorrect: true },
        { text: "O(log n)", isCorrect: false }
      ]
    },
    {
      question: "Qu'est-ce que la récursion de queue (tail recursion) ?",
      answers: [
        { text: "Une récursion qui utilise une queue au lieu d'une pile", isCorrect: false },
        { text: "Une récursion où l'appel récursif est la dernière opération", isCorrect: true },
        { text: "Une récursion qui s'arrête automatiquement", isCorrect: false },
        { text: "Une récursion qui n'a pas de cas de base", isCorrect: false }
      ]
    },
    {
      question: "Que calcule factorielle(0) ?",
      answers: [
        { text: "0", isCorrect: false },
        { text: "1", isCorrect: true },
        { text: "undefined", isCorrect: false },
        { text: "Erreur", isCorrect: false }
      ]
    },
    {
      question: "La récursion est toujours plus rapide que l'itération.",
      answers: [
        { text: "Vrai", isCorrect: false },
        { text: "Faux", isCorrect: true }
      ]
    },
    {
      question: "Toute fonction récursive peut être convertie en version itérative.",
      answers: [
        { text: "Vrai", isCorrect: true },
        { text: "Faux", isCorrect: false }
      ]
    },
    {
      question: "La mémoïsation peut améliorer les performances de certaines fonctions récursives.",
      answers: [
        { text: "Vrai", isCorrect: true },
        { text: "Faux", isCorrect: false }
      ]
    },
    {
      question: "Une fonction récursive doit toujours avoir exactement un cas de base.",
      answers: [
        { text: "Vrai", isCorrect: false },
        { text: "Faux", isCorrect: true }
      ]
    },
    {
      question: "La récursion mutuelle implique qu'une fonction s'appelle elle-même.",
      answers: [
        { text: "Vrai", isCorrect: false },
        { text: "Faux", isCorrect: true }
      ]
    },
    {
      question: "Que retourne ce code pour puissance(2, 3) ?\n```javascript\nfunction puissance(base, exposant) {\n    if (exposant === 0) {\n        return 1;\n    }\n    return base * puissance(base, exposant - 1);\n}\n```",
      answers: [
        { text: "6", isCorrect: false },
        { text: "8", isCorrect: true },
        { text: "9", isCorrect: false },
        { text: "Une erreur", isCorrect: false }
      ]
    },
    {
      question: "Combien d'appels récursifs sont effectués pour factorielle(4) ?\n```javascript\nfunction factorielle(n) {\n    if (n <= 1) return 1;\n    return n * factorielle(n - 1);\n}\n```",
      answers: [
        { text: "3 appels", isCorrect: false },
        { text: "4 appels", isCorrect: true },
        { text: "5 appels", isCorrect: false },
        { text: "2 appels", isCorrect: false }
      ]
    },
    {
      question: "Que retourne cette fonction pour compterElements([1, 2, 3]) ?\n```javascript\nfunction compterElements(arr, index = 0) {\n    if (index >= arr.length) {\n        return 0;\n    }\n    return 1 + compterElements(arr, index + 1);\n}\n```",
      answers: [
        { text: "2", isCorrect: false },
        { text: "3", isCorrect: true },
        { text: "4", isCorrect: false },
        { text: "0", isCorrect: false }
      ]
    },
    {
      question: "Quel est le problème avec ce code ?\n```javascript\nfunction mauvaiseFonction(n) {\n    return n + mauvaiseFonction(n - 1);\n}\n```",
      answers: [
        { text: "Syntaxe incorrecte", isCorrect: false },
        { text: "Pas de cas de base - provoquera un débordement de pile", isCorrect: true },
        { text: "Mauvais nom de fonction", isCorrect: false },
        { text: "Il n'y a pas de problème", isCorrect: false }
      ]
    },
    {
      question: "Complétez le cas de base pour cette fonction qui calcule la somme des n premiers nombres :\n```javascript\nfunction sommeNombres(n) {\n    if (_______) {\n        return 0;\n    }\n    return n + sommeNombres(n - 1);\n}\n```",
      answers: [
        { text: "n < 0", isCorrect: false },
        { text: "n <= 0", isCorrect: true },
        { text: "n > 0", isCorrect: false },
        { text: "n === 1", isCorrect: false }
      ]
    },
    {
      question: "Quelle est la condition de cas de base correcte pour inverser une chaîne récursivement ?",
      answers: [
        { text: "str.length === 0", isCorrect: false },
        { text: "str.length <= 1", isCorrect: true },
        { text: "str.length > 1", isCorrect: false },
        { text: "str === null", isCorrect: false }
      ]
    },
    {
      question: "Comment optimiser Fibonacci avec la mémoïsation ?\n```javascript\nfunction fibonacci(n, memo = {}) {\n    if (n <= 1) return n;\n    if (_______) return _______;\n    memo[n] = _______;\n    return memo[n];\n}\n```",
      answers: [
        { text: "Vérifier memo[n] et utiliser fibonacci récursif avec memo", isCorrect: true },
        { text: "Utiliser un tableau au lieu d'un objet", isCorrect: false },
        { text: "Calculer iterativement", isCorrect: false },
        { text: "Utiliser Math.max", isCorrect: false }
      ]
    },
    {
      question: "Quelle est la différence entre récursion directe et indirecte ?",
      answers: [
        { text: "Aucune différence", isCorrect: false },
        { text: "Directe: fonction s'appelle elle-même, Indirecte: fonctions s'appellent mutuellement", isCorrect: true },
        { text: "Directe est plus rapide", isCorrect: false },
        { text: "Indirecte n'existe pas", isCorrect: false }
      ]
    },
    {
      question: "Quels sont les critères pour qu'un problème soit adapté à la récursion ?",
      answers: [
        { text: "Seulement la décomposition en sous-problèmes", isCorrect: false },
        { text: "Décomposition + cas de base + convergence vers le cas de base", isCorrect: true },
        { text: "Seulement un cas de base", isCorrect: false },
        { text: "Performance optimale requise", isCorrect: false }
      ]
    },
    {
      question: "Comment déboguer efficacement une fonction récursive ?",
      answers: [
        { text: "Utiliser seulement console.log", isCorrect: false },
        { text: "Logs avec indentation + petites valeurs + vérifier cas de base", isCorrect: true },
        { text: "Convertir en itération", isCorrect: false },
        { text: "Ignorer les erreurs", isCorrect: false }
      ]
    },
    {
      question: "Laquelle de ces versions de Fibonacci est plus efficace ?\n```javascript\n// Version A (Récursive)\nfunction fibA(n) {\n    if (n <= 1) return n;\n    return fibA(n - 1) + fibA(n - 2);\n}\n\n// Version B (Itérative)\nfunction fibB(n) {\n    if (n <= 1) return n;\n    let a = 0, b = 1;\n    for (let i = 2; i <= n; i++) {\n        [a, b] = [b, a + b];\n    }\n    return b;\n}\n```",
      answers: [
        { text: "Version A - récursive est toujours meilleure", isCorrect: false },
        { text: "Version B - O(n) vs O(2^n), moins d'usage mémoire", isCorrect: true },
        { text: "Elles sont équivalentes", isCorrect: false },
        { text: "Version A car plus lisible", isCorrect: false }
      ]
    },
    {
      question: "Tracez l'exécution de factorielle(3). Combien de retours d'appels ?",
      answers: [
        { text: "2 retours", isCorrect: false },
        { text: "3 retours", isCorrect: true },
        { text: "4 retours", isCorrect: false },
        { text: "1 retour", isCorrect: false }
      ]
    }
  ]
};

// Export des types pour maintenir la cohérence
export interface QuizQuestion {
  question: string;
  answers: Answer[];
}

export interface Answer {
  text: string;
  isCorrect: boolean;
}

export interface QuizResult {
  studentName: string;
  date: string;
  duration: number;
  score: number;
  totalQuestions: number;
  percentageScore: number;
  answers: AnswerResult[];
}

export interface AnswerResult {
  questionIndex: number;
  question: string;
  selectedAnswer: string;
  correct: boolean;
  timestamp: string;
}