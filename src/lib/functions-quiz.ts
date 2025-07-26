export const functionsQuizData = {
  title: "Quiz JavaScript - Fonctions",
  questions: [
    {
      question: "Que retourne cette fonction ?\n```javascript\nfunction mystere() {\n    console.log(\"Bonjour\");\n}\nconsole.log(mystere());\n```",
      answers: [
        { text: "\"Bonjour\"", isCorrect: false },
        { text: "undefined", isCorrect: true },
        { text: "null", isCorrect: false },
        { text: "Erreur", isCorrect: false }
      ]
    },
    {
      question: "Quelle déclaration de fonction fonctionnera grâce au hissage ?",
      answers: [
        { text: "const func = function() { };", isCorrect: false },
        { text: "let func = function() { };", isCorrect: false },
        { text: "function func() { }", isCorrect: true },
        { text: "var func = () => { }", isCorrect: false }
      ]
    },
    {
      question: "Quelle est la valeur de `x` après l'exécution de ce code ?\n```javascript\nfunction additionner(a, b = 5) {\n    return a + b;\n}\nlet x = additionner(3);\n```",
      answers: [
        { text: "3", isCorrect: false },
        { text: "5", isCorrect: false },
        { text: "8", isCorrect: true },
        { text: "undefined", isCorrect: false }
      ]
    },
    {
      question: "Que retourne cette fonction fléchée ?\n```javascript\nconst doubler = x => x * 2;\n```",
      answers: [
        { text: "undefined", isCorrect: false },
        { text: "x * 2", isCorrect: false },
        { text: "C'est une erreur de syntaxe", isCorrect: false },
        { text: "Le résultat de x * 2", isCorrect: true }
      ]
    },
    {
      question: "Quelle est la sortie de ce code ?\n```javascript\nconst nombres = [1, 2, 3];\nconst doubles = nombres.map(n => n * 2);\nconsole.log(doubles);\n```",
      answers: [
        { text: "[1, 2, 3]", isCorrect: false },
        { text: "[2, 4, 6]", isCorrect: true },
        { text: "6", isCorrect: false },
        { text: "undefined", isCorrect: false }
      ]
    },
    {
      question: "Les fonctions fléchées ont leur propre liaison `this`.",
      answers: [
        { text: "Vrai", isCorrect: false },
        { text: "Faux", isCorrect: true }
      ]
    },
    {
      question: "Une fonction peut retourner une autre fonction en JavaScript.",
      answers: [
        { text: "Vrai", isCorrect: true },
        { text: "Faux", isCorrect: false }
      ]
    },
    {
      question: "Les expressions de fonction sont hissées de la même manière que les déclarations de fonction.",
      answers: [
        { text: "Vrai", isCorrect: false },
        { text: "Faux", isCorrect: true }
      ]
    },
    {
      question: "L'objet `arguments` est disponible dans les fonctions fléchées.",
      answers: [
        { text: "Vrai", isCorrect: false },
        { text: "Faux", isCorrect: true }
      ]
    },
    {
      question: "Les fonctions pures retournent toujours la même sortie pour la même entrée.",
      answers: [
        { text: "Vrai", isCorrect: true },
        { text: "Faux", isCorrect: false }
      ]
    },
    {
      question: "Que va afficher ce code ?\n```javascript\nfunction externe(x) {\n    return function interne(y) {\n        return x + y;\n    };\n}\nconst ajouterDix = externe(10);\nconsole.log(ajouterDix(5));\n```",
      answers: [
        { text: "5", isCorrect: false },
        { text: "10", isCorrect: false },
        { text: "15", isCorrect: true },
        { text: "undefined", isCorrect: false }
      ]
    },
    {
      question: "Qu'est-ce qui ne va pas avec cet appel de fonction ?\n```javascript\nfunction saluer(nom, salutation = \"Bonjour\") {\n    return salutation + \", \" + nom + \" !\";\n}\nsaluer();\n```",
      answers: [
        { text: "Syntaxe incorrecte", isCorrect: false },
        { text: "Paramètre requis `nom` manquant", isCorrect: true },
        { text: "Paramètre par défaut incorrect", isCorrect: false },
        { text: "Rien, le code est correct", isCorrect: false }
      ]
    },
    {
      question: "Que retournera cette fonction reduce ?\n```javascript\nconst nombres = [1, 2, 3, 4];\nconst resultat = nombres.reduce((acc, curr) => acc + curr, 0);\n```",
      answers: [
        { text: "4", isCorrect: false },
        { text: "6", isCorrect: false },
        { text: "10", isCorrect: true },
        { text: "24", isCorrect: false }
      ]
    },
    {
      question: "Comment compléter cette fonction d'ordre supérieur ?\n```javascript\nfunction operation(a, b, callback) {\n    return _______;\n}\n```",
      answers: [
        { text: "a + b", isCorrect: false },
        { text: "callback", isCorrect: false },
        { text: "callback(a, b)", isCorrect: true },
        { text: "callback(a + b)", isCorrect: false }
      ]
    },
    {
      question: "Quelle est la syntaxe fléchée correcte pour cette fonction ?\n```javascript\nfunction multiplier(a, b) {\n    return a * b;\n}\n```",
      answers: [
        { text: "const multiplier = a, b => a * b;", isCorrect: false },
        { text: "const multiplier = (a, b) => a * b;", isCorrect: true },
        { text: "const multiplier = (a, b) => { a * b };", isCorrect: false },
        { text: "const multiplier = a * b => (a, b);", isCorrect: false }
      ]
    },
    {
      question: "Comment filtrer les nombres pairs d'un tableau ?",
      answers: [
        { text: "nombres.filter(num => num % 2 === 1)", isCorrect: false },
        { text: "nombres.filter(num => num % 2 === 0)", isCorrect: true },
        { text: "nombres.map(num => num % 2 === 0)", isCorrect: false },
        { text: "nombres.reduce(num => num % 2 === 0)", isCorrect: false }
      ]
    },
    {
      question: "Comment créer une fonction avec des paramètres rest qui additionne tous les arguments ?",
      answers: [
        { text: "function somme(nombres) { return nombres.reduce((total, num) => total + num, 0); }", isCorrect: false },
        { text: "function somme(...nombres) { return nombres.reduce((total, num) => total + num, 0); }", isCorrect: true },
        { text: "function somme(numbers[]) { return numbers.reduce((total, num) => total + num, 0); }", isCorrect: false },
        { text: "function somme(*nombres) { return nombres.reduce((total, num) => total + num, 0); }", isCorrect: false }
      ]
    },
    {
      question: "Quelle est la différence principale entre ces deux appels ?\n```javascript\nsetTimeout(function() { console.log(\"A\"); }, 100);\nsetTimeout(() => console.log(\"B\"), 100);\n```",
      answers: [
        { text: "Le premier est plus rapide", isCorrect: false },
        { text: "Ils sont fonctionnellement équivalents dans ce contexte", isCorrect: true },
        { text: "Le second ne fonctionne pas", isCorrect: false },
        { text: "Le premier a accès à `this`", isCorrect: false }
      ]
    },
    {
      question: "Que fait cette IIFE ?\n```javascript\n(function(x) {\n    console.log(x * 2);\n})(5);\n```",
      answers: [
        { text: "Affiche 5", isCorrect: false },
        { text: "Affiche 10", isCorrect: true },
        { text: "Affiche 25", isCorrect: false },
        { text: "Retourne une erreur", isCorrect: false }
      ]
    },
    {
      question: "Quel motif ce code démontre-t-il ?\n```javascript\nconst calculatrice = (function() {\n    let resultat = 0;\n    return {\n        additionner: function(x) { resultat += x; return this; }\n    };\n})();\n```",
      answers: [
        { text: "Héritage prototypal", isCorrect: false },
        { text: "Motif module avec encapsulation", isCorrect: true },
        { text: "Factory pattern", isCorrect: false },
        { text: "Singleton pattern", isCorrect: false }
      ]
    },
    {
      question: "Comment corriger le contexte `this` dans ce code ?\n```javascript\nconst obj = {\n    nom: \"Test\",\n    salutationDifferee: function() {\n        setTimeout(function() {\n            console.log(\"Bonjour, \" + this.nom);\n        }, 1000);\n    }\n};\n```",
      answers: [
        { text: "Utiliser bind(this)", isCorrect: false },
        { text: "Utiliser une fonction fléchée", isCorrect: true },
        { text: "Stocker this dans une variable", isCorrect: false },
        { text: "Toutes les réponses ci-dessus", isCorrect: false }
      ]
    },
    {
      question: "Pourquoi ce code ne fonctionne-t-il pas ?\n```javascript\ndireBonjour(); // Erreur\nvar direBonjour = function() {\n    console.log(\"Bonjour !\");\n};\n```",
      answers: [
        { text: "Les expressions de fonction ne sont pas hissées", isCorrect: true },
        { text: "Syntaxe incorrecte", isCorrect: false },
        { text: "La fonction n'est pas définie", isCorrect: false },
        { text: "Il faut utiliser let au lieu de var", isCorrect: false }
      ]
    },
    {
      question: "Quel est le problème avec cette boucle ?\n```javascript\nfor (var i = 0; i < 3; i++) {\n    setTimeout(function() {\n        console.log(i);\n    }, 100);\n}\n```",
      answers: [
        { text: "Elle affichera 0, 1, 2", isCorrect: false },
        { text: "Elle affichera 3, 3, 3", isCorrect: true },
        { text: "Elle ne s'exécute pas", isCorrect: false },
        { text: "Il n'y a pas de problème", isCorrect: false }
      ]
    },
    {
      question: "Comment rendre cette fonction pure ?\n```javascript\nlet total = 0;\nfunction ajouterAuTotal(x) {\n    total += x;\n    return total;\n}\n```",
      answers: [
        { text: "Utiliser const au lieu de let", isCorrect: false },
        { text: "Retourner totalActuel + x sans effet de bord", isCorrect: true },
        { text: "Ajouter 'use strict'", isCorrect: false },
        { text: "Utiliser une closure", isCorrect: false }
      ]
    },
    {
      question: "Quelle est la plus efficace pour les opérations simples ?",
      answers: [
        { text: "function additionner(a, b) { return a + b; }", isCorrect: false },
        { text: "const additionner = (a, b) => a + b;", isCorrect: false },
        { text: "Les deux sont également efficaces", isCorrect: true },
        { text: "Cela dépend du moteur JavaScript", isCorrect: false }
      ]
    },
    {
      question: "Quelle technique peut optimiser les fonctions récursives avec des calculs répétés ?",
      answers: [
        { text: "Utiliser des boucles", isCorrect: false },
        { text: "Mémorisation (memoization)", isCorrect: true },
        { text: "Augmenter la pile d'appels", isCorrect: false },
        { text: "Utiliser async/await", isCorrect: false }
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