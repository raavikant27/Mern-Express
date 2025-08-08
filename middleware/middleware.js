import express from 'express'
const app=express();




function cheakRoute(req,resp,next){
console.log("user is accessing"+req.url+"pages");
next();


}
app.use(cheakRoute)

//next is alowe to cheak next route
//for call the functions we use app.use()
app.get("/",(req,resp)=>{

    resp.send("home page")
})
app.get("/user",(req,resp)=>{


    resp.send("user -page");
})


app.get("/products",(req,resp)=>{

    resp.send("products -page")
})
app.listen(3200)