// index.js
import express from 'express';

const app = express();
//creating a  routes 

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

app.get("/profile", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

app.get("/login", (req, res) => {
  res.send(`
    <form action="/submit" method="post">
      <input type="text" placeholder="Enter text" />
      <input type="password" placeholder="Enter password" />
      <button type="submit">Submit</button>
    </form>
  `);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
