const express = require("express");
const router = express.Router();
const coletasService = require("../service/coletasService");

router.get("/coletas", async function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");

  let coletas = await coletasService.getColetas();
  res.json(coletas);
});

router.post("/addColeta", async function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");

  let idAssociado = req.body.idAssociado;
  let data = req.body.data;
  let coletaKg = req.body.coletaKg;

  let newColeta = await coletasService.postColeta(idAssociado, data, coletaKg);
  res.send(newColeta);
});

// router.put("/modifyAssociado", async function (req, res) {
//   res.setHeader("Access-Control-Allow-Origin", "*");

//   let id = req.body.id;
//   let name = req.body.name;
//   let email = req.body.email;
//   let phone = req.body.phone;
//   let status = req.body.status;

//   let resultado = await coletasService.putAssociado(
//     id,
//     name,
//     email,
//     phone,
//     status
//   );
//   res.send(resultado);
// });

module.exports = router;
