const express = require('express');
const app = express();
const path = require('path');


app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// rutas
const routes = require('./routes/index.routes');
app.use(routes);

// ruta para archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

// ruta para el index

app.use((req,res)=>{
    res.sendFile(path.join(__dirname, `../public/index.html`));
})

const PORT = 3000;

app.listen(PORT,(req,res)=>{
    console.log(`Server is running on port ${PORT}`);
})

// el motor de plantillas es pug

