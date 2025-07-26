export const ioQuizData = {
  title: "Quiz JavaScript - Entrées-Sorties",
  questions: [
    {
      question: "Que retourne `prompt(\"Entrez votre nom\")` si l'utilisateur clique sur \"Annuler\" ?",
      answers: [
        { text: "\"\" (chaîne vide)", isCorrect: false },
        { text: "undefined", isCorrect: false },
        { text: "null", isCorrect: true },
        { text: "false", isCorrect: false }
      ]
    },
    {
      question: "Comment récupérer la valeur d'un champ input avec l'id \"email\" ?",
      answers: [
        { text: "document.email.value", isCorrect: false },
        { text: "document.getElementById(\"email\").value", isCorrect: true },
        { text: "document.getElement(\"email\").value", isCorrect: false },
        { text: "document.select(\"#email\").value", isCorrect: false }
      ]
    },
    {
      question: "Quelle méthode utiliser pour écouter les changements en temps réel dans un input ?",
      answers: [
        { text: "change", isCorrect: false },
        { text: "input", isCorrect: true },
        { text: "keyup", isCorrect: false },
        { text: "focus", isCorrect: false }
      ]
    },
    {
      question: "Comment empêcher la soumission automatique d'un formulaire ?",
      answers: [
        { text: "return false;", isCorrect: false },
        { text: "event.stop();", isCorrect: false },
        { text: "event.preventDefault();", isCorrect: true },
        { text: "form.cancel();", isCorrect: false }
      ]
    },
    {
      question: "Quelle est la différence principale entre `localStorage` et `sessionStorage` ?",
      answers: [
        { text: "localStorage est plus rapide", isCorrect: false },
        { text: "sessionStorage peut stocker plus de données", isCorrect: false },
        { text: "localStorage persiste entre les sessions", isCorrect: true },
        { text: "Il n'y a pas de différence", isCorrect: false }
      ]
    },
    {
      question: "`prompt()` retourne toujours une chaîne de caractères.",
      answers: [
        { text: "Vrai", isCorrect: false },
        { text: "Faux", isCorrect: true }
      ]
    },
    {
      question: "`console.table()` est utile pour afficher des tableaux d'objets.",
      answers: [
        { text: "Vrai", isCorrect: true },
        { text: "Faux", isCorrect: false }
      ]
    },
    {
      question: "En Node.js, `process.argv[0]` contient le nom du script exécuté.",
      answers: [
        { text: "Vrai", isCorrect: false },
        { text: "Faux", isCorrect: true }
      ]
    },
    {
      question: "`fetch()` utilise la méthode POST par défaut.",
      answers: [
        { text: "Vrai", isCorrect: false },
        { text: "Faux", isCorrect: true }
      ]
    },
    {
      question: "`FileReader` peut lire des fichiers sur le serveur.",
      answers: [
        { text: "Vrai", isCorrect: false },
        { text: "Faux", isCorrect: true }
      ]
    },
    {
      question: "Que va afficher ce code si l'utilisateur clique \"Annuler\" ?\n```javascript\nconst nom = prompt(\"Votre nom ?\");\nif (nom) {\n    console.log(\"Bonjour \" + nom);\n} else {\n    console.log(\"Pas de nom fourni\");\n}\n```",
      answers: [
        { text: "\"Bonjour null\"", isCorrect: false },
        { text: "\"Pas de nom fourni\"", isCorrect: true },
        { text: "\"Bonjour \"", isCorrect: false },
        { text: "Une erreur", isCorrect: false }
      ]
    },
    {
      question: "Quel est le problème avec ce code ?\n```javascript\nconst age = prompt(\"Votre âge ?\");\nif (age > 18) {\n    console.log(\"Majeur\");\n}\n```",
      answers: [
        { text: "Syntaxe incorrecte", isCorrect: false },
        { text: "prompt() retourne une chaîne, pas un nombre", isCorrect: true },
        { text: "Il manque un else", isCorrect: false },
        { text: "Il n'y a pas de problème", isCorrect: false }
      ]
    },
    {
      question: "Que fait ce code ?\n```javascript\ndocument.getElementById('fichier').addEventListener('change', function(e) {\n    const fichier = e.target.files[0];\n    console.log(fichier.name);\n});\n```",
      answers: [
        { text: "Télécharge un fichier", isCorrect: false },
        { text: "Affiche le nom du fichier sélectionné par l'utilisateur", isCorrect: true },
        { text: "Lit le contenu d'un fichier", isCorrect: false },
        { text: "Valide un fichier", isCorrect: false }
      ]
    },
    {
      question: "Comment corriger ce code pour gérer les erreurs ?\n```javascript\nconst data = localStorage.getItem('config');\nconst config = JSON.parse(data);\n```",
      answers: [
        { text: "Ajouter une validation des données", isCorrect: false },
        { text: "Utiliser try-catch et vérifier si data existe", isCorrect: true },
        { text: "Utiliser sessionStorage à la place", isCorrect: false },
        { text: "Le code est déjà correct", isCorrect: false }
      ]
    },
    {
      question: "Comment sauvegarder un objet utilisateur en localStorage ?",
      answers: [
        { text: "localStorage.setItem('user', utilisateur)", isCorrect: false },
        { text: "localStorage.setItem('user', JSON.stringify(utilisateur))", isCorrect: true },
        { text: "localStorage.save('user', utilisateur)", isCorrect: false },
        { text: "localStorage.store('user', utilisateur)", isCorrect: false }
      ]
    },
    {
      question: "Comment télécharger un fichier texte généré par JavaScript ?",
      answers: [
        { text: "Utiliser window.save()", isCorrect: false },
        { text: "Créer un Blob et un élément <a> avec download", isCorrect: true },
        { text: "Utiliser document.write()", isCorrect: false },
        { text: "Envoyer au serveur puis rediriger", isCorrect: false }
      ]
    },
    {
      question: "Comment valider une adresse email avec une regex ?",
      answers: [
        { text: "Utiliser une expression régulière simple", isCorrect: true },
        { text: "Vérifier seulement la présence du @", isCorrect: false },
        { text: "Utiliser split() pour décomposer", isCorrect: false },
        { text: "Compter le nombre de caractères", isCorrect: false }
      ]
    },
    {
      question: "Qu'est-ce que le debouncing et pourquoi l'utiliser ?",
      answers: [
        { text: "Une technique de cache", isCorrect: false },
        { text: "Limiter le nombre d'appels d'une fonction dans le temps", isCorrect: true },
        { text: "Accélérer les animations", isCorrect: false },
        { text: "Valider les données", isCorrect: false }
      ]
    },
    {
      question: "Comment lire un fichier de manière asynchrone en Node.js ?",
      answers: [
        { text: "fs.readFile() avec callback", isCorrect: true },
        { text: "fs.readFileSync()", isCorrect: false },
        { text: "fs.openFile()", isCorrect: false },
        { text: "fs.getFile()", isCorrect: false }
      ]
    },
    {
      question: "Comment récupérer des arguments de ligne de commande en Node.js ?",
      answers: [
        { text: "process.args", isCorrect: false },
        { text: "process.argv.slice(2)", isCorrect: true },
        { text: "process.arguments", isCorrect: false },
        { text: "process.params", isCorrect: false }
      ]
    },
    {
      question: "Comment créer une interface de saisie interactive en Node.js ?",
      answers: [
        { text: "Utiliser console.log", isCorrect: false },
        { text: "Utiliser le module readline", isCorrect: true },
        { text: "Utiliser process.stdin directement", isCorrect: false },
        { text: "Utiliser le module input", isCorrect: false }
      ]
    },
    {
      question: "Comment envoyer des données JSON avec fetch() ?",
      answers: [
        { text: "Passer l'objet directement dans body", isCorrect: false },
        { text: "Utiliser JSON.stringify() et Content-Type: application/json", isCorrect: true },
        { text: "Utiliser FormData", isCorrect: false },
        { text: "Utiliser URLSearchParams", isCorrect: false }
      ]
    },
    {
      question: "Comment gérer les erreurs avec fetch() ?",
      answers: [
        { text: "Utiliser seulement .catch()", isCorrect: false },
        { text: "Vérifier response.ok puis utiliser .catch()", isCorrect: true },
        { text: "Fetch gère automatiquement les erreurs", isCorrect: false },
        { text: "Utiliser try-catch directement", isCorrect: false }
      ]
    },
    {
      question: "Comment implémenter un timeout sur une requête fetch() ?",
      answers: [
        { text: "Utiliser setTimeout", isCorrect: false },
        { text: "Utiliser Promise.race avec une Promise de timeout", isCorrect: true },
        { text: "Configurer dans les options de fetch", isCorrect: false },
        { text: "Utiliser clearTimeout", isCorrect: false }
      ]
    },
    {
      question: "Pourquoi faut-il valider les entrées utilisateur ?",
      answers: [
        { text: "Pour améliorer les performances", isCorrect: false },
        { text: "Pour éviter les failles de sécurité et garantir l'intégrité", isCorrect: true },
        { text: "Pour réduire la taille des données", isCorrect: false },
        { text: "C'est optionnel", isCorrect: false }
      ]
    },
    {
      question: "Comment échapper du HTML pour éviter les attaques XSS ?",
      answers: [
        { text: "Utiliser replace() manuellement", isCorrect: false },
        { text: "Utiliser textContent ou innerHTML d'un élément temporaire", isCorrect: true },
        { text: "Utiliser JSON.stringify()", isCorrect: false },
        { text: "Utiliser encodeURI()", isCorrect: false }
      ]
    },
    {
      question: "Que faire si une entrée utilisateur contient du code malveillant ?",
      answers: [
        { text: "L'ignorer silencieusement", isCorrect: false },
        { text: "Rejeter, nettoyer, logger et informer l'utilisateur", isCorrect: true },
        { text: "L'accepter mais l'isoler", isCorrect: false },
        { text: "Rediriger vers une autre page", isCorrect: false }
      ]
    },
    {
      question: "Pourquoi utiliser le debouncing pour les recherches en temps réel ?",
      answers: [
        { text: "Pour améliorer la sécurité", isCorrect: false },
        { text: "Pour éviter trop de requêtes serveur et améliorer les performances", isCorrect: true },
        { text: "Pour valider les données", isCorrect: false },
        { text: "Pour cacher les erreurs", isCorrect: false }
      ]
    },
    {
      question: "Quelle est la différence entre les opérations synchrones et asynchrones pour les I/O ?",
      answers: [
        { text: "Aucune différence", isCorrect: false },
        { text: "Synchrone bloque l'exécution, asynchrone permet la continuité", isCorrect: true },
        { text: "Asynchrone est plus lent", isCorrect: false },
        { text: "Synchrone est plus sécurisé", isCorrect: false }
      ]
    },
    {
      question: "Comment optimiser les opérations de lecture/écriture de fichiers volumineux ?",
      answers: [
        { text: "Charger tout en mémoire", isCorrect: false },
        { text: "Utiliser des streams et traiter par chunks", isCorrect: true },
        { text: "Utiliser des opérations synchrones", isCorrect: false },
        { text: "Compresser d'abord", isCorrect: false }
      ]
    },
    {
      question: "Comment déboguer un problème de formulaire qui ne se soumet pas ?",
      answers: [
        { text: "Recharger la page", isCorrect: false },
        { text: "Vérifier événements, preventDefault, validation et console", isCorrect: true },
        { text: "Changer le navigateur", isCorrect: false },
        { text: "Utiliser un autre framework", isCorrect: false }
      ]
    },
    {
      question: "Que faire si `localStorage.getItem()` retourne `null` ?",
      answers: [
        { text: "Lever une erreur", isCorrect: false },
        { text: "Vérifier existence, utiliser valeur par défaut ou initialiser", isCorrect: true },
        { text: "Utiliser sessionStorage", isCorrect: false },
        { text: "Redémarrer l'application", isCorrect: false }
      ]
    },
    {
      question: "Comment diagnostiquer une erreur CORS ?",
      answers: [
        { text: "Désactiver la sécurité du navigateur", isCorrect: false },
        { text: "Vérifier console, origine/destination, headers serveur", isCorrect: true },
        { text: "Changer de protocole HTTP", isCorrect: false },
        { text: "Utiliser un CDN", isCorrect: false }
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