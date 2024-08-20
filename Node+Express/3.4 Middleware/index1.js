import express from "express";
//import bodyparser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyparser.urlencoded({extended:true}));

app.get("/", (req, res) => {
  console.log(__dirname + "/public/index.html");
  res.sendFile(__dirname + "/public/index.html");
});
app.post("/submit", (req,res)=>{
  console.log(bodyparser);
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
