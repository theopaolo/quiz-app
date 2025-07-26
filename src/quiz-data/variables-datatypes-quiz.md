# Variables et Types de Données - Quiz

## Questions à Choix Multiples

### 1. Quel est le type de données retourné par `typeof null` ?
a) `"null"`
b) `"undefined"`
c) `"object"`
d) `"boolean"`

**Réponse: c) `"object"`** - C'est un bug historique de JavaScript qui est maintenu pour la compatibilité.

### 2. Quelle déclaration crée une variable dans le scope le plus restrictif ?
a) `var`
b) `let`
c) `const`
d) `let` et `const` sont équivalents

**Réponse: d) `let` et `const` sont équivalents** - Tous deux ont un scope de bloc, `const` ne permet simplement pas la réassignation.

### 3. Que retourne cette expression ?
<pre>
typeof (5 + "3")
</pre>
a) `"number"`
b) `"string"`
c) `"undefined"`
d) Une erreur

**Réponse: b) `"string"`** - La coercition convertit le nombre en chaîne, résultat: `"53"`

### 4. Quelle est la différence entre `null` et `undefined` ?
a) Aucune différence
b) `null` est assigné explicitement, `undefined` est l'absence de valeur
c) `undefined` est assigné explicitement, `null` est l'absence de valeur
d) `null` est pour les objets, `undefined` pour les primitives

**Réponse: b) `null` est assigné explicitement, `undefined` est l'absence de valeur**

### 5. Comment vérifier si une variable est un tableau ?
a) `typeof variable === "array"`
b) `variable instanceof Array`
c) `Array.isArray(variable)`
d) Les réponses b et c sont correctes

**Réponse: d) Les réponses b et c sont correctes** - `Array.isArray()` est préférable car plus fiable.

## Questions Vrai/Faux

### 6. `const` empêche la modification des propriétés d'un objet.
**Réponse: Faux** - `const` empêche la réassignation de la variable, pas la mutation de l'objet.

### 7. `NaN === NaN` retourne `true`.
**Réponse: Faux** - `NaN` n'est jamais égal à lui-même. Utiliser `Number.isNaN()` pour tester.

### 8. Une variable déclarée avec `var` peut être redéclarée dans le même scope.
**Réponse: Vrai** - Contrairement à `let` et `const` qui lèvent une erreur.

### 9. `Symbol()` crée toujours une valeur unique.
**Réponse: Vrai** - Chaque appel à `Symbol()` retourne un symbole unique.

### 10. `BigInt` peut être mélangé avec `Number` dans les opérations arithmétiques.
**Réponse: Faux** - Il faut convertir explicitement entre `BigInt` et `Number`.

## Questions d'Analyse de Code

### 11. Que va afficher ce code ?
<pre>
console.log(a);
var a = 5;
</pre>
**Réponse: `undefined`** - Hoisting : la déclaration est remontée, mais pas l'assignation.

### 12. Quel sera le résultat ?
<pre>
let x = 1;
if (true) {
    let x = 2;
    console.log(x);
}
console.log(x);
</pre>
**Réponse: `2` puis `1`** - `let` a un scope de bloc.

### 13. Que retourne cette expression ?
<pre>
[1, 2, 3] == [1, 2, 3]
</pre>
**Réponse: `false`** - Comparaison de références, pas de valeurs.

### 14. Quel est le problème avec ce code ?
<pre>
const obj = {a: 1};
obj.a = 2;
console.log(obj.a);
</pre>
**Réponse: Aucun problème, affiche `2`** - `const` n'empêche pas la mutation des propriétés.

## Questions Pratiques

### 15. Comment créer une vraie copie d'un objet simple (sans méthodes) ?
<pre>
const original = {a: 1, b: {c: 2}};
// Votre solution
</pre>
**Réponse:**
<pre>
// Copie profonde
const copie = JSON.parse(JSON.stringify(original));

// Ou avec structuredClone (moderne)
const copie = structuredClone(original);
</pre>

### 16. Comment déclarer plusieurs variables avec des valeurs par défaut ?
<pre>
// Déclarer a=1, b=2, c=3 en une ligne
</pre>
**Réponse:**
<pre>
const [a = 1, b = 2, c = 3] = [];
// ou
const {a = 1, b = 2, c = 3} = {};
</pre>

### 17. Comment vérifier si une valeur est vraiment un nombre (pas NaN) ?
<pre>
function estNombreValide(value) {
    // Votre code
}
</pre>
**Réponse:**
<pre>
function estNombreValide(value) {
    return typeof value === 'number' && !isNaN(value) && isFinite(value);
}
// ou plus simple :
function estNombreValide(value) {
    return Number.isFinite(value);
}
</pre>

### 18. Comment convertir une chaîne en nombre de manière sûre ?
<pre>
const str = "123.45px";
// Extraire le nombre 123.45
</pre>
**Réponse:**
<pre>
const nombre = parseFloat(str); // 123.45
// ou avec une validation plus stricte :
const nombre = Number(str.match(/^[\d.]+/)?.[0]); // 123.45
</pre>

## Questions sur les Types Avancés

### 19. Quelle est la différence entre primitive et objet en JavaScript ?
**Réponse:** Les primitives (string, number, boolean, null, undefined, symbol, bigint) sont passées par valeur et immutables. Les objets (including arrays, functions) sont passés par référence et mutables.

### 20. Comment créer un type énumération en JavaScript ?
**Réponse:**
<pre>
// Avec Object.freeze
const Status = Object.freeze({
    PENDING: 'pending',
    SUCCESS: 'success',
    ERROR: 'error'
});

