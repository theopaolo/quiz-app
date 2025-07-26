export const loopsQuizData = {
  title: "Quiz JavaScript - Boucles",
  questions: [
    {
      question: "Que va afficher ce code ?\n```javascript\nfor (let i = 0; i < 3; i++) {\n    console.log(i);\n}\n```",
      answers: [
        { text: "0 1 2 3", isCorrect: false },
        { text: "0 1 2", isCorrect: true },
        { text: "1 2 3", isCorrect: false },
        { text: "1 2 3 4", isCorrect: false }
      ]
    },
    {
      question: "Combien de fois s'exécute cette boucle while ?\n```javascript\nlet compteur = 5;\nwhile (compteur > 0) {\n    compteur--;\n}\n```",
      answers: [
        { text: "4 fois", isCorrect: false },
        { text: "5 fois", isCorrect: true },
        { text: "6 fois", isCorrect: false },
        { text: "Boucle infinie", isCorrect: false }
      ]
    },
    {
      question: "Quelle est la différence principale entre `for...in` et `for...of` ?",
      answers: [
        { text: "for...in est plus rapide", isCorrect: false },
        { text: "for...in donne les indices, for...of donne les valeurs", isCorrect: true },
        { text: "Il n'y a pas de différence", isCorrect: false },
        { text: "for...of fonctionne seulement avec les objets", isCorrect: false }
      ]
    },
    {
      question: "Que fait l'instruction `continue` dans une boucle ?",
      answers: [
        { text: "Sort de la boucle", isCorrect: false },
        { text: "Passe à l'itération suivante", isCorrect: true },
        { text: "Arrête le programme", isCorrect: false },
        { text: "Recommence la boucle depuis le début", isCorrect: false }
      ]
    },
    {
      question: "Combien de fois \"Bonjour\" sera-t-il affiché ?\n```javascript\nfor (let i = 0; i < 5; i++) {\n    if (i === 3) {\n        break;\n    }\n    console.log(\"Bonjour\");\n}\n```",
      answers: [
        { text: "3 fois", isCorrect: true },
        { text: "4 fois", isCorrect: false },
        { text: "5 fois", isCorrect: false },
        { text: "2 fois", isCorrect: false }
      ]
    },
    {
      question: "Une boucle `do...while` s'exécute toujours au moins une fois.",
      answers: [
        { text: "Vrai", isCorrect: true },
        { text: "Faux", isCorrect: false }
      ]
    },
    {
      question: "On peut utiliser `for...of` sur un objet simple `{a: 1, b: 2}`.",
      answers: [
        { text: "Vrai", isCorrect: false },
        { text: "Faux", isCorrect: true }
      ]
    },
    {
      question: "L'instruction `break` peut être utilisée dans une boucle `forEach()`.",
      answers: [
        { text: "Vrai", isCorrect: false },
        { text: "Faux", isCorrect: true }
      ]
    },
    {
      question: "Il est possible d'avoir une boucle `for` sans condition.",
      answers: [
        { text: "Vrai", isCorrect: true },
        { text: "Faux", isCorrect: false }
      ]
    },
    {
      question: "La méthode `map()` modifie le tableau original.",
      answers: [
        { text: "Vrai", isCorrect: false },
        { text: "Faux", isCorrect: true }
      ]
    },
    {
      question: "Que va afficher ce code ?\n```javascript\nconst arr = ['a', 'b', 'c'];\nfor (let index in arr) {\n    console.log(typeof index);\n}\n```",
      answers: [
        { text: "\"number\" trois fois", isCorrect: false },
        { text: "\"string\" trois fois", isCorrect: true },
        { text: "\"undefined\" trois fois", isCorrect: false },
        { text: "Une erreur", isCorrect: false }
      ]
    },
    {
      question: "Combien de fois \"test\" sera-t-il affiché ?\n```javascript\nfor (let i = 0; i < 3; i++) {\n    for (let j = 0; j < 2; j++) {\n        console.log(\"test\");\n    }\n}\n```",
      answers: [
        { text: "5 fois", isCorrect: false },
        { text: "6 fois", isCorrect: true },
        { text: "3 fois", isCorrect: false },
        { text: "2 fois", isCorrect: false }
      ]
    },
    {
      question: "Que retourne cette fonction ?\n```javascript\nfunction compterPairs(nombres) {\n    let compte = 0;\n    for (let nombre of nombres) {\n        if (nombre % 2 === 0) {\n            compte++;\n        }\n    }\n    return compte;\n}\ncompterPairs([1, 2, 3, 4, 5, 6]);\n```",
      answers: [
        { text: "2", isCorrect: false },
        { text: "3", isCorrect: true },
        { text: "4", isCorrect: false },
        { text: "6", isCorrect: false }
      ]
    },
    {
      question: "Quel est le problème avec ce code ?\n```javascript\nconst arr = [1, 2, 3];\nfor (let i = 0; i <= arr.length; i++) {\n    console.log(arr[i]);\n}\n```",
      answers: [
        { text: "Syntaxe incorrecte", isCorrect: false },
        { text: "Off-by-one error - accès à arr[3] qui est undefined", isCorrect: true },
        { text: "Il faut utiliser < au lieu de <=", isCorrect: false },
        { text: "Il n'y a pas de problème", isCorrect: false }
      ]
    },
    {
      question: "Complétez cette boucle pour afficher les nombres pairs de 0 à 10 :\n```javascript\nfor (let i = 0; i <= 10; _______) {\n    console.log(i);\n}\n```",
      answers: [
        { text: "i++", isCorrect: false },
        { text: "i += 2", isCorrect: true },
        { text: "i = i + 1", isCorrect: false },
        { text: "++i", isCorrect: false }
      ]
    },
    {
      question: "Comment corriger cette boucle while qui compte de 10 à 1 ?\n```javascript\nlet i = 10;\nwhile (i >= 1) {\n    console.log(i);\n    // Que manque-t-il ?\n}\n```",
      answers: [
        { text: "i++", isCorrect: false },
        { text: "i--", isCorrect: true },
        { text: "i += 1", isCorrect: false },
        { text: "break", isCorrect: false }
      ]
    },
    {
      question: "Comment transformer cette boucle for en forEach ?\n```javascript\nconst fruits = [\"pomme\", \"banane\", \"orange\"];\nfor (let i = 0; i < fruits.length; i++) {\n    console.log(fruits[i]);\n}\n```",
      answers: [
        { text: "fruits.map(fruit => console.log(fruit))", isCorrect: false },
        { text: "fruits.forEach(fruit => console.log(fruit))", isCorrect: true },
        { text: "fruits.filter(fruit => console.log(fruit))", isCorrect: false },
        { text: "fruits.reduce(fruit => console.log(fruit))", isCorrect: false }
      ]
    },
    {
      question: "Quelle est la syntaxe correcte pour créer un tableau de nombres de 1 à 5 avec une boucle for ?",
      answers: [
        { text: "for (let i = 0; i < 5; i++) { nombres.push(i); }", isCorrect: false },
        { text: "for (let i = 1; i <= 5; i++) { nombres.push(i); }", isCorrect: true },
        { text: "for (let i = 1; i < 5; i++) { nombres.push(i); }", isCorrect: false },
        { text: "for (let i = 0; i <= 5; i++) { nombres.push(i); }", isCorrect: false }
      ]
    },
    {
      question: "Quelle méthode utiliser pour transformer chaque élément d'un tableau ?",
      answers: [
        { text: "forEach()", isCorrect: false },
        { text: "map()", isCorrect: true },
        { text: "filter()", isCorrect: false },
        { text: "reduce()", isCorrect: false }
      ]
    },
    {
      question: "Quelle méthode utiliser pour ne garder que certains éléments d'un tableau ?",
      answers: [
        { text: "map()", isCorrect: false },
        { text: "filter()", isCorrect: true },
        { text: "forEach()", isCorrect: false },
        { text: "find()", isCorrect: false }
      ]
    },
    {
      question: "Que fait ce code ?\n```javascript\nconst nombres = [1, 2, 3, 4];\nconst resultat = nombres.reduce((acc, curr) => acc + curr, 0);\n```",
      answers: [
        { text: "Calcule la moyenne du tableau", isCorrect: false },
        { text: "Calcule la somme du tableau (10)", isCorrect: true },
        { text: "Trouve le maximum du tableau", isCorrect: false },
        { text: "Compte les éléments du tableau", isCorrect: false }
      ]
    },
    {
      question: "Comment parcourir un objet avec ses clés et valeurs ?\n```javascript\nconst obj = {a: 1, b: 2, c: 3};\n```",
      answers: [
        { text: "for (let [cle, valeur] of Object.keys(obj))", isCorrect: false },
        { text: "for (let [cle, valeur] of Object.entries(obj))", isCorrect: true },
        { text: "for (let [cle, valeur] of Object.values(obj))", isCorrect: false },
        { text: "for (let [cle, valeur] in obj)", isCorrect: false }
      ]
    },
    {
      question: "Laquelle de ces approches est généralement la plus efficace pour parcourir un grand tableau ?",
      answers: [
        { text: "for classique", isCorrect: true },
        { text: "for...of", isCorrect: false },
        { text: "forEach", isCorrect: false },
        { text: "Elles sont équivalentes", isCorrect: false }
      ]
    },
    {
      question: "Comment optimiser cette boucle ?\n```javascript\nconst arr = [1, 2, 3, 4, 5];\nfor (let i = 0; i < arr.length; i++) {\n    // traitement\n}\n```",
      answers: [
        { text: "Utiliser for...of à la place", isCorrect: false },
        { text: "Stocker arr.length dans une variable", isCorrect: true },
        { text: "Utiliser forEach à la place", isCorrect: false },
        { text: "Aucune optimisation nécessaire", isCorrect: false }
      ]
    },
    {
      question: "Pourquoi cette boucle ne s'arrête-t-elle jamais ?\n```javascript\nlet i = 0;\nwhile (i < 10) {\n    console.log(i);\n    // Oubli d'incrémenter i\n}\n```",
      answers: [
        { text: "La condition est incorrecte", isCorrect: false },
        { text: "Oubli d'incrémenter i", isCorrect: true },
        { text: "Il faut utiliser for au lieu de while", isCorrect: false },
        { text: "console.log bloque la boucle", isCorrect: false }
      ]
    },
    {
      question: "Comment corriger ce code qui devrait afficher 1, 2, 3 après 1 seconde chacun ?\n```javascript\nfor (var i = 1; i <= 3; i++) {\n    setTimeout(() => console.log(i), 1000);\n}\n```",
      answers: [
        { text: "Utiliser const au lieu de var", isCorrect: false },
        { text: "Utiliser let au lieu de var", isCorrect: true },
        { text: "Ajouter bind(this)", isCorrect: false },
        { text: "Utiliser une fonction normale au lieu d'arrow function", isCorrect: false }
      ]
    },
    {
      question: "Dans quels cas utiliser `while` plutôt que `for` ?",
      answers: [
        { text: "Toujours, while est plus performant", isCorrect: false },
        { text: "Quand le nombre d'itérations est inconnu", isCorrect: true },
        { text: "Jamais, for est toujours préférable", isCorrect: false },
        { text: "Seulement pour les tableaux", isCorrect: false }
      ]
    },
    {
      question: "Quelle est la différence principale entre forEach et for...of ?",
      answers: [
        { text: "forEach est plus rapide", isCorrect: false },
        { text: "forEach ne permet pas break/continue, for...of oui", isCorrect: true },
        { text: "for...of ne fonctionne qu'avec les tableaux", isCorrect: false },
        { text: "Il n'y a pas de différence", isCorrect: false }
      ]
    },
    {
      question: "Que signifie \"boucle infinie\" et comment l'éviter ?",
      answers: [
        { text: "Une boucle très lente - utiliser des méthodes optimisées", isCorrect: false },
        { text: "Une boucle qui ne s'arrête jamais - s'assurer que la condition évolue", isCorrect: true },
        { text: "Une boucle avec trop d'itérations - limiter le nombre", isCorrect: false },
        { text: "Une boucle avec une erreur - utiliser try-catch", isCorrect: false }
      ]
    },
    {
      question: "Pourquoi éviter de modifier un tableau pendant qu'on le parcourt ?",
      answers: [
        { text: "C'est interdit par JavaScript", isCorrect: false },
        { text: "Cela peut causer des comportements imprévisibles", isCorrect: true },
        { text: "C'est moins performant", isCorrect: false },
        { text: "Il n'y a pas de problème", isCorrect: false }
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