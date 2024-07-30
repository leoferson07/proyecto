const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(403).send('Token no proporcionado');
  }
  jwt.verify(token, process.env.SECRET, (err, decoded) => {
    if (err) {
      return res.status(500).send('Error de autenticación del token');
    }
    req.userId = decoded.id;
    req.userRole = decoded.role;
    next();
  });
};

const authorizeAdmin = (req, res, next) => {
    if (req.userRole !== 'administrador') {
      return res.status(403).send('Acceso denegado');
    }
    next();
  };

  module.exports = {
    authenticate,
    authorizeAdmin
};