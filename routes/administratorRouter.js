var express = require('express');
var router = express.Router();
const administrators = require('../controladores/administrator');
const jwt = require('jsonwebtoken');



  router.post("/",  async (req, res)=>{
    try {
        const {id, nombre, email, password, role} = req.body;
        const newAdmin = await administrators.crear({
            id, nombre, email, password, role
        });
       res.status(200).send(newAdmin);
    } catch (error) {
        res.status(404).send(error)
    }
  });

  router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const admin = await administrators.findOne({ email: email });

        if (!admin) {
            return res.status(401).send('Email o contraseña incorrectos');
        }
        const token = jwt.sign({ id: admin.id, role: admin.role }, process.env.SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.get('/', async (req, res) => {
  try {
    const result = await administrators.mostrar();
    res.render('administrators', { administrators: result });
  } catch (error) {
    res.status(500).send(error.message);
  }
});





  module.exports = router;