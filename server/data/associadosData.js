const db = require("../infra/connection");

exports.getAssociados = function () {
  return db.query(`SELECT associado_id, associado_name,associado_email,associado_phone,associado_status
  FROM associados`);
};

exports.postAssociado = function (name, email, phone) {
  if (phone === "" || phone === undefined) {
    return db.none(`INSERT INTO associados (associado_name, associado_email, associado_phone, associado_status, associado_data_cadastro)
    VALUES ( '${name}', '${email}', '(00)000000000', 'ATIVO', NOW())`);
  } else {
    return db.none(`INSERT INTO associados (associado_name, associado_email, associado_phone, associado_status, associado_data_cadastro)
    VALUES ( '${name}', '${email}', '${phone}', 'ATIVO', NOW())`);
  }
};

exports.putAssociadoName = function (id, name) {
  return db.query(
    `UPDATE associados SET associado_name = '${name}', associado_data_modificacao = NOW() WHERE associado_id = ${id}`
  );
};

exports.putAssociadoEmail = function (id, email) {
  return db.query(
    `UPDATE associados SET associado_email = '${email}', associado_data_modificacao = NOW() WHERE associado_id = ${id}`
  );
};

exports.putAssociadoPhone = function (id, phone) {
  return db.query(
    `UPDATE associados SET associado_phone = '${phone}', associado_data_modificacao = NOW() WHERE associado_id = ${id}`
  );
};

exports.putAssociadoStatus = function (id, status) {
  return db.query(
    `UPDATE associados SET associado_status = '${status}', associado_data_modificacao = NOW() WHERE associado_id = ${id}`
  );
};
