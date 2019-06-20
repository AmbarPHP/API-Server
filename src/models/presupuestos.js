module.exports = (sequelize, DataType) => {

  const Presupuestos = sequelize.define('Presupuestos', {
    presupuestoId: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    status: {
      type: DataType.BOOLEAN,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    invoiceNumber: {
      type: DataType.INTEGER,
    },
    dateRequired: {
      type: DataType.DATE,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    createAt: {
      type: DataType.DATE,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    comments: {
      type: DataType.STRING,

      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
  });

  //pertenece a un paciente y tiene muchos tratamientos
  Presupuestos.associate = (models) => {
    Presupuestos.belongsTo(models.Pacientes);
    Presupuestos.hasMany(models.Tratamientos);
  };

  return Presupuestos;

};