const AutorService = require('../services/autorService');


class AutorController {
  // Crear un nuevo autor
  static async crearAutor(req, res) {
    const { nombre, nacionalidad } = req.body;
    try {
      const autor = await AutorService.crearAutor(nombre, nacionalidad);
      res.status(201).json(autor);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Obtener todos los autores
  static async obtenerAutores(req, res) {
    try {
      const autores = await AutorService.obtenerAutores();
      res.status(200).json(autores);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Obtener un autor por ID
  static async obtenerAutorPorId(req, res) {
    const { id } = req.params;
    try {
      const autor = await AutorService.obtenerAutorPorId(id);
      res.status(200).json(autor);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  // Actualizar un autor
  static async actualizarAutor(req, res) {
    const { id } = req.params;
    const { nombre, nacionalidad } = req.body;
    try {
      const autor = await AutorService.actualizarAutor(id, nombre, nacionalidad);
      res.status(200).json(autor);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Eliminar un autor
  static async eliminarAutor(req, res) {
    const { id } = req.params;
    try {
      const resultado = await AutorService.eliminarAutor(id);
      res.status(200).json(resultado);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = AutorController;