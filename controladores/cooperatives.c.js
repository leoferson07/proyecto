const { cooperative, Miembros } = require('../db');
// let grupos = [
//   {
//     "nombreCooperativa": "Cooperativa A",
//     "miembros": [
//       {
//         "nombre": "leonardo Torres",
//         "cargo": "Presidente",
//         "edad": 40
//       },
//       {
//         "nombre": "María Perez",
//         "cargo": "Tesorera",
//         "edad": 35
//       }
//     ]
//   },
//   {
//     "nombreCooperativa": "Cooperativa B",
//     "miembros": [
//       {
//         "nombre": "Pedro García",
//         "cargo": "Presidente",
//         "edad": 45
//       },
//       {
//         "nombre": "Ana López",
//         "cargo": "Secretaria",
//         "edad": 38
//       }
//     ]
//   }
// ];

class gruposC{
  async ingresar(nuevosGrupos) {
    if (!Array.isArray(nuevosGrupos) || nuevosGrupos.length === 0) {
      throw new Error("Debe enviar un array de cooperativas");
    }

    const resultado = [];

    for (const grupo of nuevosGrupos) {
      const nuevaCooperativa = await cooperative.create({ nombre: grupo.nombreCooperativa });
      for (const miembro of grupo.miembros) {
        await Miembros.create({ ...miembro, cooperativaId: nuevaCooperativa.id });
      }
      resultado.push(nuevaCooperativa);
    }

    return resultado;
  }


    
  async mostrar() {
    try {
      const cooperativas = await cooperative.findAll({
        include: Miembros
      });
      return cooperativas;
    } catch (error) {
      throw error;
    }
  }

  async eliminar(nombreCooperativa) {
    try {
      const cooperativa = await cooperative.findOne({ where: { nombre: nombreCooperativa } });
      if (!cooperativa) {
        throw new Error("Cooperativa no encontrada");
      }

      await Miembros.destroy({ where: { cooperativaId: cooperativa.id } });
      await cooperative.destroy({ where: { id: cooperativa.id } });

      return { message: "Cooperativa y sus miembros eliminados correctamente" };
    } catch (error) {
      throw error;
    }
  }
 };

module.exports = new gruposC();