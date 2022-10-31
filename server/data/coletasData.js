const db = require("../infra/connection");

exports.getColetas = function () {
  return db.query(`SELECT * FROM coletas`);
};

exports.postColeta = function (idAssociado, data, coletaKg) {
  return db.none(`INSERT INTO coletas (associado_id, coleta_data, coleta_kg)
    VALUES (${idAssociado}, '${data}', ${coletaKg})`);
};
