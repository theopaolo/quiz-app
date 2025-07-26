export const dataStructuresQuizData = {
  title: "Quiz JavaScript - Structures de Données",
  questions: [
    {
      question: "Quelle méthode retourne un nouveau tableau sans modifier l'original ?",
      answers: [
        { text: "push()", isCorrect: false },
        { text: "map()", isCorrect: true },
        { text: "splice()", isCorrect: false },
        { text: "sort()", isCorrect: false }
      ]
    },
    {
      question: "Que retourne cette expression : `[1, 2, 3].indexOf(4)` ?",
      answers: [
        { text: "undefined", isCorrect: false },
        { text: "null", isCorrect: false },
        { text: "-1", isCorrect: true },
        { text: "0", isCorrect: false }
      ]
    },
    {
      question: "Quelle est la différence principale entre `==` et `===` pour les objets ?",
      answers: [
        { text: "=== compare les valeurs, == compare les références", isCorrect: false },
        { text: "== compare les valeurs, === compare les références", isCorrect: false },
        { text: "Les deux comparent les références", isCorrect: true },
        { text: "Les deux comparent les valeurs", isCorrect: false }
      ]
    },
    {
      question: "Comment créer un Set à partir d'un tableau ?",
      answers: [
        { text: "Set.from(array)", isCorrect: false },
        { text: "new Set(array)", isCorrect: true },
        { text: "Set.create(array)", isCorrect: false },
        { text: "array.toSet()", isCorrect: false }
      ]
    },
    {
      question: "Que fait `Object.keys({a: 1, b: 2})` ?",
      answers: [
        { text: "Retourne [1, 2]", isCorrect: false },
        { text: "Retourne [\"a\", \"b\"]", isCorrect: true },
        { text: "Retourne [[\"a\", 1], [\"b\", 2]]", isCorrect: false },
        { text: "Retourne {a: 1, b: 2}", isCorrect: false }
      ]
    },
    {
      question: "`Array.isArray([])` retourne `true`.",
      answers: [
        { text: "Vrai", isCorrect: true },
        { text: "Faux", isCorrect: false }
      ]
    },
    {
      question: "Un Map peut avoir des objets comme clés.",
      answers: [
        { text: "Vrai", isCorrect: true },
        { text: "Faux", isCorrect: false }
      ]
    },
    {
      question: "`\"hello\".length` est une méthode.",
      answers: [
        { text: "Vrai", isCorrect: false },
        { text: "Faux", isCorrect: true }
      ]
    },
    {
      question: "`JSON.stringify()` peut sérialiser les fonctions.",
      answers: [
        { text: "Vrai", isCorrect: false },
        { text: "Faux", isCorrect: true }
      ]
    },
    {
      question: "WeakMap permet l'itération avec `for...of`.",
      answers: [
        { text: "Vrai", isCorrect: false },
        { text: "Faux", isCorrect: true }
      ]
    },
    {
      question: "Que va afficher ce code ?\n```javascript\nconst arr = [1, 2, 3];\narr.push(4);\nconsole.log(arr.length);\n```",
      answers: [
        { text: "3", isCorrect: false },
        { text: "4", isCorrect: true },
        { text: "undefined", isCorrect: false },
        { text: "Une erreur", isCorrect: false }
      ]
    },
    {
      question: "Quel sera le résultat ?\n```javascript\nconst obj = {a: 1, b: 2};\ndelete obj.a;\nconsole.log(Object.keys(obj));\n```",
      answers: [
        { text: "[\"a\", \"b\"]", isCorrect: false },
        { text: "[\"b\"]", isCorrect: true },
        { text: "[\"a\"]", isCorrect: false },
        { text: "[]", isCorrect: false }
      ]
    },
    {
      question: "Que retourne cette expression ?\n```javascript\n[1, 2, 3].map(x => x * 2).filter(x => x > 4);\n```",
      answers: [
        { text: "[2, 4, 6]", isCorrect: false },
        { text: "[6]", isCorrect: true },
        { text: "[4, 6]", isCorrect: false },
        { text: "[2, 6]", isCorrect: false }
      ]
    },
    {
      question: "Quel est le problème avec ce code ?\n```javascript\nconst original = {a: {b: 1}};\nconst copie = {...original};\ncopie.a.b = 2;\nconsole.log(original.a.b);\n```",
      answers: [
        { text: "Affiche 1 - copie indépendante", isCorrect: false },
        { text: "Affiche 2 - copie superficielle, objet imbriqué partagé", isCorrect: true },
        { text: "Erreur de syntaxe", isCorrect: false },
        { text: "Affiche undefined", isCorrect: false }
      ]
    },
    {
      question: "Comment supprimer les doublons d'un tableau ?",
      answers: [
        { text: "arr.filter((v, i) => arr.indexOf(v) === i)", isCorrect: false },
        { text: "[...new Set(arr)]", isCorrect: true },
        { text: "arr.reduce((acc, v) => acc.includes(v) ? acc : [...acc, v], [])", isCorrect: false },
        { text: "Toutes les réponses ci-dessus", isCorrect: false }
      ]
    },
    {
      question: "Comment obtenir la valeur maximale dans un tableau de nombres ?",
      answers: [
        { text: "Math.max(nombres)", isCorrect: false },
        { text: "Math.max(...nombres)", isCorrect: true },
        { text: "nombres.max()", isCorrect: false },
        { text: "nombres.sort().last()", isCorrect: false }
      ]
    },
    {
      question: "Comment grouper un tableau d'objets par une propriété ?",
      answers: [
        { text: "Utiliser map() puis filter()", isCorrect: false },
        { text: "Utiliser reduce() pour construire un objet groupé", isCorrect: true },
        { text: "Utiliser forEach() avec des conditions", isCorrect: false },
        { text: "Utiliser sort() puis slice()", isCorrect: false }
      ]
    },
    {
      question: "Comment inverser les clés et valeurs d'un objet ?",
      answers: [
        { text: "Object.reverse(obj)", isCorrect: false },
        { text: "Object.fromEntries(Object.entries(obj).map(([k, v]) => [v, k]))", isCorrect: true },
        { text: "obj.reverse()", isCorrect: false },
        { text: "Object.keys(obj).reverse()", isCorrect: false }
      ]
    },
    {
      question: "Quelle est la différence entre Map et WeakMap ?",
      answers: [
        { text: "Aucune différence notable", isCorrect: false },
        { text: "Map est itérable, WeakMap ne l'est pas et permet le garbage collection", isCorrect: true },
        { text: "WeakMap est plus rapide", isCorrect: false },
        { text: "Map ne peut avoir que des strings comme clés", isCorrect: false }
      ]
    },
    {
      question: "Quand utiliser un Set plutôt qu'un Array ?",
      answers: [
        { text: "Toujours, Set est toujours meilleur", isCorrect: false },
        { text: "Pour des collections de valeurs uniques avec vérifications fréquentes", isCorrect: true },
        { text: "Jamais, Array est suffisant", isCorrect: false },
        { text: "Seulement pour les nombres", isCorrect: false }
      ]
    },
    {
      question: "Comment implémenter une pile (stack) avec un Array ?",
      answers: [
        { text: "Utiliser push() et shift()", isCorrect: false },
        { text: "Utiliser push() et pop()", isCorrect: true },
        { text: "Utiliser unshift() et pop()", isCorrect: false },
        { text: "Utiliser splice() uniquement", isCorrect: false }
      ]
    },
    {
      question: "Comment implémenter une file (queue) avec un Array ?",
      answers: [
        { text: "Utiliser push() et pop()", isCorrect: false },
        { text: "Utiliser push() et shift()", isCorrect: true },
        { text: "Utiliser unshift() et pop()", isCorrect: false },
        { text: "Utiliser splice() pour les deux opérations", isCorrect: false }
      ]
    },
    {
      question: "Quelle opération est la plus rapide sur un grand tableau ?",
      answers: [
        { text: "array[index] (accès par index)", isCorrect: true },
        { text: "array.includes(value) (recherche)", isCorrect: false },
        { text: "array.push(value) (ajout à la fin)", isCorrect: false },
        { text: "array.splice(0, 1) (suppression au début)", isCorrect: false }
      ]
    },
    {
      question: "Pourquoi éviter de modifier un tableau pendant son itération avec `forEach` ?",
      answers: [
        { text: "C'est interdit par le langage", isCorrect: false },
        { text: "Cela peut causer des comportements imprévisibles", isCorrect: true },
        { text: "C'est moins performant", isCorrect: false },
        { text: "Il n'y a pas de problème", isCorrect: false }
      ]
    },
    {
      question: "Comment optimiser la recherche fréquente d'éléments dans une grande collection ?",
      answers: [
        { text: "Utiliser Array avec includes()", isCorrect: false },
        { text: "Utiliser Map ou Set pour un accès O(1)", isCorrect: true },
        { text: "Trier le tableau d'abord", isCorrect: false },
        { text: "Utiliser for...in loops", isCorrect: false }
      ]
    },
    {
      question: "Comment vérifier si une chaîne contient uniquement des chiffres ?",
      answers: [
        { text: "str.isNumeric()", isCorrect: false },
        { text: "/^\\d+$/.test(str)", isCorrect: true },
        { text: "Number(str) !== NaN", isCorrect: false },
        { text: "str.match(/[0-9]/)", isCorrect: false }
      ]
    },
    {
      question: "Comment capitaliser chaque mot d'une phrase ?",
      answers: [
        { text: "str.toUpperCase()", isCorrect: false },
        { text: "str.replace(/\\b\\w/g, l => l.toUpperCase())", isCorrect: true },
        { text: "str.capitalize()", isCorrect: false },
        { text: "str.split('').map(c => c.toUpperCase()).join('')", isCorrect: false }
      ]
    },
    {
      question: "Comment compter les occurrences de chaque caractère dans une chaîne ?",
      answers: [
        { text: "Utiliser un objet et reduce()", isCorrect: true },
        { text: "Utiliser split() puis length", isCorrect: false },
        { text: "Utiliser match() avec regex", isCorrect: false },
        { text: "Utiliser indexOf() en boucle", isCorrect: false }
      ]
    },
    {
      question: "Comment faire un clonage profond d'un objet sans JSON.stringify ?",
      answers: [
        { text: "Utiliser Object.assign()", isCorrect: false },
        { text: "Implémenter une fonction récursive", isCorrect: true },
        { text: "Utiliser le spread operator", isCorrect: false },
        { text: "Utiliser Object.create()", isCorrect: false }
      ]
    },
    {
      question: "Comment créer un objet immutable en JavaScript ?",
      answers: [
        { text: "Utiliser const uniquement", isCorrect: false },
        { text: "Utiliser Object.freeze()", isCorrect: true },
        { text: "Utiliser let au lieu de var", isCorrect: false },
        { text: "Utiliser des getters seulement", isCorrect: false }
      ]
    },
    {
      question: "Comment implémenter un cache LRU (Least Recently Used) ?",
      answers: [
        { text: "Utiliser un Array simple", isCorrect: false },
        { text: "Utiliser un Map pour maintenir l'ordre d'insertion", isCorrect: true },
        { text: "Utiliser un Object avec timestamps", isCorrect: false },
        { text: "Utiliser localStorage", isCorrect: false }
      ]
    },
    {
      question: "Pourquoi ce code ne fonctionne-t-il pas comme attendu ?\n```javascript\nconst arr = [1, 2, 3];\nconst newArr = arr;\nnewArr.push(4);\nconsole.log(arr); // [1, 2, 3, 4] - pourquoi ?\n```",
      answers: [
        { text: "C'est un bug JavaScript", isCorrect: false },
        { text: "newArr et arr référencent le même objet tableau", isCorrect: true },
        { text: "push() modifie tous les tableaux", isCorrect: false },
        { text: "const ne protège pas contre les modifications", isCorrect: false }
      ]
    },
    {
      question: "Que ne va pas dans cette fonction ?\n```javascript\nfunction ajouterElement(arr, element) {\n    return arr.push(element);\n}\n```",
      answers: [
        { text: "push() ne fonctionne pas sur les tableaux", isCorrect: false },
        { text: "push() retourne la nouvelle longueur, pas le tableau", isCorrect: true },
        { text: "Il faut utiliser splice() au lieu de push()", isCorrect: false },
        { text: "La syntaxe est incorrecte", isCorrect: false }
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