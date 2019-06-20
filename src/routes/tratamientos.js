module.exports = app => {

  const Tratamientos = app.db.models.Tratamientos;

  //encadenando la misma ruta
  app.route('/tratamiento')
    .get((req, res) => {
      Tratamientos.findAll({})
        .then(result => res.json(result))
        .catch(error => {
          res.status(412).json({
            msg: error.message
          });
        });
    })
    .post((req, res) => {
      Tratamientos.create(req.body)
        .then(result => res.json(result))
        .catch(error => {
          res.status(412).json({
            msg: error.message
          });
        });
    });

  app.route('/tratamiento/:id')
    .get((req, res) => {
      Tratamientos.findOne({
          where: req.params
        })
        .then(result => {
          if (result) {
            res.json(result);
          } else {
            res.sendStatus(404);
          }
        })
        .catch(error => {
          res.status(412).json({
            msg: error.message
          });
        });
    })
    .put((req, res) => {
      Tratamientos.update(req.body, {
          where: req.params
        })
        .then(result => res.sendStatus(204))
        .catch(error => {
          res.status(412).json({
            msg: error.message
          });
        });
    })
    .delete((req, res) => {
      Tratamientos.destroy({
          where: req.params
        })
        .then(result => res.sendStatus(204))
        .catch(error => {
          res.status(204).json({
            msg: error.message
          });
        });
    });

};