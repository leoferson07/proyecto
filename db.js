require('dotenv').config();
const { Sequelize } = require('sequelize');
const {DB_USERNAME,DB_NAME,DB_PASSWORD, DB_PORT, DB_HOST} = process.env;

const usersModels = require('./models/userModels');
const accountsModels = require('./models/accountsModels');
const savingsAccounts = require('./models/savingAccountModels');
const miembrosModels = require('./models/cooperativesModels');
const cooperativeModels = require('./models/miembrosModels');
const usersStateModels = require('./models/userStateModels');
const adminitratorModels = require('./models/administratorModels');

const sequelize = new Sequelize(
   //?`postgres://${DB_USERNAME}:${DB_PASSWORD}@localhost:5432/${DB_NAME}`,{logging:false}
   DB_NAME, 
   DB_USERNAME, 
   DB_PASSWORD, 
   {
     host: DB_HOST,
     port: DB_PORT,
     dialect: 'postgres',
     logging: false
   }
);



const User = usersModels(sequelize);
const Account = accountsModels(sequelize);
const Saving = savingsAccounts(sequelize);
const Miembros = miembrosModels(sequelize);
const cooperative = cooperativeModels(sequelize);
const userState = usersStateModels(sequelize);
const administrator = adminitratorModels(sequelize);

cooperative.hasMany(Miembros, { foreignKey: 'cooperativaId' })
Miembros.belongsTo(cooperative, { foreignKey: 'cooperativaId' })


module.exports = {
    sequelize, User, Account, Saving, Miembros, cooperative, userState,
    administrator
};


