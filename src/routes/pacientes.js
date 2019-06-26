module.exports = app => {

  const Pacientes = app.db.models.Pacientes;

  app.get('/paciente', (req, res) => {
    Pacientes.findAll()
      .then(result => res.json(result))
      .catch(error => {
        res.status(412).json({
          msg: error.message
        });
      });
  });

  app.put('/paciente/:pacientesId', (req, res) => {
    Pacientes.update({
        tel: req.body.tel,
        calle: req.body.calle,
      }, {
        where: {
          pacientesId: req.params.pacientesId
        }
      })
      .then(result => res.sendStatus(204))
      .catch(error => {
        res.status(412).json({
          msg: error.message
        });
      });
  });

  app.get('/paciente/:pacientesId', (req, res) => {
    Pacientes.findById(req.params.pacientesId, {
        attributes: ['pacientesId', 'name', 'email', 'calle', 'tel']
      })
      .then(result => res.json(result))
      .catch(error => {
        res.status(412).json({
          msg: error.message
        });
      });
  });

  app.delete('/paciente/:id', (req, res) => {
    Pacientes.destroy({
        where: {
          id: req.params.id
        }
      })
      .then(result => res.sendStatus(204))
      .catch(error => {
        res.status(412).json({
          msg: error.message
        });
      });
  });

  app.post('/paciente', (req, res) => {
    Pacientes.create(req.body)
      .then(result => res.json(result))
      .catch(error => {
        res.status(412).json({
          msg: error.message
        });
      });
  });



};