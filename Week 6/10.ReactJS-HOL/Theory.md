# Office Space Rental App

## Objective

This practical demonstrates the use of JSX in React to create elements, render JavaScript expressions, apply inline CSS, and display data using arrays and objects.

---

# Theory

## 1. What is JSX?

JSX (JavaScript XML) is a syntax extension for JavaScript that allows developers to write HTML-like code inside JavaScript.

### Example

```jsx
const element = <h1>Hello React</h1>;
```

---

## 2. What is ECMAScript (ES)?

ECMAScript (ES) is the standard specification for JavaScript. Modern versions such as ES6 introduced many new features including:

- let
- const
- Arrow Functions
- Classes
- Modules
- Destructuring
- Spread Operator
- Promises

---

## 3. What is `React.createElement()`?

`React.createElement()` is the function React uses internally to create React elements.

Example:

```javascript
React.createElement(
    "h1",
    null,
    "Hello World"
);
```

JSX is compiled into `React.createElement()` calls.

---

## 4. How do you create React nodes using JSX?

React nodes are created using JSX syntax.

Example

```jsx
const heading = <h1>Office Space Rental</h1>;
```

---

## 5. How is JSX rendered to the DOM?

ReactDOM renders JSX into the browser DOM.

Example

```jsx
const root = ReactDOM.createRoot(
    document.getElementById("root")
);

root.render(<App />);
```

---

## 6. How are JavaScript expressions used in JSX?

JavaScript expressions are enclosed within curly braces `{}`.

Example

```jsx
const name = "DBS";

<h2>{name}</h2>
```

---

## 7. How is Inline CSS used in JSX?

Inline CSS is written as a JavaScript object.

Example

```jsx
<h2 style={{ color: "green" }}>
    Office Space
</h2>
```

---

# Concepts Used

- JSX
- React.createElement()
- ReactDOM Rendering
- JavaScript Expressions
- Objects
- Arrays
- map()
- Inline CSS
- Conditional Styling

---

# Output

The application displays:

- Office Space Rental heading
- Office image
- Office details
- List of office spaces
- Rent in **Red** if below ₹60,000
- Rent in **Green** if ₹60,000 or above

---

# Conclusion

This practical demonstrates how JSX simplifies UI creation in React by combining HTML-like syntax with JavaScript expressions. It also shows rendering arrays using `map()` and applying inline CSS conditionally.