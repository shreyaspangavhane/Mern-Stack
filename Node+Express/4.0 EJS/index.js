import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.render("index.ejs", {
        daytype: "a weekday",
        advice: "it's time to work hard"
    });

});

app.listen(port, () => {
    console.log(`server running on port ${port}.`);
});

