module.exports = (sequelize, DataType) => {

  const Pacientes = sequelize.define('Pacientes', {
    pacientesId: {
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
    lastName: {
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

      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    calle: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    colonia: {
      type: DataType.STRING,

      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    ciudad: {
      type: DataType.STRING,

      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    estado: {
      type: DataType.STRING,

      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    tel: {
      type: DataType.STRING,

      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    ext: {
      type: DataType.STRING,

      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    telOp: {
      type: DataType.STRING,

      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    extOp: {
      type: DataType.STRING,

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
    },
  });

  Pacientes.associate = (models) => {
    Pacientes.hasMany(models.Presupuestos);
  };

  return Pacientes;

};