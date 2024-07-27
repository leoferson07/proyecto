const {User} = require('../db')

 class usuarios {
    async todos() {
        try {
          const usuarios = await User.findAll();
          return usuarios;
     } catch (error) {
          throw error;
        }
      }

    async crear(usuario) {
    try {
        const newUser = await User.create(usuario);
        return newUser;
    } catch (error) {
        throw error;
      }
    }

    async editar(id, nuevosDatos) {
        try {
          const usuario = await User.findByPk(id);
          if (usuario) {
            const usuarioActualizado = await usuario.update(nuevosDatos);
            return usuarioActualizado;
          } else {
            throw new Error('Usuario no encontrado');
          }
        } catch (error) {
          throw error;
        }
      }
      
      async eliminar(id) {
        try {
          const usuario = await User.findByPk(id);
          if (usuario) {
            await usuario.destroy();
            return { message: 'Usuario eliminado' };
          } else {
            throw new Error('Usuario no encontrado');
          }
        } catch (error) {
          throw error;
        }
      }
   
 };


 module.exports = new usuarios();