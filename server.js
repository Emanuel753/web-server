const express = require('express');
const hbs = require('hbs');

require('./hbs/helpers');

const app = express();

const port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));//middleware
//hbs engine

hbs.registerPartials(__dirname + '/views/partials');

//helpers




app.set('view engine', 'hbs');

app.get('/', function (req, res) {
  res.render('home',{
    nombre: 'Emanuel'
  });
})


app.get('/informacion', function (req, res) {
    res.render('informacion');
  })

app.listen(port, ()=>{
    console.log(`Escuchando el puerto ${port}`);
});