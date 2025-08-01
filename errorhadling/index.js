// index.js
import express from 'express';

const app = express();
//creating a  routes 


//middleware
app.use(function(req,res,next){

    console.log('middleware chalavo');
    next();
             
});

app.get("/profile", function(req, res,next){
    //its gone to console 
  return next(new Error("not implemented"));
});

//error handling-
app.use((err, req, res, next) => {
  console.error("Error:", err.message);
  //it gone to frontend
  res.status(500).send("Something went wrong!");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});   
