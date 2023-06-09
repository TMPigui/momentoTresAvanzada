const cors         = require('cors');
const express      = require('express');
const controller   = require('./controllers');

const router = express.Router();

//CRUD API Usuarios
router.delete   ('/Usuarios/:id',   cors(), controller.deleteUser); //eliminar
router.put      ('/Usuarios/:id',   cors(), controller.updateUser); //actualizar
router.post     ('/Usuarios',       cors(), controller.createUser); //crear


module.exports = router;

