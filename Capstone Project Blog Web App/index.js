import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get('/editor', (req, res) => {
    res.send('<textarea id="post"></textarea>');
});

app.get("/blog", (req, res) => {
    const post = req.query.postl
    res.send(`<h2>${post}</h2>`);
});

app.listen(3000, () => {
    console.log('Blog is running on port 3000');
});