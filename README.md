# MERN - Express.js

This README provides a quick overview of key Express.js concepts used in the MERN (MongoDB, Express.js, React.js, Node.js) stack.

---

## 1. How Express Works

**Express.js** is a minimal and flexible Node.js web application framework that simplifies the process of building APIs and web servers.

### 🔄 Flow:

1. The client sends an HTTP request (GET, POST, etc.).
2. Express receives the request and routes it based on the URL and method.
3. Middleware functions (if any) are executed.
4. Express sends a response using the `res` object.

### 🧪 Example:

```js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
2. Params in Express.js
Params in Express are dynamic values passed through the URL.

🔧 Syntax:
js
Copy
Edit
app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`User ID: ${userId}`);
});
🔎 Output Example:
URL: /user/123

Result: User ID: 123

You can use multiple route parameters:

js
Copy
Edit
app.get('/user/:userId/post/:postId', (req, res) => {
  res.send(req.params); 
  // Output: { userId: '1', postId: '101' }
});
3. Response in Node.js (Express)
Express provides various response methods to send data back to the client.

📦 Common res Methods:
Method	Description
res.send()	Sends text, HTML, or object
res.json()	Sends JSON response
res.status()	Sets the HTTP status code
res.redirect()	Redirects to another route or URL
res.render()	Renders a view template

💡 Example:
js
Copy
Edit
app.get('/data', (req, res) => {
  res.status(200).json({ success: true, message: "Data fetched successfully" });
});
✅ Summary
Express.js streamlines request handling in Node.js.

Use params to capture dynamic values in routes.

Use the res object to control and send responses.

