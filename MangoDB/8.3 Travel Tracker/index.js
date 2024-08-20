import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "word",
    password: "Shreyas@09",
    port: "5432"
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async(req, res) => {
    const result = await db.query("select countery_code from visited_country");
    let countries = [];
    resul
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});