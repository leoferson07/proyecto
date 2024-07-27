const {userState} = require('../db');

// let estadosDeCuentas = [
//     {
//         id: 1,
//         nombre: "leonardo Torres", 
//         cuentasPrestamo: "2000$",
//         cuentasAhorro: "4000$",
//     }, 
// ];

class State{
    
    async crear (state){
        try {
            const newState = await userState.create(state);
            return newState;
        } catch (error) {
            throw error;
        }
    }
    async mostrar() {
        try {
          const estadosDeCuentas = await userState.findAll();
          return estadosDeCuentas;
        } catch (error) {
          throw error;
        }
      }
}

module.exports = new State();