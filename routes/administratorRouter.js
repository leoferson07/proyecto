var express = require('express');
var router = express.Router();
const administrators = require('../controladores/administrator')

router.get('/', async (req, res) => {
    try {
      const result = await administrators.mostrar();
      //res.render('accounts', { accounts: result });
      res.send(result);
    } catch (error) {
      res.status(500).send(error.message);
    }
  });

  router.post("/",  async (req, res)=>{
    try {
        const {id, nombre, email, password, role} = req.body;
        const newAdmin = await administrators.crear({
            id, id, nombre, email, password, role
        });
       res.status(200).send(newAdmin);
    } catch (error) {
        res.status(404).send(error)
    }
  });

  module.exports = router;