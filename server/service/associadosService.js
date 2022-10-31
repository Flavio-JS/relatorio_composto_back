const associadosData = require("../data/associadosData");

exports.postAssociado = function (name, email, phone) {
  try {
    associadosData.postAssociado(name, email, phone);
    return "cadastro realizado com sucesso";
  } catch (error) {
    return error;
  }
};

exports.putAssociado = function (id, name, email, phone, status) {
  try {
    if (name !== undefined && name !== "") {
      associadosData.putAssociadoName(id, name);
    }
    if (email !== undefined && email !== "") {
      associadosData.putAssociadoEmail(id, email);
    }
    if (phone !== undefined && phone !== "") {
      associadosData.putAssociadoPhone(id, phone);
    }
    if (status !== undefined && status !== "") {
      associadosData.putAssociadoStatus(id, status);
    }
    return "Modificação realizada com sucesso";
  } catch (error) {
    return error;
  }
};
