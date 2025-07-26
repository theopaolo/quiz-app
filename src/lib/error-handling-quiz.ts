export const errorHandlingQuizData = {
  title: "Quiz JavaScript - Gestion d'Erreurs",
  questions: [
    {
      question: "Que va afficher ce code si `data` est `null` ?\n```javascript\ntry {\n    console.log(data.length);\n} catch (error) {\n    console.log(error.name);\n} finally {\n    console.log(\"Done\");\n}\n```",
      answers: [
        { text: "undefined, puis \"Done\"", isCorrect: false },
        { text: "TypeError, puis \"Done\"", isCorrect: true },
        { text: "ReferenceError, puis \"Done\"", isCorrect: false },
        { text: "Seulement \"Done\"", isCorrect: false }
      ]
    },
    {
      question: "Dans quel ordre s'exécutent ces blocs ?\n```javascript\ntry {\n    return \"success\";\n} catch (error) {\n    return \"error\";\n} finally {\n    console.log(\"cleanup\");\n}\n```",
      answers: [
        { text: "try puis finally", isCorrect: true },
        { text: "Seulement try", isCorrect: false },
        { text: "try, catch, finally", isCorrect: false },
        { text: "finally puis try", isCorrect: false }
      ]
    },
    {
      question: "Comment relancer une erreur dans un bloc catch ?",
      answers: [
        { text: "return error;", isCorrect: false },
        { text: "throw error;", isCorrect: true },
        { text: "raise error;", isCorrect: false },
        { text: "emit error;", isCorrect: false }
      ]
    },
    {
      question: "Que fait `Promise.allSettled()` comparé à `Promise.all()` ?",
      answers: [
        { text: "Il est plus rapide", isCorrect: false },
        { text: "Il attend que toutes les Promises soient résolues ou rejetées", isCorrect: true },
        { text: "Il ne peut gérer qu'une Promise à la fois", isCorrect: false },
        { text: "Il est identique à Promise.all()", isCorrect: false }
      ]
    },
    {
      question: "Quel type d'erreur sera lancé par ce code ?\n```javascript\nfunction test() {\n    console.log(variableInexistante);\n}\ntest();\n```",
      answers: [
        { text: "TypeError", isCorrect: false },
        { text: "SyntaxError", isCorrect: false },
        { text: "ReferenceError", isCorrect: true },
        { text: "RangeError", isCorrect: false }
      ]
    },
    {
      question: "Le bloc `finally` s'exécute même si il y a un `return` dans `try`.",
      answers: [
        { text: "Vrai", isCorrect: true },
        { text: "Faux", isCorrect: false }
      ]
    },
    {
      question: "`console.error()` lance une exception qui doit être capturée.",
      answers: [
        { text: "Vrai", isCorrect: false },
        { text: "Faux", isCorrect: true }
      ]
    },
    {
      question: "Une Promise rejetée sans `.catch()` peut planter l'application Node.js.",
      answers: [
        { text: "Vrai", isCorrect: true },
        { text: "Faux", isCorrect: false }
      ]
    },
    {
      question: "Le pattern \"Fail Fast\" encourage à cacher les erreurs.",
      answers: [
        { text: "Vrai", isCorrect: false },
        { text: "Faux", isCorrect: true }
      ]
    },
    {
      question: "`async/await` élimine le besoin d'utiliser `try-catch`.",
      answers: [
        { text: "Vrai", isCorrect: false },
        { text: "Faux", isCorrect: true }
      ]
    },
    {
      question: "Que va afficher ce code ?\n```javascript\nasync function test() {\n    try {\n        await Promise.reject(\"Erreur\");\n        console.log(\"Succès\");\n    } catch (error) {\n        console.log(\"Capturé:\", error);\n        throw error;\n    } finally {\n        console.log(\"Nettoyage\");\n    }\n}\n\ntest().catch(err => console.log(\"Final:\", err));\n```",
      answers: [
        { text: "Capturé: Erreur, Nettoyage, Final: Erreur", isCorrect: true },
        { text: "Seulement \"Erreur\"", isCorrect: false },
        { text: "Nettoyage, puis erreur", isCorrect: false },
        { text: "Rien ne s'affiche", isCorrect: false }
      ]
    },
    {
      question: "Quel est le problème avec ce code ?\n```javascript\nusers.forEach(async (user) => {\n    try {\n        await processUser(user);\n    } catch (error) {\n        console.error(\"Erreur pour\", user.id, error);\n    }\n});\n```",
      answers: [
        { text: "Syntaxe incorrecte", isCorrect: false },
        { text: "forEach n'attend pas les fonctions async", isCorrect: true },
        { text: "try-catch mal placé", isCorrect: false },
        { text: "Il n'y a pas de problème", isCorrect: false }
      ]
    },
    {
      question: "Comment corriger cette gestion d'erreur ?\n```javascript\nfunction divide(a, b) {\n    if (b === 0) {\n        console.error(\"Division par zéro\");\n        return null;\n    }\n    return a / b;\n}\n```",
      answers: [
        { text: "Retourner NaN", isCorrect: false },
        { text: "Lancer une exception avec throw new Error()", isCorrect: true },
        { text: "Utiliser alert()", isCorrect: false },
        { text: "Le code est déjà correct", isCorrect: false }
      ]
    },
    {
      question: "Que retourne cette fonction en cas d'erreur ?\n```javascript\nasync function fetchData() {\n    try {\n        const response = await fetch('/api/data');\n        return await response.json();\n    } catch (error) {\n        console.error('Fetch failed:', error);\n        // Pas de throw ou return\n    }\n}\n```",
      answers: [
        { text: "null", isCorrect: false },
        { text: "undefined", isCorrect: true },
        { text: "false", isCorrect: false },
        { text: "Une erreur", isCorrect: false }
      ]
    },
    {
      question: "Comment créer une classe d'erreur personnalisée pour la validation ?",
      answers: [
        { text: "Étendre la classe Error avec propriétés supplémentaires", isCorrect: true },
        { text: "Créer un objet simple", isCorrect: false },
        { text: "Utiliser une fonction", isCorrect: false },
        { text: "Modifier Error.prototype", isCorrect: false }
      ]
    },
    {
      question: "Comment implémenter une fonction de retry simple ?",
      answers: [
        { text: "Utiliser une boucle avec gestion d'erreurs", isCorrect: true },
        { text: "Utiliser setTimeout récursivement", isCorrect: false },
        { text: "Créer plusieurs fonctions", isCorrect: false },
        { text: "Utiliser setInterval", isCorrect: false }
      ]
    },
    {
      question: "Comment gérer plusieurs types d'erreurs dans une fonction async ?",
      answers: [
        { text: "Utiliser plusieurs blocs try-catch", isCorrect: false },
        { text: "Utiliser instanceof pour identifier le type d'erreur", isCorrect: true },
        { text: "Ignorer les erreurs", isCorrect: false },
        { text: "Convertir toutes en même type", isCorrect: false }
      ]
    },
    {
      question: "Qu'est-ce qu'un wrapper Result pour éviter les exceptions ?",
      answers: [
        { text: "Une classe qui encapsule succès ou erreur", isCorrect: true },
        { text: "Une fonction de validation", isCorrect: false },
        { text: "Un middleware Express", isCorrect: false },
        { text: "Un pattern de cache", isCorrect: false }
      ]
    },
    {
      question: "Qu'est-ce que le Circuit Breaker pattern et quand l'utiliser ?",
      answers: [
        { text: "Pour optimiser les performances", isCorrect: false },
        { text: "Pour éviter les appels à un service défaillant", isCorrect: true },
        { text: "Pour gérer la mémoire", isCorrect: false },
        { text: "Pour sécuriser les données", isCorrect: false }
      ]
    },
    {
      question: "Comment implémenter un timeout sur une Promise ?",
      answers: [
        { text: "Utiliser setTimeout seulement", isCorrect: false },
        { text: "Utiliser Promise.race avec une Promise de timeout", isCorrect: true },
        { text: "Utiliser clearTimeout", isCorrect: false },
        { text: "Utiliser async/await", isCorrect: false }
      ]
    },
    {
      question: "Différence entre \"fail fast\" et \"fail safe\" ?",
      answers: [
        { text: "Fail fast échoue rapidement, fail safe continue avec des valeurs par défaut", isCorrect: true },
        { text: "Fail safe est plus rapide", isCorrect: false },
        { text: "Il n'y a pas de différence", isCorrect: false },
        { text: "Fail fast cache les erreurs", isCorrect: false }
      ]
    },
    {
      question: "Comment centraliser la gestion d'erreurs dans une application Express ?",
      answers: [
        { text: "Utiliser try-catch partout", isCorrect: false },
        { text: "Créer un middleware de gestion d'erreurs", isCorrect: true },
        { text: "Utiliser console.error", isCorrect: false },
        { text: "Éviter les erreurs", isCorrect: false }
      ]
    },
    {
      question: "Comment déboguer une erreur qui n'a pas de stack trace ?",
      answers: [
        { text: "Abandonner le débogage", isCorrect: false },
        { text: "Ajouter des logs, utiliser le débogueur, reproduire avec tests", isCorrect: true },
        { text: "Réécrire le code", isCorrect: false },
        { text: "Ignorer l'erreur", isCorrect: false }
      ]
    },
    {
      question: "Pourquoi cette fonction ne capture pas correctement les erreurs ?\n```javascript\nfunction processFiles(files) {\n    files.forEach(file => {\n        try {\n            processFile(file);\n        } catch (error) {\n            console.error('Error:', error);\n        }\n    });\n}\n```",
      answers: [
        { text: "Syntaxe incorrecte", isCorrect: false },
        { text: "Si processFile est asynchrone, try-catch ne fonctionnera pas", isCorrect: true },
        { text: "forEach ne permet pas try-catch", isCorrect: false },
        { text: "Il n'y a pas de problème", isCorrect: false }
      ]
    },
    {
      question: "Comment tracer l'origine d'une erreur dans du code asynchrone complexe ?",
      answers: [
        { text: "Utiliser console.log partout", isCorrect: false },
        { text: "IDs de corrélation, logging contextuel, outils spécialisés", isCorrect: true },
        { text: "Éviter le code asynchrone", isCorrect: false },
        { text: "Utiliser seulement des fonctions synchrones", isCorrect: false }
      ]
    },
    {
      question: "Quelles informations essentielles inclure dans un log d'erreur ?",
      answers: [
        { text: "Seulement le message d'erreur", isCorrect: false },
        { text: "Timestamp, niveau, message, stack trace, contexte, version", isCorrect: true },
        { text: "Seulement la stack trace", isCorrect: false },
        { text: "Seulement l'ID utilisateur", isCorrect: false }
      ]
    },
    {
      question: "Comment structurer les logs pour faciliter le monitoring ?",
      answers: [
        { text: "Format texte libre", isCorrect: false },
        { text: "Format JSON structuré avec métadonnées", isCorrect: true },
        { text: "Seulement en console", isCorrect: false },
        { text: "Sans structure particulière", isCorrect: false }
      ]
    },
    {
      question: "Quel est l'impact des try-catch sur les performances ?",
      answers: [
        { text: "Toujours très coûteux", isCorrect: false },
        { text: "Coût minimal si pas d'erreur, coûteux si erreur capturée", isCorrect: true },
        { text: "Aucun impact", isCorrect: false },
        { text: "Améliore les performances", isCorrect: false }
      ]
    },
    {
      question: "Comment optimiser la gestion d'erreurs dans une boucle ?",
      answers: [
        { text: "try-catch à chaque itération", isCorrect: false },
        { text: "try-catch global avec validation en amont", isCorrect: true },
        { text: "Ignorer les erreurs dans les boucles", isCorrect: false },
        { text: "Éviter les boucles", isCorrect: false }
      ]
    },
    {
      question: "Comment gérer les erreurs dans un système distribué ?",
      answers: [
        { text: "Ignorer les erreurs réseau", isCorrect: false },
        { text: "Correlation IDs, circuit breakers, retry, monitoring centralisé", isCorrect: true },
        { text: "try-catch seulement", isCorrect: false },
        { text: "Redémarrer les services", isCorrect: false }
      ]
    },
    {
      question: "Qu'est-ce qu'un \"Error Boundary\" et comment l'implémenter ?",
      answers: [
        { text: "Une fonction de validation", isCorrect: false },
        { text: "Composant qui capture les erreurs pour éviter le crash total", isCorrect: true },
        { text: "Un type d'erreur spécial", isCorrect: false },
        { text: "Une technique de débogage", isCorrect: false }
      ]
    },
    {
      question: "Comment tester la gestion d'erreurs ?",
      answers: [
        { text: "Ne pas tester les erreurs", isCorrect: false },
        { text: "Tests unitaires avec mocks, tests d'intégration, chaos engineering", isCorrect: true },
        { text: "Seulement les tests manuels", isCorrect: false },
        { text: "Attendre que les erreurs se produisent", isCorrect: false }
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