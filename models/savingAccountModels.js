const { DataTypes } = require('sequelize');

module.exports = (sequelize) => sequelize.define("savingAccounts",{
    id:{
       type: DataTypes.INTEGER,
       primaryKey: true,
       allowNull: false,
       autoIncrement: false          
    },
    nombreDelTitular:{
       type: DataTypes.STRING,
       allowNull: false
    },
    documentoIdentidad:{
       type: DataTypes.STRING,
       allowNull: false
    },
    numeroCuenta:{
       type: DataTypes.STRING,
       allowNull: false
    },
    tipoCuenta:{
       type: DataTypes.STRING,
       allowNull: false
    },
    saldoInicial:{
       type: DataTypes.STRING,
       allowNull: false
    },
},{timestamps: false, freezeTableName: true});