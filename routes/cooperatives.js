var express = require('express');
var router = express.Router()
var gruposC = require('../controladores/cooperatives.c');

router.post('/', async (req, res) => {
  const nuevosGrupos = req.body;

  try {
    const grupos = await gruposC.ingresar(nuevosGrupos);
    res.status(201).send({ message: "Grupos de cooperativas agregados correctamente", grupos });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const cooperativas = await gruposC.mostrar();
    res.send(cooperativas);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

router.delete('/:nombreCooperativa', async (req, res) => {
  const { nombreCooperativa } = req.params;

  try {
    const resultado = await gruposC.eliminar(nombreCooperativa);
    res.send(resultado);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});
  


module.exports = router;