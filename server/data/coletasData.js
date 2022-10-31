const db = require("../infra/connection");

exports.getColetas = function () {
  return db.query(`SELECT * FROM coletas`);
};
