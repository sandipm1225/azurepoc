require("dotenv").config();
const express = require("express");
const db = require("./db");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

// Home
app.get("/", (req, res) => {
  res.render("index");
});

// Create ticket
app.post("/create", (req, res) => {
  const { name, email, issue } = req.body;

  db.query(
    "INSERT INTO tickets (name, email, issue) VALUES (?, ?, ?)",
    [name, email, issue],
    () => {
      res.redirect("/");
    }
  );
});

// Admin panel
app.get("/admin", (req, res) => {
  db.query("SELECT * FROM tickets", (err, results) => {
    res.render("admin", { tickets: results });
  });
});

// Update status
app.post("/update/:id", (req, res) => {
  const id = req.params.id;
  const status = req.body.status;

  db.query(
    "UPDATE tickets SET status=? WHERE id=?",
    [status, id],
    () => res.redirect("/admin")
  );
});

app.listen(3000, () => console.log("Server running"));