export const conditionsQuizData = {
  title: "Quiz JavaScript - Conditions",
  questions: [
    {
      question: "Que va afficher `console.log(5 > 3 && 2 < 4)` ?",
      answers: [
        { text: "true", isCorrect: true },
        { text: "false", isCorrect: false },
        { text: "undefined", isCorrect: false },
        { text: "Erreur", isCorrect: false }
      ]
    },
    {
      question: "Quelle valeur est fausse (falsy) en JavaScript ?",
      answers: [
        { text: "[]", isCorrect: false },
        { text: "\"0\"", isCorrect: false },
        { text: "0", isCorrect: true },
        { text: "{}", isCorrect: false }
      ]
    },
    {
      question: "À quoi l'expression `!false || true` s'évalue-t-elle ?",
      answers: [
        { text: "true", isCorrect: true },
        { text: "false", isCorrect: false },
        { text: "undefined", isCorrect: false },
        { text: "Erreur", isCorrect: false }
      ]
    },
    {
      question: "Quand devriez-vous utiliser une instruction switch au lieu de if-else ?",
      answers: [
        { text: "Quand vous avez seulement deux conditions", isCorrect: false },
        { text: "Quand vous vérifiez une variable contre plusieurs valeurs", isCorrect: true },
        { text: "Quand vous utilisez des opérateurs logiques", isCorrect: false },
        { text: "Quand les conditions sont complexes", isCorrect: false }
      ]
    },
    {
      question: "Que se passe-t-il si vous oubliez `break` dans un case de switch ?",
      answers: [
        { text: "Erreur de syntaxe", isCorrect: false },
        { text: "Exécution continue au case suivant (fall-through)", isCorrect: true },
        { text: "L'instruction switch s'arrête", isCorrect: false },
        { text: "Erreur d'exécution", isCorrect: false }
      ]
    },
    {
      question: "L'expression `\"\" && \"hello\"` s'évalue à `\"hello\"`.",
      answers: [
        { text: "Vrai", isCorrect: false },
        { text: "Faux", isCorrect: true }
      ]
    },
    {
      question: "Dans `condition1 || condition2`, si condition1 est vraie, condition2 est toujours évaluée.",
      answers: [
        { text: "Vrai", isCorrect: false },
        { text: "Faux", isCorrect: true }
      ]
    },
    {
      question: "L'opérateur ternaire peut remplacer de simples instructions if-else.",
      answers: [
        { text: "Vrai", isCorrect: true },
        { text: "Faux", isCorrect: false }
      ]
    },
    {
      question: "`null == undefined` retourne `true` en JavaScript.",
      answers: [
        { text: "Vrai", isCorrect: true },
        { text: "Faux", isCorrect: false }
      ]
    },
    {
      question: "Vous pouvez avoir plusieurs cases `default` dans une instruction switch.",
      answers: [
        { text: "Vrai", isCorrect: false },
        { text: "Faux", isCorrect: true }
      ]
    },
    {
      question: "Que va afficher ce code ?\n```javascript\nlet age = 20;\nif (age >= 18) {\n    console.log(\"Adulte\");\n} else if (age >= 13) {\n    console.log(\"Adolescent\");\n} else {\n    console.log(\"Enfant\");\n}\n```",
      answers: [
        { text: "\"Adulte\"", isCorrect: true },
        { text: "\"Adolescent\"", isCorrect: false },
        { text: "\"Enfant\"", isCorrect: false },
        { text: "Rien", isCorrect: false }
      ]
    },
    {
      question: "Que va afficher ce code ?\n```javascript\nlet x = 0;\nconsole.log(x || \"défaut\");\n```",
      answers: [
        { text: "0", isCorrect: false },
        { text: "\"défaut\"", isCorrect: true },
        { text: "true", isCorrect: false },
        { text: "false", isCorrect: false }
      ]
    },
    {
      question: "Complétez cet opérateur ternaire pour vérifier si un nombre est pair :\n```javascript\nlet num = 8;\nlet result = num % 2 === 0 ? _______ : _______;\n```",
      answers: [
        { text: "\"pair\" : \"impair\"", isCorrect: true },
        { text: "\"impair\" : \"pair\"", isCorrect: false },
        { text: "true : false", isCorrect: false },
        { text: "1 : 0", isCorrect: false }
      ]
    },
    {
      question: "Qu'est-ce qui ne va pas avec cette instruction switch ?\n```javascript\nswitch (grade) {\n    case 'A':\n        console.log(\"Excellent\");\n    case 'B':\n        console.log(\"Bien\");\n        break;\n    default:\n        console.log(\"Essayez plus fort\");\n}\n```",
      answers: [
        { text: "Syntaxe incorrecte", isCorrect: false },
        { text: "break manquant après case 'A'", isCorrect: true },
        { text: "default mal placé", isCorrect: false },
        { text: "Il n'y a pas de problème", isCorrect: false }
      ]
    },
    {
      question: "Écrivez une condition pour vérifier si un utilisateur peut voter (âge 18+) et est inscrit :\n```javascript\nif (_______ && _______) {\n    console.log(\"Peut voter\");\n}\n```",
      answers: [
        { text: "age > 18 && registered", isCorrect: false },
        { text: "age >= 18 && isRegistered", isCorrect: true },
        { text: "age === 18 && registered", isCorrect: false },
        { text: "age < 18 && isRegistered", isCorrect: false }
      ]
    },
    {
      question: "Quelle est la meilleure clause de garde pour sortir tôt si les données ne sont pas valides ?\n```javascript\nfunction processData(data) {\n    if (_______) {\n        return;\n    }\n}\n```",
      answers: [
        { text: "data === true", isCorrect: false },
        { text: "!data", isCorrect: true },
        { text: "data > 0", isCorrect: false },
        { text: "data.length", isCorrect: false }
      ]
    },
    {
      question: "Convertissez ce if-else en opérateur ternaire :\n```javascript\nif (score >= 60) {\n    result = \"Réussi\";\n} else {\n    result = \"Échoué\";\n}\n```",
      answers: [
        { text: "result = score >= 60 ? \"Réussi\" : \"Échoué\";", isCorrect: true },
        { text: "result = score < 60 ? \"Réussi\" : \"Échoué\";", isCorrect: false },
        { text: "result = score >= 60 ? \"Échoué\" : \"Réussi\";", isCorrect: false },
        { text: "result = score === 60 ? \"Réussi\" : \"Échoué\";", isCorrect: false }
      ]
    },
    {
      question: "Quelle est la différence entre `==` et `===` ?",
      answers: [
        { text: "Aucune différence", isCorrect: false },
        { text: "=== est l'égalité stricte sans conversion de type", isCorrect: true },
        { text: "== est plus strict que ===", isCorrect: false },
        { text: "=== permet la conversion de type", isCorrect: false }
      ]
    },
    {
      question: "Qu'est-ce que l'évaluation court-circuit et pourquoi est-elle utile ?",
      answers: [
        { text: "Une technique de debugging", isCorrect: false },
        { text: "Arrêt de l'évaluation une fois le résultat déterminé", isCorrect: true },
        { text: "Une optimisation du compilateur", isCorrect: false },
        { text: "Une méthode de validation", isCorrect: false }
      ]
    },
    {
      question: "Quand utiliser des conditions imbriquées vs des opérateurs logiques ?",
      answers: [
        { text: "Toujours utiliser des opérateurs logiques", isCorrect: false },
        { text: "Opérateurs pour conditions simples, imbriqué pour logique complexe", isCorrect: true },
        { text: "Toujours utiliser des conditions imbriquées", isCorrect: false },
        { text: "Il n'y a pas de différence", isCorrect: false }
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