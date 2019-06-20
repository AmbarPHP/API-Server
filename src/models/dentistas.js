module.exports = (sequelize, DataType) => {

  const Dentistas = sequelize.define('Dentistas', {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    password: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    email: {
      type: DataType.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
  });

  Dentistas.associate = (models) => {
    Dentistas.hasMany(models.Presupuestos);
  };

  return Dentistas;

};