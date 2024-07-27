const express = require('express');
const router = express.Router();
const loginController = require("../controladores/auth");

//vista
router.get('/', (req, res) => {
    res.render('login');
  });

router.post('/', async (req, res)=>{

    const { nombre, contraseña } = req.body;

    if (!nombre || !contraseña) {
      return res.status(400).json({ message: 'Nombre y contraseña son requeridos' });
    }
    try {
        await loginController.inicioSeccion(req, res, nombre, contraseña);
      } catch (error) {
        res.status(500).json({ message: 'Error del servidor' });
      }
});

module.exports = router;