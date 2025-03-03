const { Autor } = require('../models');

class AutorService {
  // Crear un nuevo autor
  static async crearAutor(nombre, nacionalidad) {
    try {
      const autor = await Autor.create({ nombre, nacionalidad });
      return autor;
    } catch (error) {
      throw new Error('Error al crear el autor');
    }
  }

  // Obtener todos los autores
  static async obtenerAutores() {
    try {
      const autores = await Autor.findAll();
      return autores;
    } catch (error) {
      throw new Error('Error al obtener los autores');
    }
  }

  // Obtener un autor por ID
  static async obtenerAutorPorId(id) {
    try {
      const autor = await Autor.findByPk(id);
      if (!autor) {
        throw new Error('Autor no encontrado');
      }
      return autor;
    } catch (error) {
      throw new Error('Error al obtener el autor');
    }
  }

  // Actualizar un autor
  static async actualizarAutor(id, nombre, nacionalidad) {
    try {
      const autor = await Autor.findByPk(id);
      if (!autor) {
        throw new Error('Autor no encontrado');
      }
      autor.nombre = nombre;
      autor.nacionalidad = nacionalidad;
      await autor.save();
      return autor;
    } catch (error) {
      throw new Error('Error al actualizar el autor');
    }
  }

  // Eliminar un autor
  static async eliminarAutor(id) {
    try {
      const autor = await Autor.findByPk(id);
      if (!autor) {
        throw new Error('Autor no encontrado');
      }
      await autor.destroy();
      return { message: 'Autor eliminado correctamente' };
    } catch (error) {
      throw new Error('Error al eliminar el autor');
    }
  }
}

module.exports = AutorService;