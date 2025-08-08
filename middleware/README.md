# 🔧 Middleware in Express.js

## 📌 What is Middleware?

Middleware in **Express.js** is a function that executes **before the final route handler**.  
It can process the request, modify it, perform logic (like authentication, logging), and then pass control using `next()`.

---

## 🔄 Flow Diagram

Client → HTTP Request → Middleware(s) → Route Handler → Response

---

## 📂 Example of Middleware

```js
const express = require('express');
const app = express();

// Custom middleware
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); // Move to next middleware or route
};

app.use(logger); // Apply middleware globally

app.get('/', (req, res) => {
  res.send('Welcome to Home Page!');
});

app.listen(3000, () => console.log('Server started on port 3000'));
✅ Benefits of Middleware
Reusable logic (auth, logging, validation)

Clean & maintainable code structure

Request/Response manipulation

Centralized error handling

Supports chaining for complex flows

🧠 Types of Middleware
Type	Description
Application-level	Middleware bound to app via app.use()
Router-level	Middleware used with express.Router()
Built-in	e.g. express.json(), express.static()
Error-handling	Middleware with 4 args: (err, req, res, next)
Third-party	e.g. morgan, cors, helmet etc.

🔚 Summary
Middleware is the core of request handling in Express.js. It helps you write modular, scalable, and cleaner code by dividing the processing of requests into separate logical steps.