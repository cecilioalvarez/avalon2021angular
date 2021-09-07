const express = require('express')
const app = express()
const port = 8081

let listaLibros = []
listaLibros.push({ isbn: "1", titulo: "java", autor: "juan" });
listaLibros.push({ isbn: "2", titulo: "java2", autor: "juan2" });

app.get('/', (req, res) => {
    res.send(listaLibros)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})