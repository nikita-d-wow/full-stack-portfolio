# Debugging Guide

Debugging is the process of finding and fixing bugs in your code.  
Good debugging skills = faster development + fewer breakdowns in production

---

## 1. Basic Debugging Steps

- Reproduce the bug consistently.
- Check the **exact error message** and **stack trace**.
- Use `console.log()` or breakpoints to trace where things go wrong.
- Work backwards from the error.
- Change only one thing at a time to isolate the issue.

---

## 2. Debugging Frontend (React / JS)

- Open **Browser DevTools** → check:
  - Console for errors.
  - Network tab for failed requests or 404s.
  - Elements tab for DOM issues.
- Use `console.log()` or `debugger;` to inspect variable values.
- Verify component props and state.
- Check if assets (images, scripts, CSS) are loading properly.

---

## 3. Debugging Backend (Node.js / Express)

- Add logging statements to trace execution flow.
- Use `try...catch` blocks to capture errors.
- Check terminal output and server logs.
- Validate API request & response payloads.
- Temporarily simplify middleware or routes to isolate issues.

---

## 4. Debugging APIs

- Use **Postman**, **cURL**, or browser to test endpoints.
- Check:
  - Correct HTTP method (GET, POST, etc.)
  - Headers (especially `Content-Type` and `Authorization`)
  - Request body structure
  - Response status codes
- Common issues:
  - `404` → Wrong endpoint
  - `401` → Missing or invalid auth
  - `500` → Server error (check logs)

---

## 5. Common Debugging Tips

- Restart the server and clear cache — it solves a _lot_ of issues.
- Comment out code to find where the break happens.
- Update dependencies if something breaks unexpectedly.
- Always read error messages carefully. They're your best clue.

---

## 6. Debugging in VS Code

- Use **Breakpoints** (click next to the line number).
- Run the debugger (F5).
- Inspect variable values in the sidebar.
- Step through code line by line.
- Add **launch.json** to configure debugging settings.

---
