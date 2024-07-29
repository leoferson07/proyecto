let express = require('express');
let router = express.Router();
const creditos = require('../controladores/credit.C');

router.get('/', async (req, res) => {
    try {
      const result = await creditos.mostrar();
      res.render('creditos', { creditos: result });
     //res.send(result);
    } catch (error) {
      res.status(500).send(error.message);
    }
  });

  router.post("/",  async (req, res)=>{
    try {
        const {id, montoDeCredito, nombreDelUsuario, fechaDePago} = req.body;
        const newCredit = await creditos.crear({
            id, montoDeCredito, nombreDelUsuario, fechaDePago
        });
       res.status(200).send(newCredit);
    } catch (error) {
        res.status(404).send(error)
    }
  });

  

  module.exports = router;