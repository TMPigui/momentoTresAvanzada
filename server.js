require('dotenv').config();
const path       = require('path');
var cors         = require('cors');
const express    = require('express');
const mongoose   = require('mongoose');
const apiRoutes  = require('./routes');


const app        = express()
const port       = 3500 || process.env.PORT 

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("Conectado a la base de datos de MongoDB Atlas"))
    .catch(() => console.error("Error de conexión a la base de datos"))

// MIDDLEWARE
app.use(cors());                       //soporte para CORS
app.use(express.json());               //Importante poner esto antes de las rutas
app.use('/api', apiRoutes);
app.use(express.static(path.join(__dirname, 'public')));

/*app.get('/', (req, res)=>{
    res.send("hola")
})*/

//servidor web
app.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${port}`);
})
