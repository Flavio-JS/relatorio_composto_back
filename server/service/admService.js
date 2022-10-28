const admData = require("../data/admData");
const bcrypt = require("bcrypt");

exports.postLogin = async function (loginCpf) {
  let adm = await admData.postLogin(loginCpf);

  if (adm[0] === undefined || adm[0] === null) {
    adm = [
      {
        adm_cpf: "",
        name: "",
        loged: "notFound",
      },
    ];
  } else {
    adm = [
      {
        adm_cpf: adm[0].adm_cpf,
        name: adm[0].adm_name,
        loged: true,
      },
    ];
  }

  return adm;
};

exports.hashPassword = async function (loginCpf) {
  return await admData.hashPassword(loginCpf);
};
