import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get('/view', (req, res) => {
    res.render('view.ejs');
});

app.get('/post', (req, res) => {
    res.render('post.ejs');
   });

app.listen(3000, () => {
    console.log('Blog is running on port 3000');
});