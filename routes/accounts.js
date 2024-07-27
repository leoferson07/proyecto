var express = require('express');
var router = express.Router();
const accounts = require("../controladores/accounts.c");


router.get('/', async (req, res) => {
  try {
    const result = await accounts.mostrar();
    res.render('accounts', { accounts: result });
    //res.send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
});


router.post("/",  async (req, res)=>{
  try {
      const {id, numeroCuenta,nombreBanco, montoPrestamo, duracionPrestamoMeses, nombrePrestatario} = req.body;
      const newAccount = await accounts.crear({
          id, numeroCuenta,nombreBanco, montoPrestamo, duracionPrestamoMeses, nombrePrestatario
      });
     res.status(200).send(newAccount);
  } catch (error) {
      res.status(404).send(error)
  }
});

router.put('/:id', async (req, res) => {
  const id = req.params.id;
  const nuevaAccounts = req.body;

  try {
    const result = await accounts.editar(id, nuevaAccounts);
    res.send(result);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.delete('/:id', async (req, res) => {
  const id = req.params.id;

  try {
    await accounts.eliminar(id);
    res.send({ message: 'cuenta eliminada' });
  } catch (error) {
    res.status(404).send(error.message);
  }
});




module.exports = router;