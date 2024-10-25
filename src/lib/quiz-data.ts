export const quizData = {
    title: "Évaluation JavaScript Full Stack",
    questions: [
      {
        question: "Quelle méthode JavaScript est utilisée pour ajouter un élément à la fin d'un tableau ?",
        answers: [
          { text: "push()", isCorrect: true },
          { text: "unshift()", isCorrect: false },
          { text: "append()", isCorrect: false },
          { text: "add()", isCorrect: false }
        ]
      },
      {
        question: "Qu'est-ce qu'une closure en JavaScript ?",
        answers: [
          { text: "Une fonction qui n'a pas de paramètres", isCorrect: false },
          { text: "Une fonction qui a accès aux variables de sa portée externe", isCorrect: true },
          { text: "Une fonction qui retourne undefined", isCorrect: false },
          { text: "Une fonction qui ne peut pas être appelée", isCorrect: false }
        ]
      },
      {
        question: "Quelle est la différence principale entre `let` et `var` ?",
        answers: [
          { text: "`let` ne peut pas être réassigné", isCorrect: false },
          { text: "`var` a une portée de bloc", isCorrect: false },
          { text: "`let` a une portée de bloc", isCorrect: true },
          { text: "Il n'y a aucune différence", isCorrect: false }
        ]
      },
      {
        question: "Comment le `this` se comporte-t-il dans une fonction fléchée ?",
        answers: [
          { text: "Il fait référence à l'objet qui appelle la fonction", isCorrect: false },
          { text: "Il hérite du `this` du contexte englobant", isCorrect: true },
          { text: "Il fait référence à window", isCorrect: false },
          { text: "Il est undefined", isCorrect: false }
        ]
      },
      {
        question: "Quel est le résultat de `[...\"hello\"]` ?",
        answers: [
          { text: "[\"hello\"]", isCorrect: false },
          { text: "[\"h\", \"e\", \"l\", \"l\", \"o\"]", isCorrect: true },
          { text: "\"h,e,l,l,o\"", isCorrect: false },
          { text: "Une erreur", isCorrect: false }
        ]
      },
      {
        question: "Dans quel cas utilise-t-on le rest operator ?",
        answers: [
          { text: "Pour copier un tableau", isCorrect: false },
          { text: "Pour fusionner des objets", isCorrect: false },
          { text: "Pour collecter les arguments restants d'une fonction", isCorrect: true },
          { text: "Pour itérer sur un tableau", isCorrect: false }
        ]
      },
      {
        question: "Comment fonctionne le spread operator avec les objets ?",
        answers: [
          { text: "Il ne fonctionne qu'avec les tableaux", isCorrect: false },
          { text: "Il crée une copie superficielle de l'objet", isCorrect: true },
          { text: "Il crée une copie profonde de l'objet", isCorrect: false },
          { text: "Il modifie l'objet original", isCorrect: false }
        ]
      },
      {
        question: "Quelle est la différence entre les paramètres par défaut et le rest operator ?",
        answers: [
          { text: "Il n'y en a pas", isCorrect: false },
          { text: "Les paramètres par défaut définissent des valeurs si non fournies, le rest collecte les arguments supplémentaires", isCorrect: true },
          { text: "Les paramètres par défaut sont plus performants", isCorrect: false },
          { text: "Le rest operator ne fonctionne qu'avec les tableaux", isCorrect: false }
        ]
      },
      {
        question: "Que fait la méthode `Object.entries()` ?",
        answers: [
          { text: "Retourne un tableau des clés", isCorrect: false },
          { text: "Retourne un tableau des valeurs", isCorrect: false },
          { text: "Retourne un tableau de paires clé-valeur", isCorrect: true },
          { text: "Crée un nouvel objet", isCorrect: false }
        ]
      },
      {
        question: "Que se passe-t-il si on ne met pas le mot-clé `new` devant un constructeur de classe ?",
        answers: [
          { text: "Une erreur est levée", isCorrect: true },
          { text: "L'objet est créé normalement", isCorrect: false },
          { text: "undefined est retourné", isCorrect: false },
          { text: "null est retourné", isCorrect: false }
        ]
      },
      {
        question: "Quelle est la différence entre les méthodes statiques et les méthodes d'instance dans une classe ?",
        answers: [
          { text: "Il n'y en a pas", isCorrect: false },
          { text: "Les méthodes statiques sont plus rapides", isCorrect: false },
          { text: "Les méthodes statiques appartiennent à la classe, pas aux instances", isCorrect: true },
          { text: "Les méthodes d'instance ne peuvent pas accéder à this", isCorrect: false }
        ]
      },
      {
        question: "Quelle est la différence entre `require` et `import` ?",
        answers: [
          { text: "require est plus rapide", isCorrect: false },
          { text: "import est une fonctionnalité ES6 qui supporte le chargement statique", isCorrect: true },
          { text: "require est déprécié", isCorrect: false },
          { text: "Il n'y a pas de différence", isCorrect: false }
        ]
      },
      {
        question: "Quelle est la différence entre for...of et for...in ?",
        answers: [
          { text: "Il n'y en a pas", isCorrect: false },
          { text: "for...of itère sur les valeurs, for...in sur les indices/clés", isCorrect: true },
          { text: "for...in est plus rapide", isCorrect: false },
          { text: "for...of ne fonctionne qu'avec les tableaux", isCorrect: false }
        ]
      },

      // Closures et Scope (6 questions)
      {
        question: "Quelle est la différence principale entre une classe et une closure ?",
        answers: [
          { text: "Les classes sont plus rapides", isCorrect: false },
          { text: "Les closures maintiennent un état privé via leur scope", isCorrect: true },
          { text: "Les classes ne peuvent pas avoir de méthodes", isCorrect: false },
          { text: "Il n'y a aucune différence", isCorrect: false }
        ]
      },
      {
        question: "Quel est l'avantage principal des closures par rapport aux variables globales ?",
        answers: [
          { text: "Elles sont plus rapides", isCorrect: false },
          { text: "Elles encapsulent les données et évitent la pollution du scope global", isCorrect: true },
          { text: "Elles utilisent moins de mémoire", isCorrect: false },
          { text: "Elles sont plus faciles à déboguer", isCorrect: false }
        ]
      },
      {
        question: "Que se passe-t-il avec la mémoire d'une closure ?",
        answers: [
          { text: "Elle est libérée immédiatement", isCorrect: false },
          { text: "Elle est conservée tant que la closure peut être appelée", isCorrect: true },
          { text: "Elle n'est jamais libérée", isCorrect: false },
          { text: "Elle est partagée entre toutes les closures", isCorrect: false }
        ]
      },
      {
        question: "Comment une closure peut-elle être utilisée pour créer des variables privées ?",
        answers: [
          { text: "En utilisant le mot-clé private", isCorrect: false },
          { text: "En définissant des variables dans le scope parent qui ne sont accessibles que via les fonctions retournées", isCorrect: true },
          { text: "En utilisant des symboles", isCorrect: false },
          { text: "En utilisant le mot-clé const", isCorrect: false }
        ]
      },
      {
        question: "Quelle est la différence entre une closure et une IIFE ?",
        answers: [
          { text: "Une IIFE ne peut pas accéder aux variables externes", isCorrect: false },
          { text: "Une closure ne s'exécute qu'une fois", isCorrect: false },
          { text: "Une IIFE s'exécute immédiatement, une closure peut être appelée plus tard", isCorrect: true },
          { text: "Il n'y a pas de différence", isCorrect: false }
        ]
      },
      {
        question: "Dans quel cas utiliserait-on une closure plutôt qu'une classe ?",
        answers: [
          { text: "Quand on a besoin d'héritage", isCorrect: false },
          { text: "Quand on a besoin d'encapsuler des données sans créer d'instance", isCorrect: true },
          { text: "Quand on a besoin de méthodes statiques", isCorrect: false },
          { text: "Quand on travaille avec des API", isCorrect: false }
        ]
      },

      // Méthodes de Tableaux (6 questions)
      {
        question: "Quelle méthode de tableau faut-il utiliser pour vérifier si AU MOINS un élément satisfait une condition ?",
        answers: [
          { text: "every()", isCorrect: false },
          { text: "some()", isCorrect: true },
          { text: "find()", isCorrect: false },
          { text: "includes()", isCorrect: false }
        ]
      },
      {
        question: "Quelle méthode de tableau faut-il utiliser pour vérifier si TOUS les éléments satisfont une condition ?",
        answers: [
          { text: "every()", isCorrect: true },
          { text: "some()", isCorrect: false },
          { text: "filter()", isCorrect: false },
          { text: "includes()", isCorrect: false }
        ]
      },
      {
        question: "Comment sort() trie-t-il les nombres par défaut ?",
        answers: [
          { text: "Dans l'ordre croissant", isCorrect: false },
          { text: "Dans l'ordre décroissant", isCorrect: false },
          { text: "Comme des chaînes de caractères", isCorrect: true },
          { text: "Aléatoirement", isCorrect: false }
        ]
      },
      {
        question: "Quelle méthode renvoie le premier élément qui satisfait une condition ?",
        answers: [
          { text: "filter()", isCorrect: false },
          { text: "some()", isCorrect: false },
          { text: "find()", isCorrect: true },
          { text: "findAll()", isCorrect: false }
        ]
      },
      {
        question: "Que retourne la méthode find() si aucun élément ne correspond ?",
        answers: [
          { text: "null", isCorrect: false },
          { text: "undefined", isCorrect: true },
          { text: "false", isCorrect: false },
          { text: "Une erreur", isCorrect: false }
        ]
      },

      // Node.js (6 questions)
      {
        question: "Qu'est-ce que le `event loop` dans Node.js ?",
        answers: [
          { text: "Une boucle for optimisée", isCorrect: false },
          { text: "Le mécanisme qui gère les opérations asynchrones", isCorrect: true },
          { text: "Un système de gestion d'événements DOM", isCorrect: false },
          { text: "Un type de boucle while", isCorrect: false }
        ]
      },
      {
        question: "Comment Node.js gère-t-il la concurrence ?",
        answers: [
          { text: "Avec des threads", isCorrect: false },
          { text: "Avec un seul thread et des callbacks asynchrones", isCorrect: true },
          { text: "Avec des processus multiples", isCorrect: false },
          { text: "Avec des workers", isCorrect: false }
        ]
      },
      {
        question: "Que fait nodemon ?",
        answers: [
          { text: "Optimise le code Node.js", isCorrect: false },
          { text: "Redémarre automatiquement l'application lors des modifications", isCorrect: true },
          { text: "Débogue le code Node.js", isCorrect: false },
          { text: "Compile le code TypeScript", isCorrect: false }
        ]
      },
      {
        question: "Que fait `process.env` ?",
        answers: [
          { text: "Retourne la version de Node.js", isCorrect: false },
          { text: "Donne accès aux variables d'environnement", isCorrect: true },
          { text: "Configure l'environnement de développement", isCorrect: false },
          { text: "Modifie les variables système", isCorrect: false }
        ]
      },

        // Questions better-sqlite3 (4 questions)
        {
            question: "Quelle méthode utilise-t-on pour une requête qui ne retourne pas de résultats ?",
            answers: [
                { text: "get()", isCorrect: false },
                { text: "all()", isCorrect: false },
                { text: "run()", isCorrect: true },
                { text: "execute()", isCorrect: false }
            ]
        },
        {
            question: "Comment préparer une requête avec better-sqlite3 ?",
            answers: [
                { text: "db.prepare(sql).all()", isCorrect: false },
                { text: "const stmt = db.prepare(sql)", isCorrect: true },
                { text: "db.prepare(sql).execute()", isCorrect: false },
                { text: "db.sql(prepare)", isCorrect: false }
            ]
        },
        {
            question: "Quelle méthode better-sqlite3 utilise-t-on pour récupérer une seule ligne ?",
            answers: [
                { text: "get()", isCorrect: true },
                { text: "one()", isCorrect: false },
                { text: "first()", isCorrect: false },
                { text: "single()", isCorrect: false }
            ]
        },
        {
            question: "Comment démarrer une transaction avec better-sqlite3 ?",
            answers: [
                { text: "db.startTransaction()", isCorrect: false },
                { text: "db.transaction(() => {})", isCorrect: true },
                { text: "db.begin()", isCorrect: false },
                { text: "db.beginTransaction()", isCorrect: false }
            ]
        },

        // Questions Express.js (6 questions)
        {
            question: "Quelle est la différence entre `app.use()` et `app.get()` ?",
            answers: [
                { text: "app.use() est déprécié", isCorrect: false },
                { text: "app.use() s'applique à toutes les méthodes HTTP, app.get() uniquement aux requêtes GET", isCorrect: true },
                { text: "app.get() est plus rapide", isCorrect: false },
                { text: "Il n'y a pas de différence", isCorrect: false }
            ]
        },
        {
            question: "À quoi sert le middleware `express.static()` ?",
            answers: [
                { text: "À compresser les fichiers", isCorrect: false },
                { text: "À servir des fichiers statiques", isCorrect: true },
                { text: "À valider les données", isCorrect: false },
                { text: "À gérer les sessions", isCorrect: false }
            ]
        },
        {
            question: "Comment fonctionne le système de routage d'Express ?",
            answers: [
                { text: "Il utilise uniquement des regex", isCorrect: false },
                { text: "Il suit l'ordre de définition des routes", isCorrect: true },
                { text: "Il choisit la route la plus spécifique", isCorrect: false },
                { text: "Il utilise un système de priorités", isCorrect: false }
            ]
        },
        {
            question: "Quelle est la différence entre `req.params` et `req.query` ?",
            answers: [
                { text: "Il n'y en a pas", isCorrect: false },
                { text: "req.params pour les paramètres d'URL, req.query pour les paramètres de requête", isCorrect: true },
                { text: "req.params est déprécié", isCorrect: false },
                { text: "req.query est plus sécurisé", isCorrect: false }
            ]
        },
        {
            question: "Comment gérer les erreurs avec Express ?",
            answers: [
                { text: "Avec try/catch uniquement", isCorrect: false },
                { text: "Avec un middleware d'erreur à 4 paramètres", isCorrect: true },
                { text: "Avec des blocs if/else", isCorrect: false },
                { text: "Avec des promesses uniquement", isCorrect: false }
            ]
        },
        {
            question: "Que fait le middleware cors dans Express ?",
            answers: [
                { text: "Compresse les réponses", isCorrect: false },
                { text: "Vérifie les tokens d'authentification", isCorrect: false },
                { text: "Gère les requêtes cross-origin", isCorrect: true },
                { text: "Parse le corps des requêtes", isCorrect: false }
            ]
        },
      // Ajoutez vos questions ici
    ]
  };

  // Types pour TypeScript
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