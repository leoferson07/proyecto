const {administrator} = require('../db');
const bcrypt = require('bcryptjs');



class Administrator {
  async mostrar () {
    try {
      const administrators = await administrator.findAll();
      return administrators;
    } catch (error) {
      throw error;
    }
  };

  async crear(admin) {
    try {
        // Encripta la contraseña antes de guardar el administrador
        const hashedPassword = await bcrypt.hash(admin.password, 10);
        admin.password = hashedPassword;

        const newAdmin = await administrator.create(admin);
        return newAdmin;
    } catch (error) {
        throw error;
    }
   }

   async findOne(query) {
    try {
        const admin = await administrator.findOne({ where: query });
        return admin;
    } catch (error) {
        throw error;
    }
   }

  async editar(id, newAdmin) {
    try {
      const admin = await administrator.findByPk(id);
      if (admin) {
        const adminActualizado = await admin.update(newAdmin);
        return adminActualizado;
      } else {
        throw new Error('cuenta no encontrada');
      }
    } catch (error) {
      throw error;
    }
  };

  async eliminar(id) {
    try {
      const admin = await administrator.findByPk(id);
      if (admin) {
        await admin.destroy();
        return { message: 'administrador eliminado' };
      } else {
        throw new Error('no existe este administrador');
      }
    } catch (error) {
      throw error;
    }
  };
}
module.exports = new Administrator();