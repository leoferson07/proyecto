const{ creditos } = require('../db');

class HistorialDeCreditos {
  async mostrar () {
    try {
      const credit = await creditos.findAll();
      return credit;
    } catch (error) {
      throw error;
    }
  };

  async crear(prop) {
    try {
      const newCredit = await creditos.create(prop);
      return newCredit;
    } catch (error) {
      throw error;
    }
  };

  async eliminar(id) {
    try {
      const credit = await creditos.findByPk(id);
      if (credit) {
        await credit.destroy();
        return { message: 'credito no otorgado' };
      } else {
        throw new Error('la solicitud al credito no fue aprovada');
      }
    } catch (error) {
      throw error;
    }
  };
}

 module.exports = new HistorialDeCreditos();