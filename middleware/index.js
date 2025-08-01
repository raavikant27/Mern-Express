// index.js
import express from 'express';

const app = express();
//creating a  routes 


//middleware
app.use(function(req,res,next){

    console.log('middleware chalavo');
    next();
  
});
app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});
app.get("/about", (req, res) => {
  res.send("<h1>about pages</h1>");
});

//error handling-
app.use((err, req, res, next) => {
  console.error("Error:", err.message);
  res.status(500).send("Something went wrong!");
});








const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
