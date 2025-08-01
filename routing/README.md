### 🚀 Introduction to Express.js
# Express.js is a Node.js web application framework.

   It simplifies building web servers by handling routing, middleware, request/response cycles, and more.

Express is available as an npm package and is widely used in backend development.

🧠 Think of Express as the brain of your Node.js application—it processes requests, performs logic, and sends responses back to the user.

⚙️ Setting up Express
bash

npm init -y
npm install express nodemon
Example package.json:


"type": "module",
"scripts": {
  "start": "nodemon index.js"
}
🛣️ Routing
Routes determine how your application responds to a specific endpoint.

js
C
app.get("/", (req, res) => {
  res.send("Welcome to the Home Page");
});

app.get("/login", (req, res) => {
  res.send("Login Page");
});
🧩 Middleware
Middleware functions are functions that have access to the request, response, and the next() function in the application’s request-response cycle.

Use case: Logging, Authentication, Validation, etc.

js
Copy code
app.use((req, res, next) => {
  console.log("Request received at:", new Date());
  next(); // Pass control to next handler
});
💡 Middleware runs before route handlers.

📬 Request and Response Handling
Express simplifies handling incoming requests and sending responses.

js
Copy code
app.get("/form", (req, res) => {
  res.send(`
    <form method="post" action="/submit">
      <input type="text" name="username" />
      <button type="submit">Submit</button>
    </form>
  `);
});

app.post("/submit", (req, res) => {
  res.send("Form submitted successfully!");
});
Use express.urlencoded({ extended: true }) to parse form data.

❌ Error Handling
You can define a middleware to catch all errors:

js
Copy code
app.use((err, req, res, next) => {
  console.error("Error:", err.message);
  res.status(500).send("Something went wrong!");
});
▶️ How to Run
bash
Copy code
npm install
npm start
Your server will start on http://localhost:3000