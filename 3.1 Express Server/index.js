import express from "express";
const app = express();
const port = 3000;

app.listen(port, () =>  {
    console.log(`Server running on port ${port}.`);
})

// import express from "express";
// const app = express();
// const port = 3000;

// app.get("/", (req, res) => {
//     // console.log(req.raw);
//     res.send("<h1>Home Page</h1>");
// });

// app.get("/about", (req, res) => {
//     res.send("<h1>About Me</h1>")
// });

// app.get("/contact", (req, res) => {
//     res.send("<h2>Phone Number: 123-456-7890</h2>")
// });

// app.listen(port, () =>  {
//     console.log(`Server running on port ${port}.`);
// });


