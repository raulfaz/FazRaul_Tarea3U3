const { Genero } = require('../models/genero');

class GeneroService {
  // Crear un nuevo género
  static async crearGenero(nombre) {
    try {
      const genero = await Genero.create({ nombre });
      return genero;
    } catch (error) {
      throw new Error('Error al crear el género');
    }
  }

  // Obtener todos los géneros
  static async obtenerGeneros() {
    try {
      const generos = await Genero.findAll();
      return generos;
    } catch (error) {
      throw new Error('Error al obtener los géneros');
    }
  }

  // Obtener un género por ID
  static async obtenerGeneroPorId(id) {
    try {
      const genero = await Genero.findByPk(id);
      if (!genero) {
        throw new Error('Género no encontrado');
      }
      return genero;
    } catch (error) {
      throw new Error('Error al obtener el género');
    }
  }

  // Actualizar un género
  static async actualizarGenero(id, nombre) {
    try {
      const genero = await Genero.findByPk(id);
      if (!genero) {
        throw new Error('Género no encontrado');
      }
      genero.nombre = nombre;
      await genero.save();
      return genero;
    } catch (error) {
      throw new Error('Error al actualizar el género');
    }
  }

  // Eliminar un género
  static async eliminarGenero(id) {
    try {
      const genero = await Genero.findByPk(id);
      if (!genero) {
        throw new Error('Género no encontrado');
      }
      await genero.destroy();
      return { message: 'Género eliminado correctamente' };
    } catch (error) {
      throw new Error('Error al eliminar el género');
    }
  }
}

module.exports = GeneroService;