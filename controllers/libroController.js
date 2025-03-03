const LibroService = require('../services/libroService');

class LibroController {
  // Crear un nuevo libro
  static async crearLibro(req, res) {
    const { titulo, precio, stock, autorId, generoId } = req.body;
    try {
      const libro = await LibroService.crearLibro(titulo, precio, stock, autorId, generoId);
      res.status(201).json(libro);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Obtener todos los libros
  static async obtenerLibros(req, res) {
    try {
      const libros = await LibroService.obtenerLibros();
      res.status(200).json(libros);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Obtener un libro por ID
  static async obtenerLibroPorId(req, res) {
    const { id } = req.params;
    try {
      const libro = await LibroService.obtenerLibroPorId(id);
      res.status(200).json(libro);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  // Actualizar un libro
  static async actualizarLibro(req, res) {
    const { id } = req.params;
    const { titulo, precio, stock, autorId, generoId } = req.body;
    try {
      const libro = await LibroService.actualizarLibro(id, titulo, precio, stock, autorId, generoId);
      res.status(200).json(libro);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Eliminar un libro
  static async eliminarLibro(req, res) {
    const { id } = req.params;
    try {
      const resultado = await LibroService.eliminarLibro(id);
      res.status(200).json(resultado);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = LibroController;