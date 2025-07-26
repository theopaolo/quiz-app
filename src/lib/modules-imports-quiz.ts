export const modulesImportsQuizData = {
  title: "Quiz JavaScript - Modules et Imports",
  questions: [
    {
      question: "Quelle est la syntaxe correcte pour exporter une fonction nommée ?",
      answers: [
        { text: "export function myFunction() { }", isCorrect: true },
        { text: "exports myFunction = function() { }", isCorrect: false },
        { text: "module.exports.myFunction = function() { }", isCorrect: false },
        { text: "export { myFunction }", isCorrect: false }
      ]
    },
    {
      question: "Comment importer une fonction spécifique depuis un module ?",
      answers: [
        { text: "import myFunction from './module.js'", isCorrect: false },
        { text: "import { myFunction } from './module.js'", isCorrect: true },
        { text: "import * as myFunction from './module.js'", isCorrect: false },
        { text: "import('./module.js').myFunction", isCorrect: false }
      ]
    },
    {
      question: "Que fait ce code ?\n```javascript\nimport { add as addition, multiply as mult } from './math.js';\n```",
      answers: [
        { text: "Importe add et multiply avec leurs noms originaux", isCorrect: false },
        { text: "Importe add en le renommant addition, et multiply en mult", isCorrect: false },
        { text: "Crée des alias pour les fonctions dans le module", isCorrect: false },
        { text: "Les réponses b et c sont correctes", isCorrect: true }
      ]
    },
    {
      question: "Comment créer un export par défaut ?",
      answers: [
        { text: "export default myFunction;", isCorrect: false },
        { text: "export { myFunction as default };", isCorrect: false },
        { text: "export default function myFunction() { }", isCorrect: false },
        { text: "Toutes les réponses sont correctes", isCorrect: true }
      ]
    },
    {
      question: "Qu'est-ce qu'un \"barrel export\" ?",
      answers: [
        { text: "Un export qui contient beaucoup de données", isCorrect: false },
        { text: "Un fichier index.js qui re-exporte des modules", isCorrect: true },
        { text: "Un export par défaut très volumineux", isCorrect: false },
        { text: "Une technique d'optimisation", isCorrect: false }
      ]
    },
    {
      question: "Un module peut avoir plusieurs exports par défaut.",
      answers: [
        { text: "Vrai", isCorrect: false },
        { text: "Faux", isCorrect: true }
      ]
    },
    {
      question: "Les modules ES6 sont chargés de manière synchrone.",
      answers: [
        { text: "Vrai", isCorrect: false },
        { text: "Faux", isCorrect: true }
      ]
    },
    {
      question: "Il faut toujours inclure l'extension .js dans les imports en mode natif.",
      answers: [
        { text: "Vrai", isCorrect: true },
        { text: "Faux", isCorrect: false }
      ]
    },
    {
      question: "Les variables déclarées dans un module sont automatiquement globales.",
      answers: [
        { text: "Vrai", isCorrect: false },
        { text: "Faux", isCorrect: true }
      ]
    },
    {
      question: "L'import dynamique retourne une Promise.",
      answers: [
        { text: "Vrai", isCorrect: true },
        { text: "Faux", isCorrect: false }
      ]
    },
    {
      question: "Que va afficher ce code ?\n```javascript\n// math.js\nexport const PI = 3.14;\nexport function double(x) { return x * 2; }\n\n// main.js\nimport { PI, double } from './math.js';\nimport * as math from './math.js';\n\nconsole.log(PI);\nconsole.log(math.PI);\nconsole.log(double(5));\nconsole.log(math.double(5));\n```",
      answers: [
        { text: "3.14, 3.14, 10, 10", isCorrect: true },
        { text: "3.14, undefined, 10, 10", isCorrect: false },
        { text: "undefined, 3.14, 10, 10", isCorrect: false },
        { text: "Une erreur", isCorrect: false }
      ]
    },
    {
      question: "Quel est le problème avec ce code ?\n```javascript\n// user.js\nimport { validateRole } from './auth.js';\nexport class User { }\n\n// auth.js\nimport { User } from './user.js';\nexport function validateRole(user) { }\n```",
      answers: [
        { text: "Syntaxe incorrecte", isCorrect: false },
        { text: "Import circulaire - les deux modules s'importent mutuellement", isCorrect: true },
        { text: "Exports manquants", isCorrect: false },
        { text: "Il n'y a pas de problème", isCorrect: false }
      ]
    },
    {
      question: "Est-ce que ce code est correct ?\n```javascript\n// config.js\nconst API_URL = 'https://api.example.com';\nconst MAX_RETRIES = 3;\n\nexport { API_URL, MAX_RETRIES };\nexport default { API_URL, MAX_RETRIES };\n```",
      answers: [
        { text: "Non, on ne peut pas mélanger exports nommés et par défaut", isCorrect: false },
        { text: "Oui, on peut avoir des exports nommés ET un export par défaut", isCorrect: true },
        { text: "Non, syntaxe incorrecte", isCorrect: false },
        { text: "Non, variables non déclarées correctement", isCorrect: false }
      ]
    },
    {
      question: "Que fait ce barrel export ?\n```javascript\n// components/index.js\nexport { default as Button } from './Button.js';\nexport { default as Modal } from './Modal.js';\nexport { Menu, MenuItem } from './Menu.js';\n```",
      answers: [
        { text: "Crée des composants", isCorrect: false },
        { text: "Re-exporte Button et Modal (exports par défaut) et Menu/MenuItem (exports nommés)", isCorrect: true },
        { text: "Importe tous les composants", isCorrect: false },
        { text: "Crée des alias", isCorrect: false }
      ]
    },
    {
      question: "Comment structurer un module utilitaire qui exporte des fonctions de manipulation de chaînes ?",
      answers: [
        { text: "Une seule fonction qui fait tout", isCorrect: false },
        { text: "Export de fonctions individuelles (capitalize, reverse, slugify)", isCorrect: true },
        { text: "Un objet avec toutes les méthodes", isCorrect: false },
        { text: "Une classe avec méthodes statiques", isCorrect: false }
      ]
    },
    {
      question: "Comment créer un barrel export pour un dossier de composants ?",
      answers: [
        { text: "Importer puis réexporter chaque composant", isCorrect: true },
        { text: "Copier le code de chaque composant", isCorrect: false },
        { text: "Utiliser require() pour chaque fichier", isCorrect: false },
        { text: "Créer une classe qui étend tous les composants", isCorrect: false }
      ]
    },
    {
      question: "Comment implémenter un import dynamique conditionnel ?",
      answers: [
        { text: "if (condition) import module;", isCorrect: false },
        { text: "await import('./module.js') dans un event listener", isCorrect: true },
        { text: "import('./module.js') if condition", isCorrect: false },
        { text: "require() avec condition", isCorrect: false }
      ]
    },
    {
      question: "Quelle est la meilleure organisation pour un projet ?",
      answers: [
        { text: "Organisation par type de fichier (js/, css/, html/)", isCorrect: false },
        { text: "Organisation par fonctionnalité (components/, services/, utils/)", isCorrect: true },
        { text: "Tous les fichiers dans un seul dossier", isCorrect: false },
        { text: "Organisation alphabétique", isCorrect: false }
      ]
    },
    {
      question: "Comment éviter les imports circulaires ?",
      answers: [
        { text: "Éviter tous les imports", isCorrect: false },
        { text: "Créer modules intermédiaires, refactoring, injection de dépendance", isCorrect: true },
        { text: "Utiliser seulement des exports par défaut", isCorrect: false },
        { text: "Mettre tout dans un seul fichier", isCorrect: false }
      ]
    },
    {
      question: "Qu'est-ce que le \"tree shaking\" ?",
      answers: [
        { text: "Une technique de débogage", isCorrect: false },
        { text: "Élimination du code mort lors du bundling", isCorrect: true },
        { text: "Optimisation de la mémoire", isCorrect: false },
        { text: "Réorganisation automatique du code", isCorrect: false }
      ]
    },
    {
      question: "Avantages des modules ES6 vs scripts traditionnels ?",
      answers: [
        { text: "Seulement l'isolation du scope", isCorrect: false },
        { text: "Scope isolé, imports/exports explicites, chargement asynchrone, tree shaking", isCorrect: true },
        { text: "Seulement la performance", isCorrect: false },
        { text: "Aucun avantage", isCorrect: false }
      ]
    },
    {
      question: "Qu'est-ce que `import.meta` ?",
      answers: [
        { text: "Métadonnées sur le navigateur", isCorrect: false },
        { text: "Objet contenant métadonnées sur le module actuel", isCorrect: true },
        { text: "Information sur les imports", isCorrect: false },
        { text: "Outil de débogage", isCorrect: false }
      ]
    },
    {
      question: "Comment implémenter un système de plugins avec modules ?",
      answers: [
        { text: "Importer tous les plugins statiquement", isCorrect: false },
        { text: "Utiliser import dynamique dans un PluginManager", isCorrect: true },
        { text: "Créer une classe parente pour tous les plugins", isCorrect: false },
        { text: "Utiliser require() pour charger les plugins", isCorrect: false }
      ]
    },
    {
      question: "Différence entre import statique et dynamique ?",
      answers: [
        { text: "Aucune différence", isCorrect: false },
        { text: "Statique: résolu au build time, Dynamique: runtime avec Promise", isCorrect: true },
        { text: "Dynamique est plus rapide", isCorrect: false },
        { text: "Statique permet les conditions", isCorrect: false }
      ]
    },
    {
      question: "Comment partager des constantes entre modules ?",
      answers: [
        { text: "Variables globales", isCorrect: false },
        { text: "Module constants/ exporté et importé dans chaque module", isCorrect: true },
        { text: "localStorage", isCorrect: false },
        { text: "Document.body.dataset", isCorrect: false }
      ]
    },
    {
      question: "Qu'est-ce qu'un module wrapper ?",
      answers: [
        { text: "Un module très volumineux", isCorrect: false },
        { text: "Module qui encapsule une bibliothèque externe", isCorrect: true },
        { text: "Un module compressé", isCorrect: false },
        { text: "Un module de test", isCorrect: false }
      ]
    },
    {
      question: "Comment gérer la configuration d'environnement avec modules ?",
      answers: [
        { text: "Hardcoder dans chaque fichier", isCorrect: false },
        { text: "Module config/ avec process.env et exports conditionnels", isCorrect: true },
        { text: "Utiliser localStorage", isCorrect: false },
        { text: "Variables CSS", isCorrect: false }
      ]
    },
    {
      question: "Bonnes pratiques pour nommer les modules ?",
      answers: [
        { text: "Tous en majuscules", isCorrect: false },
        { text: "kebab-case pour fichiers, PascalCase pour classes", isCorrect: true },
        { text: "CamelCase pour tout", isCorrect: false },
        { text: "snake_case pour tout", isCorrect: false }
      ]
    },
    {
      question: "Comment déboguer les problèmes de modules ?",
      answers: [
        { text: "Seulement console.log", isCorrect: false },
        { text: "Developer Tools Network, console errors, import.meta.url, Sources tab", isCorrect: true },
        { text: "Réécrire tout le code", isCorrect: false },
        { text: "Éviter les modules", isCorrect: false }
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