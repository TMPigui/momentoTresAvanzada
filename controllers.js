const { Usuario } = require("./models")

/*--------------------------------suario----------------------------------*/
//Guardar
exports.createUser = (req, res) =>
  new Usuario({ nombre: req.body.nombre, apellidos: req.body.apellidos })
    .save()
    .then(data => res.json(data))
    .catch(err => res.json({ error: err }));


//eliminar
exports.deleteUser = (req, res) => {
    Usuario.findOneAndRemove({ _id: req.params.id })
      .then((data) => {
        if (data) {
          res.json(data);
        } else {
          res.status(404).json({ error: 'Usuario no encontrado' });
        }
      })
      .catch((error) => {
        res.status(500).json({ error: 'Error al eliminar el usuario' });
      });
  };
  

//actualizar
exports.updateUser = async (req, res) => {
  try {
    const updatedUser = await Usuario.findOneAndUpdate(
      { _id: req.params.id },
      { $set: { nombre: req.body.nombre, apellidos: req.body.apellidos } }
    );

    if (updatedUser) {
      res.json(updatedUser);
    } else {
      res.status(404).json({ error: 'Usuario no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el usuario' });
  }
};



/*--------------------------------renta----------------------------------*/