// Avec des Symbols (plus robuste)
const Status = {
    PENDING: Symbol('pending'),
    SUCCESS: Symbol('success'),
    ERROR: Symbol('error')
};
</pre>

### 21. Comment implémenter un type optionnel (nullable) ?
**Réponse:**
<pre>
class Optional {
    constructor(value) {
        this.value = value;
    }

    static of(value) {
        return new Optional(value);
    }

    static empty() {
        return new Optional(null);
    }

    isPresent() {
        return this.value !== null && this.value !== undefined;
    }

    orElse(defaultValue) {
        return this.isPresent() ? this.value : defaultValue;
    }
}
</pre>

## Questions de Conversion de Types

### 22. Que donne chacune de ces conversions ?
<pre>
Boolean(0)      // ?
Boolean("")     // ?
Boolean([])     // ?
Boolean({})     // ?
Number("123")   // ?
Number("123px") // ?
String(null)    // ?
</pre>
**Réponses:**
<pre>
Boolean(0)      // false
Boolean("")     // false
Boolean([])     // true (objet non-null)
Boolean({})     // true (objet non-null)
Number("123")   // 123
Number("123px") // NaN
String(null)    // "null"
</pre>

### 23. Comment forcer la conversion en entier ?
<pre>
const str = "123.89";
// Méthodes pour obtenir 123
</pre>
**Réponse:**
<pre>
parseInt(str)        // 123
Math.floor(+str)     // 123
Math.trunc(+str)     // 123
~~+str               // 123 (bitwise, rapide)
str | 0              // 123 (bitwise)
</pre>

## Questions de Portée (Scope)

### 24. Expliquez la différence de comportement :
<pre>
// Cas 1
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}

// Cas 2
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}
</pre>
**Réponse:**
- **Cas 1:** Affiche `3, 3, 3` - `var` a un scope de fonction, `i` vaut 3 quand les callbacks s'exécutent
- **Cas 2:** Affiche `0, 1, 2` - `let` a un scope de bloc, chaque itération a sa propre variable `i`

### 25. Comment corriger ce problème avec `var` ?
**Réponse:**
<pre>
// Solution 1: IIFE
for (var i = 0; i < 3; i++) {
    (function(index) {
        setTimeout(() => console.log(index), 100);
    })(i);
}

// Solution 2: bind
for (var i = 0; i < 3; i++) {
    setTimeout(console.log.bind(null, i), 100);
}
</pre>

## Questions de Débogage

### 26. Pourquoi ce code ne fonctionne pas ?
<pre>
const arr = [1, 2, 3];
const [a, b, c, d] = arr;
console.log(d); // ?
</pre>
**Réponse:** `d` sera `undefined` car il n'y a que 3 éléments dans le tableau.

### 27. Quel est le problème ici ?
<pre>
const config = {
    timeout: 5000,
    retries: 3
};

function updateConfig(newConfig) {
    config = {...config, ...newConfig}; // Erreur !
}
</pre>
**Réponse:** On ne peut pas réassigner une variable `const`. Solution :
<pre>
let config = { /* ... */ };
// ou
function updateConfig(newConfig) {
    return {...config, ...newConfig};
}
</pre>

## Questions Avancées

### 28. Comment implémenter un système de typage runtime ?
**Réponse:**
<pre>
function createTypedVariable(type, initialValue) {
    let value = initialValue;

    return {
        get() { return value; },
        set(newValue) {
            if (typeof newValue !== type) {
                throw new TypeError(`Expected ${type}, got ${typeof newValue}`);
            }
            value = newValue;
        },
        getType() { return type; }
    };
}

// Usage
const typedString = createTypedVariable('string', 'hello');
typedString.set('world'); // OK
typedString.set(123);     // TypeError
</pre>

### 29. Comment créer un proxy pour logger les accès aux propriétés ?
**Réponse:**
<pre>
function createLoggingProxy(obj, name = 'object') {
    return new Proxy(obj, {
        get(target, prop) {
            console.log(`GET ${name}.${prop}`);
            return target[prop];
        },
        set(target, prop, value) {
            console.log(`SET ${name}.${prop} = ${value}`);
            target[prop] = value;
            return true;
        }
    });
}

const user = createLoggingProxy({name: 'Alice'}, 'user');
user.name; // Logs: GET user.name
user.age = 25; // Logs: SET user.age = 25
</pre>

### 30. Comment implémenter l'immutabilité profonde ?
**Réponse:**
<pre>
function deepFreeze(obj) {
    // Récupérer les noms des propriétés
    Object.getOwnPropertyNames(obj).forEach(prop => {
        const value = obj[prop];

        // Freeze les objets/tableaux imbriqués
        if (value && typeof value === 'object') {
            deepFreeze(value);
        }
    });

    return Object.freeze(obj);
}

// Usage
const config = deepFreeze({
    api: {
        url: 'https://api.example.com',
        timeout: 5000
    }
});

// config.api.url = 'hack'; // Erreur en mode strict
</pre>

## Notation
- **28-30 correct**: Maîtrise experte des variables et types
- **25-27 correct**: Excellente compréhension, prêt pour concepts avancés
- **22-24 correct**: Bonne maîtrise, approfondir les cas complexes
- **18-21 correct**: Compréhension solide, pratiquer conversions et scope
- **14-17 correct**: Bases acquises, se concentrer sur `let`/`const` et coercition
- **Moins de 14**: Réviser les fondamentaux des variables et types primitifs