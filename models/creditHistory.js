const { DataTypes } = require('sequelize');

module.exports = (sequelize) => sequelize.define("HistorialDeCreditos",{
    id:{
       type: DataTypes.INTEGER,
       primaryKey: true,
       allowNull: false,
       autoIncrement: false
    },
    montoDeCredito:{
       type: DataTypes.STRING,
       allowNull: false
    },
    nombreDelUsuario:{
        type: DataTypes.STRING,
        allowNull: false
    },
    fechaDePago: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{timestamps: false, freezeTableName: true})