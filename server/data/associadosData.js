const db = require("../infra/connection");

exports.postAssociado = function (name, email, phone) {
  if (phone === "" || phone === undefined) {
    return db.none(`
    INSERT INTO associados (associado_name, associado_email, associado_phone, associado_status, associado_data_cadastro)
    VALUES ( '${name}', '${email}', '(00)000000000', 'ATIVO', NOW())
    `);
  } else {
    return db.none(`
    INSERT INTO associados (associado_name, associado_email, associado_phone, associado_status, associado_data_cadastro)
    VALUES ( '${name}', '${email}', '${phone}', 'ATIVO', NOW())
    `);
  }
};
