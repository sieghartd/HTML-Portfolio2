import express from "express";

const app = express();
const port = 3000;

const d = new Date();
let day = d.getDay();

// if (day == 0 || day == 6) {
//     ("It's the weekend,it's time to have some fun!")
// } else {
//     ("It's the weekday,it's time to work hard!")
// } 

app.get("/", (req, res) => {
    res.render("/views/index.ejs",
    {dayOfWeek: "a weekday",
    advice: "it's time to work hard"});
  });

  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
  