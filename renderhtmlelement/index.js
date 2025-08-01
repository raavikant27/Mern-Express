// index.js
import express from 'express';

const app = express();

// Middleware to parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));

// Home route
app.get("/", (req, res) => {
  res.send("<h1>🏠 Welcome to the Home Page</h1>");
});

// Login page with form
app.get("/login", (req, res) => {
  res.send(`
    <h2>Login Form</h2>
    <form action="/submit" method="POST" style="display: flex; flex-direction: column; max-width: 300px;">
      <input type="text" name="username" placeholder="Enter username" required style="margin-bottom: 10px; padding: 8px;" />
      <input type="password" name="password" placeholder="Enter password" required style="margin-bottom: 10px; padding: 8px;" />
      <button type="submit" style="padding: 8px; background-color: #4CAF50; color: white;">Login</button>
    </form>
  `);
});

// Handle form submission
app.post("/submit", (req, res) => {
  const { username, password } = req.body;

  res.send(`
    <h1>✅ Login Successful</h1>
    <p><strong>Username:</strong> ${username}</p>
    <p><strong>Password:</strong> ${password}</p>
    <a href="/login">Back to Login</a>
  `);
});

// Start the server
app.listen(3000, () => {
  console.log('🚀 Server is running on http://localhost:3000');
});
