export const oopQuizData = {
  title: "Quiz JavaScript - Programmation Orientée Objet",
  questions: [
    {
      question: "Quelle est la syntaxe correcte pour déclarer une classe en JavaScript ?",
      answers: [
        { text: "class MyClass() { }", isCorrect: false },
        { text: "class MyClass { }", isCorrect: true },
        { text: "function class MyClass { }", isCorrect: false },
        { text: "new class MyClass { }", isCorrect: false }
      ]
    },
    {
      question: "Que fait le mot-clé `constructor` dans une classe ?",
      answers: [
        { text: "Il détruit les instances de la classe", isCorrect: false },
        { text: "Il initialise les propriétés lors de la création d'un objet", isCorrect: true },
        { text: "Il définit des méthodes statiques", isCorrect: false },
        { text: "Il hérite d'une autre classe", isCorrect: false }
      ]
    },
    {
      question: "Que va afficher ce code ?\n```javascript\nclass Test {\n    constructor(valeur) {\n        this.valeur = valeur;\n    }\n\n    afficher() {\n        console.log(this.valeur);\n    }\n}\n\nconst obj = new Test(42);\nconst methode = obj.afficher;\nmethode();\n```",
      answers: [
        { text: "42", isCorrect: false },
        { text: "undefined", isCorrect: true },
        { text: "Une erreur", isCorrect: false },
        { text: "null", isCorrect: false }
      ]
    },
    {
      question: "Comment définit-on une propriété privée en JavaScript moderne ?",
      answers: [
        { text: "Avec le préfixe _", isCorrect: false },
        { text: "Avec le préfixe #", isCorrect: true },
        { text: "Avec le mot-clé private", isCorrect: false },
        { text: "Les propriétés sont toujours publiques", isCorrect: false }
      ]
    },
    {
      question: "Quelle différence entre une méthode d'instance et une méthode statique ?",
      answers: [
        { text: "Les méthodes statiques sont plus rapides", isCorrect: false },
        { text: "Les méthodes d'instance appartiennent à la classe, pas aux objets", isCorrect: false },
        { text: "Les méthodes statiques appartiennent à la classe, pas aux instances", isCorrect: true },
        { text: "Il n'y a aucune différence", isCorrect: false }
      ]
    },
    {
      question: "Une classe peut avoir plusieurs constructeurs en JavaScript.",
      answers: [
        { text: "Vrai", isCorrect: false },
        { text: "Faux", isCorrect: true }
      ]
    },
    {
      question: "Le mot-clé `super` peut être utilisé pour appeler le constructeur parent.",
      answers: [
        { text: "Vrai", isCorrect: true },
        { text: "Faux", isCorrect: false }
      ]
    },
    {
      question: "Les getters et setters permettent de contrôler l'accès aux propriétés.",
      answers: [
        { text: "Vrai", isCorrect: true },
        { text: "Faux", isCorrect: false }
      ]
    },
    {
      question: "L'héritage multiple (hériter de plusieurs classes) est possible en JavaScript.",
      answers: [
        { text: "Vrai", isCorrect: false },
        { text: "Faux", isCorrect: true }
      ]
    },
    {
      question: "Les propriétés statiques sont partagées entre toutes les instances d'une classe.",
      answers: [
        { text: "Vrai", isCorrect: true },
        { text: "Faux", isCorrect: false }
      ]
    },
    {
      question: "Que va afficher ce code ?\n```javascript\nclass Compteur {\n    static total = 0;\n\n    constructor() {\n        Compteur.total++;\n        this.id = Compteur.total;\n    }\n}\n\nconst c1 = new Compteur();\nconst c2 = new Compteur();\nconsole.log(c1.id, c2.id, Compteur.total);\n```",
      answers: [
        { text: "0 1 2", isCorrect: false },
        { text: "1 2 2", isCorrect: true },
        { text: "1 1 2", isCorrect: false },
        { text: "2 2 2", isCorrect: false }
      ]
    },
    {
      question: "Quel est le problème avec ce code ?\n```javascript\nclass Animal {\n    constructor(nom) {\n        this.nom = nom;\n    }\n}\n\nclass Chien extends Animal {\n    constructor(nom, race) {\n        this.race = race;\n        super(nom);\n    }\n}\n```",
      answers: [
        { text: "Syntaxe incorrecte pour extends", isCorrect: false },
        { text: "super() doit être appelé avant toute assignation à this", isCorrect: true },
        { text: "Il manque le mot-clé new", isCorrect: false },
        { text: "Il n'y a pas de problème", isCorrect: false }
      ]
    },
    {
      question: "Que retourne cette méthode statique ?\n```javascript\nclass Utilitaires {\n    static doubler(x) {\n        return this.x * 2;\n    }\n}\n\nconsole.log(Utilitaires.doubler(5));\n```",
      answers: [
        { text: "10", isCorrect: false },
        { text: "NaN", isCorrect: true },
        { text: "undefined", isCorrect: false },
        { text: "Une erreur", isCorrect: false }
      ]
    },
    {
      question: "Comment implémenter un getter qui calcule l'âge à partir de la date de naissance ?",
      answers: [
        { text: "function get age() { ... }", isCorrect: false },
        { text: "get age() { return calcul avec Date.now(); }", isCorrect: true },
        { text: "age: get() { ... }", isCorrect: false },
        { text: "getter age() { ... }", isCorrect: false }
      ]
    },
    {
      question: "Comment créer une méthode statique de fabrique (factory) ?",
      answers: [
        { text: "static create() { return new this(); }", isCorrect: true },
        { text: "factory create() { return new this(); }", isCorrect: false },
        { text: "constructor create() { return new this(); }", isCorrect: false },
        { text: "function static create() { return new this(); }", isCorrect: false }
      ]
    },
    {
      question: "Comment implémenter une propriété privée avec validation ?",
      answers: [
        { text: "Utiliser _ pour marquer comme privé", isCorrect: false },
        { text: "Utiliser # pour propriété privée + validation dans setter", isCorrect: true },
        { text: "Utiliser le mot-clé private", isCorrect: false },
        { text: "Impossible en JavaScript", isCorrect: false }
      ]
    },
    {
      question: "Dans l'héritage, comment appeler une méthode du parent depuis l'enfant ?",
      answers: [
        { text: "parent.methode()", isCorrect: false },
        { text: "super.methode()", isCorrect: true },
        { text: "this.parent.methode()", isCorrect: false },
        { text: "base.methode()", isCorrect: false }
      ]
    },
    {
      question: "Qu'est-ce que le pattern Singleton ?",
      answers: [
        { text: "Une classe qui peut avoir plusieurs instances", isCorrect: false },
        { text: "Une classe qui garantit une seule instance", isCorrect: true },
        { text: "Une classe qui hérite de plusieurs parents", isCorrect: false },
        { text: "Une classe abstraite", isCorrect: false }
      ]
    },
    {
      question: "Quelle est la différence principale entre héritage et composition ?",
      answers: [
        { text: "Il n'y a pas de différence", isCorrect: false },
        { text: "Héritage: 'est-un', Composition: 'a-un'", isCorrect: true },
        { text: "Composition est plus rapide", isCorrect: false },
        { text: "Héritage permet multiple inheritance", isCorrect: false }
      ]
    },
    {
      question: "Qu'est-ce que l'encapsulation en POO ?",
      answers: [
        { text: "L'héritage de plusieurs classes", isCorrect: false },
        { text: "Cacher les détails internes et contrôler l'accès aux données", isCorrect: true },
        { text: "La création d'objets dynamiquement", isCorrect: false },
        { text: "L'optimisation des performances", isCorrect: false }
      ]
    },
    {
      question: "Comment implémenter une Factory en JavaScript ?",
      answers: [
        { text: "Utiliser new directement", isCorrect: false },
        { text: "Classe avec méthodes statiques qui retournent des instances", isCorrect: true },
        { text: "Utiliser Object.create seulement", isCorrect: false },
        { text: "Impossible en JavaScript", isCorrect: false }
      ]
    },
    {
      question: "Que fait ce code avec les propriétés privées ?\n```javascript\nclass Test {\n    #valeur = 42;\n\n    static acceder(instance) {\n        return instance.#valeur;\n    }\n}\n\nconst t = new Test();\nconsole.log(Test.acceder(t));\n```",
      answers: [
        { text: "Une erreur - accès privé interdit", isCorrect: false },
        { text: "Affiche 42 - méthodes statiques peuvent accéder aux privés", isCorrect: true },
        { text: "Affiche undefined", isCorrect: false },
        { text: "Affiche null", isCorrect: false }
      ]
    },
    {
      question: "Comment éviter la perte du contexte `this` dans les callbacks ?",
      answers: [
        { text: "Impossible à éviter", isCorrect: false },
        { text: "Utiliser bind(), arrow functions, ou stocker this", isCorrect: true },
        { text: "Utiliser seulement var", isCorrect: false },
        { text: "Éviter les callbacks", isCorrect: false }
      ]
    },
    {
      question: "Quelle est la meilleure pratique pour nommer les classes ?",
      answers: [
        { text: "camelCase", isCorrect: false },
        { text: "PascalCase", isCorrect: true },
        { text: "snake_case", isCorrect: false },
        { text: "UPPER_CASE", isCorrect: false }
      ]
    },
    {
      question: "Comment implémenter le chaînage de méthodes ?",
      answers: [
        { text: "Retourner undefined", isCorrect: false },
        { text: "Retourner this (l'instance courante)", isCorrect: true },
        { text: "Retourner null", isCorrect: false },
        { text: "Retourner la valeur calculée", isCorrect: false }
      ]
    },
    {
      question: "JavaScript supporte-t-il les classes abstraites nativement ?",
      answers: [
        { text: "Oui, avec le mot-clé abstract", isCorrect: false },
        { text: "Non, mais on peut les simuler avec des erreurs", isCorrect: true },
        { text: "Oui, avec le mot-clé interface", isCorrect: false },
        { text: "Oui, automatiquement", isCorrect: false }
      ]
    },
    {
      question: "Comment gérer l'héritage multiple en JavaScript ?",
      answers: [
        { text: "extends Class1, Class2", isCorrect: false },
        { text: "Utiliser mixins, composition, ou proxy", isCorrect: true },
        { text: "implements Class1, Class2", isCorrect: false },
        { text: "C'est impossible", isCorrect: false }
      ]
    },
    {
      question: "Quelle est la différence entre `Object.create()` et `new` ?",
      answers: [
        { text: "Aucune différence", isCorrect: false },
        { text: "new utilise constructor, Object.create utilise prototype directement", isCorrect: true },
        { text: "Object.create est plus rapide", isCorrect: false },
        { text: "new est déprécié", isCorrect: false }
      ]
    },
    {
      question: "Comment déboguer efficacement du code orienté objet ?",
      answers: [
        { text: "Utiliser seulement console.log", isCorrect: false },
        { text: "console.dir, instanceof, getPrototypeOf, debugger", isCorrect: true },
        { text: "Éviter le débogage", isCorrect: false },
        { text: "Réécrire tout en fonctionnel", isCorrect: false }
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