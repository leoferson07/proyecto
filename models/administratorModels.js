const { DataTypes } = require('sequelize');

module.exports = (sequelize) => sequelize.define("Administrator",{
    id:{
       type: DataTypes.INTEGER,
       primaryKey: true,
       allowNull: false,
       autoIncrement: false
    },
    nombre:{
       type: DataTypes.STRING,
       allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role:{
        type: DataTypes.STRING,
       allowNull: false
    }

    
},{timestamps: false, freezeTableName: true})