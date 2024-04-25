import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let countries = [];
let totalCorrect = 0;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "tacoparty123",
  port: 5432,
});

db.connect();

async function checkVisisted() {
  const result = await db.query("SELECT country_code FROM visited_countries");
  let countries = [];
  result.rows.forEach((country) => {
    countries.push(country.country_code);
  });
  return countries;
}

app.get("/", async (req, res) => {
  //Write your code here.
  const countries = await checkVisisted();
  res.render("index.ejs", {countries: countries, total: countries.length});
});

app.post("/add", async (req, res) => {
  const input = req.body["country"];

  try {
  const result = await db.query(
    "SELECT country_code FROM countries WHERE LOWER(country_name) LIKE '%' || $1 || '%';",
  [input.toLowerCase()]
  );
    const data = result.rows[0];
    const countryCode = data.country_code;
    try {
    await db.query(
      "INSERT INTO visited_countries (country_code) VALUES ($1)", 
      [countryCode]
    );
    res.redirect("/");
  } catch (err) {
    console.log(err);
    const countries = await checkVisisted();
    res.render("index.ejs", {
      countries: countries,
      total: countries.length,
      error: "Country has already been added, try again",
    });
  }
} catch (err) {
  console.log(err);
  const countries = await checkVisisted();
  res.render("index.ejs", {
    countries: countries,
    total: countries.length,
    error: "Country has already been added, try again",
  });
};
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
//p1
// Query for the desired data
//array to hold countries
//grab results from query for each country code 
//add country code to the array
//render page. send country code, send number of countries
//p2
//Store user input
// query for country code with corresponding country name
// If this exists then insert into table