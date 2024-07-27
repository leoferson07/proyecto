const { DataTypes } = require('sequelize');

module.exports = (sequelize) => sequelize.define('Miembros', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cargo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  edad: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  cooperativaId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Cooperativa',
      key: 'id'
    }
  }
}, { timestamps: false, freezeTableName: true });
