const {Account} = require('../db')
// let cuentaPrestamo = [
//     {
//         id: 1,
//         numeroCuenta: "123456789",
//         nombreBanco: "Banco Venezuela",
//         montoPrestamo: 50000,  
//         duracionPrestamoMeses: 60,  
//         nombrePrestatario: "leonardo Torres",
        
//     }
// ];

 class Accounts{
  async mostrar() {
    try {
      const cuentas = await Account.findAll();
      return cuentas;
 } catch (error) {
      throw error;
    }
  };
   

    async crear(cuentas) {
      try {
          const newAccount = await Account.create(cuentas);
          return newAccount;
      } catch (error) {
          throw error;
        }
      };

      async editar(id, nuevaAccounts) {
        try {
          const cuenta = await Account.findByPk(id);
          if (cuenta) {
            const cuentaActualizada = await cuenta.update(nuevaAccounts);
            return cuentaActualizada;
          } else {
            throw new Error('cuenta no encontrada');
          }
        } catch (error) {
          throw error;
        }
      };

      async eliminar(id) {
        try {
          const cuenta = await Account.findByPk(id);
          if (cuenta) {
            await cuenta.destroy();
            return { message: 'cuenta eliminada' };
          } else {
            throw new Error('cuenta no encontrada');
          }
        } catch (error) {
          throw error;
        }
      };
  };
 
 module.exports = new Accounts();