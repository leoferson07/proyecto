var express = require('express');
var router = express.Router();
var user = require('../controladores/users.c')

router.get('/', function(req, res){
  res.render("index", {titulo: "SISTEMA BANCARIO SOCIAL"})
});


module.exports = router;
