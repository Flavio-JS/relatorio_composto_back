const associadosData = require("../data/associadosData");

exports.postAssociado = function (name, email, phone) {
  try {
    associadosData.postAssociado(name, email, phone);
    return "cadastro realizado com sucesso";
  } catch (error) {
    return error;
  }
};
