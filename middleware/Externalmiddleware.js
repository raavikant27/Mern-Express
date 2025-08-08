import express from 'express'
import morgan  from 'morgan';
const app=express();



app.use(morgan('dev'))
app.get("/",(req,resp)=>{
    resp.send("Home page")
});


app.get("/product",(req,resp)=>{


    resp.send("product-pages")
});
app.get("/about",(req,resp)=>{

    resp.send("about-pages")
});

app.get("/user",(req,resp)=>{
    resp.send("user-page")
});


app.listen(3800)

