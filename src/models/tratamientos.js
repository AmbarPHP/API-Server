module.exports = (sequelize, DataType) => {

  //------------------------------------definir el nombre de la tabla 

  const Tratamientos = sequelize.define('Tratamientos', {
    tratamientoId: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    cost: {
      type: DataType.STRING,
      allowNull: false,
    },
    type: {
      type: DataType.STRING,
      allowNull: false,
    },
    description: {
      type: DataType.STRING,
    }


  });

  //los tratamientos pertenecen a un presupuesto
  Tratamientos.associate = (models) => {
    Tratamientos.belongsTo(models.Presupuestos);
  };

  return Tratamientos;
};