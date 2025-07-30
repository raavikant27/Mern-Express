const express=require('express');
const app=express();
app.get("",(req,resp)=>{
    resp.send("<h1>basic nodejs express</h1>")
});
app.get("/about",(req,resp)=>{
    resp.send("<h1>this is about pages</h1>")
});



app.listen(3200)