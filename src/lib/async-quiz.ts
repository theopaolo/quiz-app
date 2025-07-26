export const asyncQuizData = {
  title: "Quiz JavaScript - Programmation Asynchrone",
  questions: [
    {
      question: "Que va afficher ce code ?\n```javascript\nconsole.log('1');\nsetTimeout(() => console.log('2'), 0);\nconsole.log('3');\n```",
      answers: [
        { text: "1, 2, 3", isCorrect: false },
        { text: "1, 3, 2", isCorrect: true },
        { text: "3, 1, 2", isCorrect: false },
        { text: "2, 1, 3", isCorrect: false }
      ]
    },
    {
      question: "Dans quel ordre s'exécutent ces micro et macro-tâches ?\n```javascript\nsetTimeout(() => console.log('A'), 0);\nPromise.resolve().then(() => console.log('B'));\nconsole.log('C');\n```",
      answers: [
        { text: "A, B, C", isCorrect: false },
        { text: "C, A, B", isCorrect: false },
        { text: "C, B, A", isCorrect: true },
        { text: "B, C, A", isCorrect: false }
      ]
    },
    {
      question: "Comment créer une Promise qui se résout après 2 secondes ?",
      answers: [
        { text: "new Promise(resolve => setTimeout(resolve, 2000))", isCorrect: true },
        { text: "Promise.resolve().then(() => setTimeout(2000))", isCorrect: false },
        { text: "async () => await 2000", isCorrect: false },
        { text: "Promise.delay(2000)", isCorrect: false }
      ]
    },
    {
      question: "Que fait `Promise.all([p1, p2, p3])` ?",
      answers: [
        { text: "Exécute les Promises en séquence", isCorrect: false },
        { text: "Retourne la Promise la plus rapide", isCorrect: false },
        { text: "Attend que toutes les Promises se résolvent", isCorrect: true },
        { text: "Retourne seulement la première Promise", isCorrect: false }
      ]
    },
    {
      question: "Comment gérer une erreur avec async/await ?",
      answers: [
        { text: ".catch() après la fonction", isCorrect: false },
        { text: "try-catch autour du code await", isCorrect: true },
        { text: "error event listener", isCorrect: false },
        { text: "onError callback", isCorrect: false }
      ]
    },
    {
      question: "`async function` retourne toujours une Promise.",
      answers: [
        { text: "Vrai", isCorrect: true },
        { text: "Faux", isCorrect: false }
      ]
    },
    {
      question: "`fetch()` rejette automatiquement pour les codes d'erreur HTTP (404, 500).",
      answers: [
        { text: "Vrai", isCorrect: false },
        { text: "Faux", isCorrect: true }
      ]
    },
    {
      question: "`await` peut seulement être utilisé dans une fonction `async`.",
      answers: [
        { text: "Vrai", isCorrect: true },
        { text: "Faux", isCorrect: false }
      ]
    },
    {
      question: "`Promise.race()` attend que toutes les Promises se résolvent.",
      answers: [
        { text: "Vrai", isCorrect: false },
        { text: "Faux", isCorrect: true }
      ]
    },
    {
      question: "`setTimeout(fn, 0)` s'exécute immédiatement.",
      answers: [
        { text: "Vrai", isCorrect: false },
        { text: "Faux", isCorrect: true }
      ]
    },
    {
      question: "Que va afficher ce code ?\n```javascript\nasync function test() {\n    console.log('1');\n    await Promise.resolve();\n    console.log('2');\n}\n\nconsole.log('3');\ntest();\nconsole.log('4');\n```",
      answers: [
        { text: "3, 1, 2, 4", isCorrect: false },
        { text: "1, 2, 3, 4", isCorrect: false },
        { text: "3, 1, 4, 2", isCorrect: true },
        { text: "1, 3, 4, 2", isCorrect: false }
      ]
    },
    {
      question: "Quel est le problème avec ce code ?\n```javascript\nasync function traiterUtilisateurs(users) {\n    users.forEach(async (user) => {\n        await processUser(user);\n    });\n}\n```",
      answers: [
        { text: "Syntaxe incorrecte", isCorrect: false },
        { text: "forEach n'attend pas les fonctions async", isCorrect: true },
        { text: "await ne fonctionne pas avec forEach", isCorrect: false },
        { text: "Il faut utiliser map au lieu de forEach", isCorrect: false }
      ]
    },
    {
      question: "Que retourne cette fonction en cas d'erreur ?\n```javascript\nasync function fetchData() {\n    try {\n        const response = await fetch('/api/data');\n        return await response.json();\n    } catch (error) {\n        console.error('Erreur:', error);\n        // Pas de throw ou return\n    }\n}\n```",
      answers: [
        { text: "null", isCorrect: false },
        { text: "undefined", isCorrect: true },
        { text: "false", isCorrect: false },
        { text: "Une erreur", isCorrect: false }
      ]
    },
    {
      question: "Comment implémenter une fonction de timeout pour Promise ?",
      answers: [
        { text: "Promise.timeout(promise, ms)", isCorrect: false },
        { text: "Promise.race([promise, timeoutPromise])", isCorrect: true },
        { text: "await promise.timeout(ms)", isCorrect: false },
        { text: "promise.then(null, timeout)", isCorrect: false }
      ]
    },
    {
      question: "Quelle est la meilleure approche pour retry une opération asynchrone ?",
      answers: [
        { text: "Utiliser setTimeout dans une boucle while", isCorrect: false },
        { text: "Utiliser une boucle for avec try-catch et délai", isCorrect: true },
        { text: "Utiliser Promise.all avec plusieurs tentatives", isCorrect: false },
        { text: "Utiliser setInterval jusqu'au succès", isCorrect: false }
      ]
    },
    {
      question: "Qu'est-ce que le debouncing en programmation asynchrone ?",
      answers: [
        { text: "Exécuter une fonction immédiatement", isCorrect: false },
        { text: "Retarder l'exécution jusqu'à absence d'appels pendant un délai", isCorrect: true },
        { text: "Limiter le nombre d'exécutions par seconde", isCorrect: false },
        { text: "Annuler toutes les exécutions précédentes", isCorrect: false }
      ]
    },
    {
      question: "Comment créer un cache simple avec TTL (Time To Live) ?",
      answers: [
        { text: "Utiliser localStorage avec Date.now()", isCorrect: false },
        { text: "Utiliser Map avec timestamp d'expiration", isCorrect: true },
        { text: "Utiliser WeakMap pour éviter les fuites mémoire", isCorrect: false },
        { text: "Utiliser setTimeout pour nettoyer automatiquement", isCorrect: false }
      ]
    },
    {
      question: "Qu'est-ce que le pattern \"Circuit Breaker\" en programmation asynchrone ?",
      answers: [
        { text: "Un pattern pour interrompre les boucles infinies", isCorrect: false },
        { text: "Un mécanisme pour éviter les appels à un service défaillant", isCorrect: true },
        { text: "Une technique pour optimiser les performances", isCorrect: false },
        { text: "Un pattern pour gérer les timeouts", isCorrect: false }
      ]
    },
    {
      question: "Quelle est la différence entre debouncing et throttling ?",
      answers: [
        { text: "Il n'y a pas de différence", isCorrect: false },
        { text: "Debouncing retarde, throttling limite la fréquence", isCorrect: true },
        { text: "Throttling retarde, debouncing limite la fréquence", isCorrect: false },
        { text: "Ils font la même chose avec des noms différents", isCorrect: false }
      ]
    },
    {
      question: "Comment implémenter du lazy loading pour des images ?",
      answers: [
        { text: "Utiliser setTimeout pour charger les images", isCorrect: false },
        { text: "Utiliser IntersectionObserver pour détecter la visibilité", isCorrect: true },
        { text: "Charger toutes les images en Promise.all", isCorrect: false },
        { text: "Utiliser addEventListener sur scroll", isCorrect: false }
      ]
    },
    {
      question: "Qu'est-ce que le \"callback hell\" ?",
      answers: [
        { text: "Une erreur dans les callbacks", isCorrect: false },
        { text: "L'imbrication excessive de callbacks", isCorrect: true },
        { text: "Un callback qui ne s'exécute jamais", isCorrect: false },
        { text: "Un callback qui lance une exception", isCorrect: false }
      ]
    },
    {
      question: "Comment éviter le callback hell ?",
      answers: [
        { text: "Utiliser plus de callbacks", isCorrect: false },
        { text: "Utiliser Promises et async/await", isCorrect: true },
        { text: "Éviter les fonctions asynchrones", isCorrect: false },
        { text: "Utiliser seulement des fonctions synchrones", isCorrect: false }
      ]
    },
    {
      question: "Comment gérer les états de chargement dans une interface ?",
      answers: [
        { text: "Ignorer les états intermédiaires", isCorrect: false },
        { text: "Utiliser loading, error, success avec indicateurs visuels", isCorrect: true },
        { text: "Afficher seulement le résultat final", isCorrect: false },
        { text: "Cacher l'interface pendant le chargement", isCorrect: false }
      ]
    },
    {
      question: "Comment envoyer des données JSON avec fetch ?",
      answers: [
        { text: "Utiliser GET avec les données en URL", isCorrect: false },
        { text: "POST avec Content-Type: application/json et JSON.stringify", isCorrect: true },
        { text: "PUT avec les données directement dans body", isCorrect: false },
        { text: "PATCH avec FormData", isCorrect: false }
      ]
    },
    {
      question: "Comment gérer l'authentification dans les requêtes async ?",
      answers: [
        { text: "Stocker le token dans l'URL", isCorrect: false },
        { text: "Ajouter le token dans l'en-tête Authorization", isCorrect: true },
        { text: "Envoyer le token dans le body", isCorrect: false },
        { text: "Utiliser des cookies automatiquement", isCorrect: false }
      ]
    },
    {
      question: "Quelle est la différence de performance entre ces approches ?\n```javascript\n// A - Séquentielle\nconst users = await fetchUsers();\nconst posts = await fetchPosts();\n\n// B - Parallèle\nconst [users, posts] = await Promise.all([fetchUsers(), fetchPosts()]);\n```",
      answers: [
        { text: "A est plus rapide", isCorrect: false },
        { text: "B est plus rapide car les requêtes sont parallèles", isCorrect: true },
        { text: "Elles ont la même performance", isCorrect: false },
        { text: "Cela dépend du serveur", isCorrect: false }
      ]
    },
    {
      question: "Comment optimiser les requêtes API répétitives ?",
      answers: [
        { text: "Faire plus de requêtes pour être sûr", isCorrect: false },
        { text: "Utiliser cache, debouncing, pagination", isCorrect: true },
        { text: "Éviter complètement les requêtes", isCorrect: false },
        { text: "Utiliser seulement des requêtes synchrones", isCorrect: false }
      ]
    },
    {
      question: "Dans l'Event Loop, quel est l'ordre de priorité ?",
      answers: [
        { text: "Macrotasks, puis Microtasks, puis Call Stack", isCorrect: false },
        { text: "Call Stack, puis Microtasks, puis Macrotasks", isCorrect: true },
        { text: "Microtasks, puis Call Stack, puis Macrotasks", isCorrect: false },
        { text: "Tout s'exécute en parallèle", isCorrect: false }
      ]
    },
    {
      question: "Qu'est-ce qu'une microtask ?",
      answers: [
        { text: "setTimeout et setInterval", isCorrect: false },
        { text: "Promise.then, queueMicrotask", isCorrect: true },
        { text: "Les événements DOM", isCorrect: false },
        { text: "Les requêtes fetch", isCorrect: false }
      ]
    },
    {
      question: "Comment implémenter une recherche en temps réel efficace ?",
      answers: [
        { text: "Rechercher à chaque caractère tapé", isCorrect: false },
        { text: "Utiliser debouncing avec un délai approprié", isCorrect: true },
        { text: "Utiliser setTimeout de 10ms", isCorrect: false },
        { text: "Rechercher seulement au clic", isCorrect: false }
      ]
    },
    {
      question: "Comment gérer les erreurs dans un système asynchrone complexe ?",
      answers: [
        { text: "Ignorer toutes les erreurs", isCorrect: false },
        { text: "Try-catch, circuit breakers, retry, fallbacks", isCorrect: true },
        { text: "Utiliser seulement console.error", isCorrect: false },
        { text: "Redémarrer l'application en cas d'erreur", isCorrect: false }
      ]
    },
    {
      question: "Que se passe-t-il si une Promise n'a pas de .catch() ?",
      answers: [
        { text: "L'erreur est ignorée silencieusement", isCorrect: false },
        { text: "Une unhandled promise rejection est générée", isCorrect: true },
        { text: "L'application se ferme", isCorrect: false },
        { text: "La Promise se résout automatiquement", isCorrect: false }
      ]
    },
    {
      question: "Comment implémenter un upload de fichier avec progress ?",
      answers: [
        { text: "Utiliser fetch avec onProgress", isCorrect: false },
        { text: "Utiliser XMLHttpRequest avec upload.addEventListener", isCorrect: true },
        { text: "Découper le fichier en chunks", isCorrect: false },
        { text: "Utiliser WebSocket pour l'upload", isCorrect: false }
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