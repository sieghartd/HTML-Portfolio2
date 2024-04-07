import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index2.ejs");
});

app.post("/submit", (req, res) => {
    const numberOfLetters = req.body["fName"].length + req.body["lName"].length;
    res.render("index2.ejs", {numLets: numberOfLetters});
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
 

// app.post("/submit", (req, res) => {
//     const numberOfLetters = req.body["fName"].length + req.body["lName"].length;
//     res.render("index2.ejs", {numOfLet: numberOfLetters});
// });

