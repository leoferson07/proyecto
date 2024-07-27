const { User } = require('../db');
const jwt = require('jsonwebtoken')

class Login {
  async inicioSeccion(req, res, nombre, contraseña) {
    try {
       
      console.log(`Nombre: ${nombre}, Contraseña: ${contraseña}`);

      // Buscar al usuario por nombre
      const user = await User.findOne({ where: { nombre } });

      if (!user) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }

      // Comparar las contraseñas
      if (user.contraseña !== contraseña) {
        return res.status(401).json({ message: 'Contraseña incorrecta' });
      }

      // Crear el token JWT
      const token = jwt.sign(
        { id: user.id, nombre: user.nombre, rol: user.rol },
        process.env.SECRET, // Asegúrate de usar una clave secreta segura
        { expiresIn: '1h' } // El token expirará en 1 hora
      );

      return res.json({ token });
    } catch (error) {
      return res.status(500).json({ message: 'Error del servidor' });
    }
  }
}
module.exports = new Login();