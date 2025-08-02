// index.js

//creating a  routes 



//  1 st middlware
// app.use(express.json());
// //2 nd middlware
// app.use(express.urlencoded({extended:true}));
// //with the help of these middleware our data in server got in readmable form. those who got not readmable form .

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public')); // serve HTML files

// Route for form handling
app.post('/', (req, res) => {
  const { username, password } = req.body;
  res.send(`Welcome ${username}, your password is ${password}`);
});

// Start server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000/login.html');
});
