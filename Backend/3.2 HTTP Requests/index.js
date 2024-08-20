import express from "express";
const app=express();

app.get("/",(req,res)=>{
  res.send("<h1>hello world</h1>");
});

app.get("/about",(req,res)=>{
  res.send("<h1>About</h1><P>i am shreyas pangavhane</p>")
});

app.get("/contact",(req,res)=>{
  res.send("<h1>Contact</h1><P>Phone:1234567890</p>")
});

app.listen(3000,()=>{
  console.log("Server run on 3000");
});