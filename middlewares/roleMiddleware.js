const jwt = require('jsonwebtoken');

const roleMiddleware = (roles) => {
  return (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '');

    if (!token) {
      return res.status(401).json({ message: 'Acceso denegado' });
    }

    try {
      const verified = jwt.verify(token, process.env.SECRET);
      if (!roles.includes(verified.rol)) {
        return res.status(403).json({ message: 'No tienes permiso para acceder a esta ruta' });
      }
      req.user = verified;
      next();
    } catch (error) {
      return res.status(400).json({ message: 'Token no válido' });
    }
   };
 };

 module.exports = roleMiddleware;