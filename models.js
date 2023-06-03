const mongoose = require('mongoose')

const Usuario = mongoose.model('Usuario',
    new mongoose.Schema({ nombre: String, apellidos: String })
)

module.exports = {
    Usuario: Usuario
}