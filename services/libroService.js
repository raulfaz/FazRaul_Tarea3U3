const { Libro } = require('../models');

class LibroService {
  // Crear un nuevo libro
  static async crearLibro(titulo, precio, stock, autorId, generoId) {
    try {
      const libro = await Libro.create({ titulo, precio, stock, autorId, generoId });
      return libro;
    } catch (error) {
      throw new Error('Error al crear el libro');
    }
  }

  // Obtener todos los libros
  static async obtenerLibros() {
    try {
      const libros = await Libro.findAll();
      return libros;
    } catch (error) {
      throw new Error('Error al obtener los libros');
    }
  }

  // Obtener un libro por ID
  static async obtenerLibroPorId(id) {
    try {
      const libro = await Libro.findByPk(id);
      if (!libro) {
        throw new Error('Libro no encontrado');
      }
      return libro;
    } catch (error) {
      throw new Error('Error al obtener el libro');
    }
  }

  // Actualizar un libro
  static async actualizarLibro(id, titulo, precio, stock, autorId, generoId) {
    try {
      const libro = await Libro.findByPk(id);
      if (!libro) {
        throw new Error('Libro no encontrado');
      }
      libro.titulo = titulo;
      libro.precio = precio;
      libro.stock = stock;
      libro.autorId = autorId;
      libro.generoId = generoId;
      await libro.save();
      return libro;
    } catch (error) {
      throw new Error('Error al actualizar el libro');
    }
  }

  // Eliminar un libro
  static async eliminarLibro(id) {
    try {
      const libro = await Libro.findByPk(id);
      if (!libro) {
        throw new Error('Libro no encontrado');
      }
      await libro.destroy();
      return { message: 'Libro eliminado correctamente' };
    } catch (error) {
      throw new Error('Error al eliminar el libro');
    }
  }
}

module.exports = LibroService;