const express = require('express')
var cors = require("cors");
const app = express()
app.use(cors());
const port = 8080
let listalibros=[];
listalibros.push({isbn:"1",titulo:"java",autor:"juan"});
listalibros.push({isbn:"2",titulo:"java2",autor:"juan2"});

app.get('/libros', (req, res) => {
  res.send(listalibros)
})

app.delete('/libros/:isbn', (req, res) => {
  
  let libroborrar=this.listaLibros.filter(function(e) {
    return e.isbn==req.params.isbn;
  })[0];

  let posicion= this.listaLibros.indexOf(libroborrar);
  this.listaLibros.splice(posicion,1);


})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
