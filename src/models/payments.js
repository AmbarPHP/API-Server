module.exports = (sequelize, DataType) => {

  const Payments = sequelize.define('Payments', {
    invoiceNumber: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    createAt: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    cantidad_cargo: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    cantidad_abono: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
  });
  //un pago pertenece a un presupuesto
  Payments.associate = (models) => {
    Payments.belongsTo(models.Presupuestos);
  };

  return Payments;

};