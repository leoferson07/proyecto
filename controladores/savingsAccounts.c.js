const {Saving} = require('../db')
// let cuentasAhorro = [
//     {
//         id: 1,
//         nombreDelTitular: 'Juan Pérez', 
//           documentoIdentidad: '12345678',  
//           numeroCuenta: '000123456789',
//           tipoCuenta: 'ahorro',
//           saldoInicial: "1000.00 USD"      
//     },
// ];

class cuentasAhorros{
  async mostrar() {
    try {
      const cuentas = await Saving.findAll();
      return cuentas;
 } catch (error) {
      throw error;
    }
  };
  
  async ingresar(cuenta) {
    try {
        const newAccount = await Saving.create(cuenta);
        return newAccount;
    } catch (error) {
        throw error;
      }
    };
    
    async editar(id, newAccounts) {
      try {
        const cuenta = await Saving.findByPk(id);
        if (cuenta) {
          const cuentaActualizada = await cuenta.update(newAccounts);
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
        const cuenta = await Saving.findByPk(id);
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

module.exports = new cuentasAhorros();