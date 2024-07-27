var express = require('express');
var router = express.Router();
const State = require('../controladores/userState.c');
const roleMiddleware = require('../middlewares/roleMiddleware')

router.get('/', roleMiddleware(['presidente']), async (req, res) => {
  try {
    const estados = await State.mostrar();
    res.send(estados);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

router.post("/", roleMiddleware(['presidente']), async (req, res) => {
  try {
    const { id, nombre, cuentasPrestamo, cuentasAhorro } = req.body;
    const newState = await State.crear({
      id, nombre, cuentasPrestamo, cuentasAhorro
    });

    res.status(200).send(newState);
  } catch (error) {
    res.status(404).send(error);
  }
});


// router.get('/', async (req, res) => {
//   try {
//     const estados = await State.mostrar();
//     res.send(estados);
//   } catch (error) {
//     res.status(500).send({ error: error.message });
//   }
// });

// router.post("/", async (req, res)=>{
//   try {
//       const {id, nombre, cuentasPrestamo, cuentasAhorro} = req.body;
//       const newState = await State.crear({
//           id, nombre, cuentasPrestamo, cuentasAhorro
//       })

//        res.status(200).send(newState);
//   } catch (error) {
//       res.status(404).send(error)
//   }
// });

module.exports = router;
