const db = require("../infra/connection");

exports.hashPassword = function (loginCpf) {
  return db.query(`SELECT adm_senha FROM adm WHERE adm_cpf = '${loginCpf}'`);
};

exports.postLogin = function (loginCpf) {
  return db.query(
    `SELECT adm_cpf, adm_name FROM adm WHERE adm_cpf = '${loginCpf}'`
  );
};
