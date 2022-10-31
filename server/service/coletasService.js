const coletasData = require("../data/coletasData");

exports.getColetas = async function () {
  try {
    let coletas = await coletasData.getColetas();
    return coletas;
  } catch (error) {
    return error;
  }
};

exports.postColeta = async function (idAssociado, data, coletaKg) {
  try {
    await coletasData.postColeta(idAssociado, data, coletaKg);
    return "cadastro realizado com sucesso";
  } catch (error) {
    return error;
  }
};

// exports.putAssociado = function (id, name, email, phone, status) {
//   try {
//     if (name !== undefined && name !== "") {
//       associadosData.putAssociadoName(id, name);
//     }
//     if (email !== undefined && email !== "") {
//       associadosData.putAssociadoEmail(id, email);
//     }
//     if (phone !== undefined && phone !== "") {
//       associadosData.putAssociadoPhone(id, phone);
//     }
//     if (status !== undefined && status !== "") {
//       associadosData.putAssociadoStatus(id, status);
//     }
//     return "Modificação realizada com sucesso";
//   } catch (error) {
//     return error;
//   }
// };
