const express = require("express");
const router = express.Router();
const associadosService = require("../service/associadosService");

router.get("/associados", async function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");

  let associados = await associadosService.getAssociados();
  res.json(associados);
});

router.post("/associado", async function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");

  let name = req.body.name;
  let email = req.body.email;
  let phone = req.body.phone;

  let newAssociado = await associadosService.postAssociado(name, email, phone);
  res.send(newAssociado);
});

router.put("/modifyAssociado", async function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");

  let id = req.body.id;
  let name = req.body.name;
  let email = req.body.email;
  let phone = req.body.phone;
  let status = req.body.status;

  let resultado = await associadosService.putAssociado(
    id,
    name,
    email,
    phone,
    status
  );
  res.send(resultado);
});

module.exports = router;
