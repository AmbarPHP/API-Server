module.exports = app => {

  const Presupuestos = app.db.models.Presupuestos;


  //encadenando la misma ruta
  app.route('/presupuesto')
    .get((req, res) => {
      Presupuestos.findAll({})
        .then(result => res.json(result))
        .catch(error => {
          res.status(412).json({
            msg: error.message
          });
        });
    })
    .post((req, res) => {
      Presupuestos.create(req.body)
        .then(result => res.json(result))
        .catch(error => {
          res.status(412).json({
            msg: error.message
          });
        });
    });

  //hayar todos los presupuestos de un paciente, si no exite id, trae todos los presupuestos
  app.route('/presupuesto/:pacienteid')
    .get((req, res) => {
      let query;
      if (req.params.pacienteId) {
        query = Presupuestos.findAll({

          include: [{
            model: Paciente,
            where: {
              id: req.params.pacienteId
            },
            model: {
              Tratamiento
            }
          }]
        })

      } else {
        query = Presupuestos.findAll({
          include: [Paciente, Tratamiento]
        });
      }
    })
    .put((req, res) => {
      Presupuestos.update(req.body, {
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
      Presupuestos.destroy({
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