import express from "express";
import bodyparser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyparser.urlencoded({extended:true}));

//here i'm create my own middleware named as bandNameGenrator


var bandName=""
function bandNameGenrator(req,res,next) {
  console.log(req.body);
  bandName=req.body["street"]+req.body["pet"];
  next();
}
app.use(bandNameGenrator);





app.get("/",(req,res)=>{
  res.sendFile(__dirname+"/public/index.html");
});

app.post("/submit",(req,res)=>{
  //if we create our own middleware insead of Bydefault
   res.send(`<h1>UR Band name is</h1><h2>${bandName}</h2>` );

  

});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
