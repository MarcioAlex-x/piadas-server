const { Piada } = require("../models/piadas");

class PiadaController {
  async buscarTodos(req, res) {
    try {
      const piadas = await Piada.find();
      return res.json(piadas);
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  }

  async criarPiada(req, res) {
    const { nome, historia, autor } = req.body;

    try {
      const piada = new Piada({
        nome,
        historia,
        autor,
      });
      await piada.save(piada);
      return res.status(201).json(piada);
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        success: false,
        message: "Não foi possível salvar a sua piada!",
      });
    }
  }

  async buscarPiadaPorId(req, res) {
    const id = req.params.id;
    try {
      const piada = await Piada.findById(id);
      if (!id) {
        return res.status(404).json({
          success: false,
          message: "Piada não encontrada",
        });
      }
      return res.status(200).json(piada);
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Erro no servidor",
      });
    }
  }
}

module.exports = new PiadaController();
