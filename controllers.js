const { Usuario } = require("./models")

/*--------------------------------suario----------------------------------*/
//todos los usuarios
exports.readUsers = (req, res) =>
    Usuario.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data)
    });

//por usuario    
exports.readUser = (req, res) =>
    User.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });

//eliminar
exports.deleteUser = (req, res) =>
    User.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });

//actualizar
exports.updateUser = (req, res) =>
    User.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { nombre: req.body.nombre, apellidos: req.body.apellidos } },
        (err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        }
    );


//crear
exports.createUser = (req, res) =>
    new User({ nombre: req.body.nombre, apellidos: req.body.apellidos })
        .save((err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        });


/*--------------------------------renta----------------------------------*/