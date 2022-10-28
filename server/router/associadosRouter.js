const express = require("express");
const router = express.Router();
const associadosService = require("../service/associadosService");

router.post("/associado", async function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");

  let name = req.body.name;
  let email = req.body.email;
  let phone = req.body.phone;

  let newAssociado = await associadosService.postAssociado(name, email, phone);
  res.send(newAssociado);
});

module.exports = router;
