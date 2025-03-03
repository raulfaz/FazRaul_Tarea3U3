'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Autor extends Model {
    static associate(models) {
      // Un Autor puede tener muchos Libros
      Autor.hasMany(models.Libro, { foreignKey: 'autorId' });
    }
  }

  // Inicialización del modelo
  Autor.init({
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nacionalidad: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Autor', // Nombre del modelo
    tableName: 'autors', // Nombre de la tabla en la base de datos (asegúrate que esté correctamente escrito)
  });

  return Autor;
};
