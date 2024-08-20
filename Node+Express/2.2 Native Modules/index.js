const fs=require("fs");
fs.writeFile("message.txt","hello",(err)=>{
    if (err)
        throw err;
        console.log("message is saved!!");
});


fs.readFile("message.txt","utf8",(err,data)=>{
    if(err)
        throw err;
    console.log(data);
});
