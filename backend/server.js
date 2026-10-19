const express = require("express");
const mysql = require("mysql2");

const app = express();
const PORT = 3000;

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "kocsik"
});

db.connect((err) => {
    if (err) {
        console.log("Hiba az adatbázis csatlakozásnál:", err);
        return;
    }

    console.log("Sikeres adatbázis kapcsolat!");
});

app.get("/", (req, res) => {
    res.send("Backend működik!");
});

app.listen(PORT, () => {
    console.log(`Szerver fut a ${PORT} porton`);
});