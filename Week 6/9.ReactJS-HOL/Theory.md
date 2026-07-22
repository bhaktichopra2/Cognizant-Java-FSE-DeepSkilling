# React ES6 Hands-on (Cricket App)

## Objective

This hands-on demonstrates important ES6 features in React such as:

- map()
- filter()
- Arrow Functions
- Destructuring
- Spread Operator (Merge)

---

# Theory

## 1. What are the features of ES6?

ES6 (ECMAScript 2015) introduced many modern JavaScript features:

- let
- const
- Arrow Functions
- Classes
- Template Literals
- Destructuring
- Spread Operator
- Rest Parameters
- Modules
- Promises
- Map
- Set

---

## 2. What is `let`?

`let` is used to declare variables whose values can be changed. It has **block scope**, meaning it is accessible only within the block in which it is declared.

### Example

```javascript
let age = 20;
age = 21;
console.log(age);
```

---

## 3. Difference between `var` and `let`

| var | let |
|------|------|
| Function scoped | Block scoped |
| Can be redeclared | Cannot be redeclared in the same scope |
| Can be accessed before declaration (hoisted) | Hoisted but cannot be used before declaration |
| Introduced before ES6 | Introduced in ES6 |

---

## 4. What is `const`?

`const` is used to declare constants. Once assigned, its value cannot be reassigned.

### Example

```javascript
const pi = 3.14;
```

---

## 5. Explain ES6 Classes

Classes provide a blueprint for creating objects. They support constructors and methods.

### Example

```javascript
class Student {
    constructor(name) {
        this.name = name;
    }
}
```

---

## 6. Explain ES6 Class Inheritance

Inheritance allows one class to inherit properties and methods from another class using the `extends` keyword.

### Example

```javascript
class Person {
    constructor(name) {
        this.name = name;
    }
}

class Student extends Person {
    constructor(name, course) {
        super(name);
        this.course = course;
    }
}
```

---

## 7. What are Arrow Functions?

Arrow functions provide a shorter syntax for writing functions.

### Example

```javascript
const square = x => x * x;
```

---

## 8. What is `Map`?

`Map` is an ES6 object that stores key-value pairs where keys can be of any data type.

### Example

```javascript
const map = new Map();

map.set("name", "Virat");
map.set("score", 95);

console.log(map.get("name"));
```

---

## 9. What is `Set`?

`Set` is an ES6 collection that stores only unique values.

### Example

```javascript
const set = new Set([10, 20, 30, 30]);

console.log(set);
```

---

## 10. What is Destructuring?

Destructuring allows values from arrays or objects to be extracted into separate variables.

### Example

```javascript
const [first, second] = ["Virat", "Rohit"];

console.log(first);
console.log(second);
```

---

## 11. What is the Spread Operator?

The spread operator (`...`) expands elements of an array or object.

### Example

```javascript
const t20Players = ["Virat", "Rohit"];
const ranjiPlayers = ["Pujara", "Rahane"];

const allPlayers = [...t20Players, ...ranjiPlayers];
```

---

## 12. What is `map()`?

The `map()` method creates a new array by applying a function to every element of an existing array.

### Example

```javascript
const numbers = [1, 2, 3];

const squares = numbers.map(num => num * num);
```

---

## 13. What is `filter()`?

The `filter()` method returns only those elements that satisfy a specified condition.

### Example

```javascript
const players = [
    { name: "Virat", score: 95 },
    { name: "Gill", score: 67 }
];

const lowScorers = players.filter(player => player.score < 70);
```

---

# ES6 Features Used in This Practical

- `map()` to display the list of players.
- `filter()` with arrow functions to display players scoring below 70.
- Destructuring to separate odd and even team players.
- Spread operator (`...`) to merge T20 and Ranji Trophy player arrays.
- Simple `if-else` using a flag variable to switch between components.

---

# Output

## When `flag = true`

Displays:

- List of all players
- Players with scores below 70

---

## When `flag = false`

Displays:

- Odd Team Players
- Even Team Players
- Merged T20 and Ranji Trophy Players

---

# Conclusion

This hands-on demonstrates the use of modern ES6 features in React applications, including `map()`, `filter()`, arrow functions, destructuring, spread operator, `let`, `const`, classes, inheritance, `Map`, and `Set`.