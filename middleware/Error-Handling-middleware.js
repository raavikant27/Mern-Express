import express from 'express'
const app=express();

app.get("/home",(req,resp)=>{
    resp.send("home page")
});
app.get("/about",(req,resp)=>{
    resp.send("about pages")
});
app.get("/product",(req,resp)=>{

    resp.send3("Product pages")
});
app.get("error",(req,resp)=>{

    resp.send("error-page-404")
});

//error hadnling routes


function errorHandling(error,req,resp,next){
    resp.status(error.status || 500).send("try after some time ")
}
app.use(errorHandling)

app.listen(3200)