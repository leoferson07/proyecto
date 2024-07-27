var express = require('express');
var router = express.Router();
const cuentasAhorro = require("../controladores/savingsAccounts.c");


router.get('/', async (req, res) => {
    try {
      const result = await cuentasAhorro.mostrar();
      res.send(result);
    } catch (error) {
      res.status(500).send(error.message);
    }
  });
  router.post("/", async (req, res)=>{
    try {
        const {id, nombreDelTitular, documentoIdentidad, numeroCuenta, tipoCuenta, saldoInicial} = req.body;
        const newAccount = await cuentasAhorro.ingresar({
            id, nombreDelTitular, documentoIdentidad, numeroCuenta, tipoCuenta, saldoInicial
        });
        res.status(200).send(newAccount);
    } catch (error) {
        res.status(404).send(error)
    }
  });

  router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const newAccounts = req.body;
  
    try {
      const result = await cuentasAhorro.editar(id, newAccounts);
      res.send(result);
    } catch (error) {
      res.status(404).send(error.message);
    }
  });

  router.delete('/:id', async (req, res) => {
    const id = req.params.id;
  
    try {
      await cuentasAhorro.eliminar(id);
      res.send({ message: 'cuenta eliminada' });
    } catch (error) {
      res.status(404).send(error.message);
    }
  });
  

module.exports = router;