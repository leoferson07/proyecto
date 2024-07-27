var express = require('express');
var router = express.Router();
const usuarios = require('../controladores/users.c');

router.get ('/add', (req, res)=>{
  res.render('createUsers');
})
router.post("/", async (req, res)=>{
  try {
      const { id, nombre, contraseña, rol} = req.body;
      const newUsers = await usuarios.crear({
           id, nombre, contraseña, rol
      })

       res.status(200).send(newUsers);
  } catch (error) {
      res.status(404).send(error)
  }
});

router.get('/', async (req, res, next) => {
  try {
    const result = await usuarios.todos();
    res.render('users', { usuarios: result });
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put('/:id', async (req, res) => {
  const id = req.params.id;
  const nuevosDatos = req.body;

  try {
    const result = await usuarios.editar(id, nuevosDatos);
    res.send(result);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.delete('/:id', async (req, res) => {
  const id = req.params.id;

  try {
    await usuarios.eliminar(id);
    res.send({ message: 'Usuario eliminado' });
  } catch (error) {
    res.status(404).send(error.message);
  }
});



module.exports = router;
