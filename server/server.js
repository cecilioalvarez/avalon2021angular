const express = require('express');
const cors = require("cors");
const app = express();
app.use(cors());
const port = 8080;
let bookList = [
    {isbn: "1234567890123", title: "Un libro", author:"Anónimo"},
    {isbn: "1234567890124", title: "Otro libro", author:"Un escritor"},
    {isbn: "1234567890125", title: "Otro más de prueba", author:"Otro escritor"}
];

app.get('/library', (req, res) => {
    res.send(bookList)
});

app.delete('/library/:isbn', (req, res) => {
    let bookToDelete = bookList.filter((book) => {return book.isbn === req.params.isbn})[0];
    let indexToDelete = bookList.indexOf(bookToDelete);
    bookList.splice(indexToDelete, 1);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});