# Debugging Techniques Documentation

This document outlines essential **debugging strategies** used in front‑end development — covering JavaScript, HTML, CSS, and API debugging.

---

## 1. JavaScript Debugging

### a. Using `console`

The simplest and most common debugging technique.

```javascript
console.log(variable); // Logs variable value
console.error('Error msg'); // Logs errors in red
console.warn('Warning msg'); // Logs warning
console.table(arrayOrObj); // Nicely formats arrays/objects
console.time('label'); // Start timer
console.timeEnd('label'); // End timer and print duration
```

- Use `console.log()` at points where you want to check values.
- `console.table()` is great for arrays of objects.
- Remove or comment logs in production.

### b. Using `debugger` Keyword

Pauses execution at a specific line.

```javascript
function testDebug(value) {
  debugger; // Execution stops here
  console.log(value);
}
```

- Works with browser Developer Tools.
- Inspect variables, call stack, and scope at runtime.

### c. Browser Developer Tools

All modern browsers (Chrome, Firefox, Edge) have DevTools.

**Access**: Right-click → _Inspect_ → Console / Sources

**Key Features:**

- **Console**: View logs & run JS.
- **Sources Tab**: Set breakpoints, step through code.
- **Watch/Scope**: Inspect variables and closures.
- **Network Tab**: Monitor API requests.
- **Call Stack**: Check function execution order.

**Breakpoints:**

- Line-of-code breakpoint
- Conditional breakpoint
- XHR/fetch breakpoint

### d. Error Handling

Use `try...catch` to handle exceptions.

```javascript
try {
  riskyFunction();
} catch (err) {
  console.error('Something went wrong:', err);
}
```

### e. Debugging Async Code

- Use `async/await` with `try/catch`.
- Inspect Promises in DevTools.

```javascript
async function fetchData() {
  try {
    const res = await fetch('https://api.example.com/data');
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
```

---

## 2. HTML Debugging

### a. Inspect Element

- Right-click → Inspect Element.
- Check DOM structure, attributes, and hierarchy.

### b. Validate HTML

- Use [W3C HTML Validator](https://validator.w3.org/) to catch structural issues.

### c. Dynamic Updates

Use DevTools Console to manually manipulate the DOM:

```javascript
document.querySelector('#myElement').innerText = 'Debug test';
```

---

## 3. CSS Debugging

### a. Inspect Styles

- DevTools → Elements → Styles
- Check applied & overridden CSS rules.

### b. Box Model Inspection

- DevTools → Computed → Box Model
- Inspect padding, margin, border sizes.

### c. Highlighting Problems

- `outline: 1px solid red;` helps spot layout issues.
- `background-color` temporarily highlights hidden elements.

### d. Common Pitfalls

- Specificity issues — check for overriding selectors.
- Missing units (e.g., `width: 100` instead of `100px`).
- Flex/Grid alignment errors — use outlines for debugging.

---

## 4. Network / API Debugging

### a. Network Tab

- Inspect API requests & responses.
- Check status codes (200, 404, 500…).

### b. Console Logging Responses

```javascript
fetch('https://api.example.com/data')
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
```

### c. Common Fixes

- Check endpoint URLs and spelling.
- Confirm CORS settings.
- Validate API keys or tokens.
- Log response status and data to understand failures.

---
