const express = require('express');
const cors = require("cors");
const app = express();
app.use(cors());
const port = 8080;
let bookList = [
    {pk_isbn: "1234567890123", title: "Un libro", fk_author: {pk_id: "00000000t", name: "Anónimo", age: 17}},
    {pk_isbn: "1234567890124", title: "Otro libro", fk_author: {pk_id: "11111111h", name: "Un escritor", age: 20}},
    {pk_isbn: "1234567890125", title: "Otro más de prueba", fk_author: {pk_id: "22222222j", name: "Otro escritor", age: 31}}
];

app.get('/library/books', (req, res) => {
    res.send(bookList)
});

app.delete('/library/books/:pk_isbn', (req, res) => {
    let bookToDelete = bookList.filter((book) => {return book.pk_isbn === req.params.pk_isbn})[0];
    let indexToDelete = bookList.indexOf(bookToDelete);
    bookList.splice(indexToDelete, 1);
    res.sendStatus(204);
});

app.listen(port, () => {
    console.log(`Datos para la aplicación de ejemplo «Biblioteca» escuchando en: http://localhost:${port}`)
});