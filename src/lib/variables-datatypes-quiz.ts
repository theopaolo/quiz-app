export const variablesDataTypesQuizData = {
  title: "Quiz JavaScript - Variables et Types de Données",
  questions: [
    {
      question: "Quel est le type de données retourné par `typeof null` ?",
      answers: [
        { text: "\"null\"", isCorrect: false },
        { text: "\"undefined\"", isCorrect: false },
        { text: "\"object\"", isCorrect: true },
        { text: "\"boolean\"", isCorrect: false }
      ]
    },
    {
      question: "Quelle déclaration crée une variable dans le scope le plus restrictif ?",
      answers: [
        { text: "var", isCorrect: false },
        { text: "let", isCorrect: false },
        { text: "const", isCorrect: false },
        { text: "let et const sont équivalents", isCorrect: true }
      ]
    },
    {
      question: "Que retourne cette expression ?\n```javascript\ntypeof (5 + \"3\")\n```",
      answers: [
        { text: "\"number\"", isCorrect: false },
        { text: "\"string\"", isCorrect: true },
        { text: "\"undefined\"", isCorrect: false },
        { text: "Une erreur", isCorrect: false }
      ]
    },
    {
      question: "Quelle est la différence entre `null` et `undefined` ?",
      answers: [
        { text: "Aucune différence", isCorrect: false },
        { text: "null est assigné explicitement, undefined est l'absence de valeur", isCorrect: true },
        { text: "undefined est assigné explicitement, null est l'absence de valeur", isCorrect: false },
        { text: "null est pour les objets, undefined pour les primitives", isCorrect: false }
      ]
    },
    {
      question: "Comment vérifier si une variable est un tableau ?",
      answers: [
        { text: "typeof variable === \"array\"", isCorrect: false },
        { text: "variable instanceof Array", isCorrect: false },
        { text: "Array.isArray(variable)", isCorrect: false },
        { text: "Les réponses b et c sont correctes", isCorrect: true }
      ]
    },
    {
      question: "`const` empêche la modification des propriétés d'un objet.",
      answers: [
        { text: "Vrai", isCorrect: false },
        { text: "Faux", isCorrect: true }
      ]
    },
    {
      question: "`NaN === NaN` retourne `true`.",
      answers: [
        { text: "Vrai", isCorrect: false },
        { text: "Faux", isCorrect: true }
      ]
    },
    {
      question: "Une variable déclarée avec `var` peut être redéclarée dans le même scope.",
      answers: [
        { text: "Vrai", isCorrect: true },
        { text: "Faux", isCorrect: false }
      ]
    },
    {
      question: "`Symbol()` crée toujours une valeur unique.",
      answers: [
        { text: "Vrai", isCorrect: true },
        { text: "Faux", isCorrect: false }
      ]
    },
    {
      question: "`BigInt` peut être mélangé avec `Number` dans les opérations arithmétiques.",
      answers: [
        { text: "Vrai", isCorrect: false },
        { text: "Faux", isCorrect: true }
      ]
    },
    {
      question: "Que va afficher ce code ?\n```javascript\nconsole.log(a);\nvar a = 5;\n```",
      answers: [
        { text: "5", isCorrect: false },
        { text: "undefined", isCorrect: true },
        { text: "Une erreur", isCorrect: false },
        { text: "null", isCorrect: false }
      ]
    },
    {
      question: "Quel sera le résultat ?\n```javascript\nlet x = 1;\nif (true) {\n    let x = 2;\n    console.log(x);\n}\nconsole.log(x);\n```",
      answers: [
        { text: "2 puis 2", isCorrect: false },
        { text: "2 puis 1", isCorrect: true },
        { text: "1 puis 1", isCorrect: false },
        { text: "Une erreur", isCorrect: false }
      ]
    },
    {
      question: "Que retourne cette expression ?\n```javascript\n[1, 2, 3] == [1, 2, 3]\n```",
      answers: [
        { text: "true", isCorrect: false },
        { text: "false", isCorrect: true },
        { text: "undefined", isCorrect: false },
        { text: "Une erreur", isCorrect: false }
      ]
    },
    {
      question: "Quel est le problème avec ce code ?\n```javascript\nconst obj = {a: 1};\nobj.a = 2;\nconsole.log(obj.a);\n```",
      answers: [
        { text: "Erreur - on ne peut pas modifier const", isCorrect: false },
        { text: "Aucun problème, affiche 2", isCorrect: true },
        { text: "Affiche undefined", isCorrect: false },
        { text: "Affiche 1", isCorrect: false }
      ]
    },
    {
      question: "Comment créer une vraie copie profonde d'un objet simple ?",
      answers: [
        { text: "Object.assign({}, obj)", isCorrect: false },
        { text: "JSON.parse(JSON.stringify(obj))", isCorrect: true },
        { text: "{...obj}", isCorrect: false },
        { text: "Object.create(obj)", isCorrect: false }
      ]
    },
    {
      question: "Comment déclarer plusieurs variables avec des valeurs par défaut en une ligne ?",
      answers: [
        { text: "const a, b, c = 1, 2, 3", isCorrect: false },
        { text: "const [a = 1, b = 2, c = 3] = []", isCorrect: true },
        { text: "let a = 1; b = 2; c = 3", isCorrect: false },
        { text: "var a = b = c = 1", isCorrect: false }
      ]
    },
    {
      question: "Comment vérifier si une valeur est vraiment un nombre (pas NaN) ?",
      answers: [
        { text: "typeof value === 'number'", isCorrect: false },
        { text: "Number.isFinite(value)", isCorrect: true },
        { text: "!isNaN(value)", isCorrect: false },
        { text: "value instanceof Number", isCorrect: false }
      ]
    },
    {
      question: "Comment convertir une chaîne en nombre de manière sûre ?",
      answers: [
        { text: "Number(str)", isCorrect: false },
        { text: "parseInt(str)", isCorrect: false },
        { text: "parseFloat(str)", isCorrect: true },
        { text: "+str", isCorrect: false }
      ]
    },
    {
      question: "Quelle est la différence entre primitive et objet en JavaScript ?",
      answers: [
        { text: "Aucune différence", isCorrect: false },
        { text: "Primitives par valeur et immutables, objets par référence et mutables", isCorrect: true },
        { text: "Les objets sont plus rapides", isCorrect: false },
        { text: "Les primitives peuvent seulement être des nombres", isCorrect: false }
      ]
    },
    {
      question: "Comment créer un type énumération en JavaScript ?",
      answers: [
        { text: "enum Status { PENDING, SUCCESS }", isCorrect: false },
        { text: "const Status = Object.freeze({ PENDING: 'pending' })", isCorrect: true },
        { text: "let Status = ['pending', 'success']", isCorrect: false },
        { text: "JavaScript ne supporte pas les énumérations", isCorrect: false }
      ]
    },
    {
      question: "Que donne `Boolean([])` ?",
      answers: [
        { text: "false", isCorrect: false },
        { text: "true", isCorrect: true },
        { text: "undefined", isCorrect: false },
        { text: "Une erreur", isCorrect: false }
      ]
    },
    {
      question: "Que donne `Number(\"123px\")` ?",
      answers: [
        { text: "123", isCorrect: false },
        { text: "NaN", isCorrect: true },
        { text: "123px", isCorrect: false },
        { text: "Une erreur", isCorrect: false }
      ]
    },
    {
      question: "Comment forcer la conversion en entier de \"123.89\" ?",
      answers: [
        { text: "Number(\"123.89\")", isCorrect: false },
        { text: "parseInt(\"123.89\")", isCorrect: true },
        { text: "parseFloat(\"123.89\")", isCorrect: false },
        { text: "\"123.89\" * 1", isCorrect: false }
      ]
    },
    {
      question: "Pourquoi ce code affiche-t-il 3, 3, 3 ?\n```javascript\nfor (var i = 0; i < 3; i++) {\n    setTimeout(() => console.log(i), 100);\n}\n```",
      answers: [
        { text: "Bug de setTimeout", isCorrect: false },
        { text: "var a un scope de fonction, i vaut 3 quand les callbacks s'exécutent", isCorrect: true },
        { text: "Les closures ne fonctionnent pas", isCorrect: false },
        { text: "Il n'y a pas de problème", isCorrect: false }
      ]
    },
    {
      question: "Comment corriger le problème précédent ?",
      answers: [
        { text: "Utiliser const au lieu de var", isCorrect: false },
        { text: "Utiliser let au lieu de var", isCorrect: true },
        { text: "Utiliser function au lieu d'arrow function", isCorrect: false },
        { text: "Ajouter async/await", isCorrect: false }
      ]
    },
    {
      question: "Que se passe-t-il avec la destructuration si il y a plus de variables que d'éléments ?\n```javascript\nconst arr = [1, 2, 3];\nconst [a, b, c, d] = arr;\nconsole.log(d);\n```",
      answers: [
        { text: "Une erreur", isCorrect: false },
        { text: "undefined", isCorrect: true },
        { text: "null", isCorrect: false },
        { text: "0", isCorrect: false }
      ]
    },
    {
      question: "Quel est le problème avec ce code ?\n```javascript\nconst config = { timeout: 5000 };\nfunction updateConfig(newConfig) {\n    config = {...config, ...newConfig};\n}\n```",
      answers: [
        { text: "Spread operator incorrect", isCorrect: false },
        { text: "On ne peut pas réassigner une variable const", isCorrect: true },
        { text: "newConfig n'est pas défini", isCorrect: false },
        { text: "Il n'y a pas de problème", isCorrect: false }
      ]
    },
    {
      question: "Comment implémenter un système de typage runtime basique ?",
      answers: [
        { text: "Utiliser typeof dans toutes les fonctions", isCorrect: false },
        { text: "Créer des getters/setters qui vérifient les types", isCorrect: true },
        { text: "Utiliser TypeScript à la place", isCorrect: false },
        { text: "Impossible en JavaScript", isCorrect: false }
      ]
    },
    {
      question: "À quoi sert un Proxy en JavaScript ?",
      answers: [
        { text: "Optimiser les performances", isCorrect: false },
        { text: "Intercepter et personnaliser les opérations sur les objets", isCorrect: true },
        { text: "Créer des copies d'objets", isCorrect: false },
        { text: "Gérer les erreurs", isCorrect: false }
      ]
    },
    {
      question: "Comment implémenter l'immutabilité profonde ?",
      answers: [
        { text: "Utiliser Object.freeze() seulement", isCorrect: false },
        { text: "Appliquer récursivement Object.freeze() sur toutes les propriétés", isCorrect: true },
        { text: "Utiliser const partout", isCorrect: false },
        { text: "Utiliser des Symbols", isCorrect: false }
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