const express = require("express");
const router = express.Router();
const admService = require("../service/admService");
const bcrypt = require("bcrypt");

router.post("/admLogin", async function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  let loginCpf = await req.body.cpf;
  let loginPassword = await admService.hashPassword(loginCpf); // senha hash no banco
  let adm;

  if (loginPassword.length > 0) {
    if (
      await bcrypt.compare(req.body.loginPassword, loginPassword[0].adm_senha)
    ) {
      adm = await admService.postLogin(loginCpf);
    } else {
      adm = [
        {
          adm_cpf: "",
          name: "",
          loged: "wrongPassword",
        },
      ];
    }

    res.json(adm);
  } else if (loginPassword.length === 0) {
    adm = [
      {
        adm_cpf: "",
        name: "",
        loged: "notRegistered",
      },
    ];
    res.json(adm);
  }
});

router.post("/addAdm", async function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");

  let admCpf = await req.body.admCpf;
  let admName = await req.body.admName;
  let hashPassword = await bcrypt.hash(req.body.admSenha, 8);

  try {
    await admService.addAdm(admCpf, admName, hashPassword);
    res.send("Adm cadastrado com sucesso !");
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
