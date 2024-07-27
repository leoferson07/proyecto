const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
   const User = sequelize.define("User", {
     id: {
       type: DataTypes.INTEGER,
       primaryKey: true,
       allowNull: false,
       autoIncrement: true
     },
     nombre: {
       type: DataTypes.STRING,
       allowNull: false
     },
     contraseña: {
       type: DataTypes.STRING,
       allowNull: false
     },
     rol:{
      type: DataTypes.STRING,
      allowNull:false
     },
   }, {
     timestamps: false,
     freezeTableName: true
    });
   return User
 };

