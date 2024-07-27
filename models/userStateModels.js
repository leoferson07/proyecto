const { DataTypes } = require('sequelize');

module.exports = (sequelize) => sequelize.define("State",{
    id:{
       type: DataTypes.INTEGER,
       primaryKey: true,
       allowNull: false,
       autoIncrement: true
    },
    nombre:{
       type: DataTypes.STRING,
       allowNull: false
    },
    cuentasPrestamo:{
       type: DataTypes.STRING,
       allowNull: false
    },
    cuentasAhorro:{
       type: DataTypes.STRING,
       allowNull: false
    }
},{timestamps: false, freezeTableName: true});