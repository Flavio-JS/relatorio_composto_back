const db = require("../infra/connection");

exports.hashPassword = function (loginCpf) {
  return db.query(`SELECT adm_senha FROM adm WHERE adm_cpf = '${loginCpf}'`);
};

exports.postLogin = function (loginCpf) {
  return db.query(
    `SELECT adm_cpf, adm_name FROM adm WHERE adm_cpf = '${loginCpf}'`
  );
};

exports.addAdm = function (admCpf, admName, hashPassword) {
  return db.none(
    `INSERT INTO adm (adm_cpf, adm_name, adm_senha, adm_data_cadastro)
    VALUES('${admCpf}', '${admName}', '${hashPassword}', NOW());`
  );
};
