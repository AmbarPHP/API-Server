module.exports = app => {

  const Dentistas = app.db.models.Dentistas;


  app.get('/dentistas', (req, res) => {
    dentistas.findAll()
      .then(result => res.json(result))
      .catch(error => {
        res.status(412).json({
          msg: error.message
        });
      });
  });

  app.get('/dentistas/:id', (req, res) => {
    dentistas.findById(req.params.id, {
        attributes: ['id', 'name', 'email']
      })
      .then(result => res.json(result))
      .catch(error => {
        res.status(412).json({
          msg: error.message
        });
      });
  });

  app.delete('/dentistas/:id', (req, res) => {
    dentistas.destroy({
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

  app.post('/dentistas', (req, res) => {
    dentistas.create(req.body)
      .then(result => res.json(result))
      .catch(error => {
        res.status(412).json({
          msg: error.message
        });
      });
  });

};