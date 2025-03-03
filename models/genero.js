'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Genero extends Model {
    static associate(models) {
      // Un Género puede tener muchos Libros
      Genero.hasMany(models.Libro, { foreignKey: 'generoId' });
    }
  }
  Genero.init({
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Genero',
    tableName: 'Generos', // Nombre de la tabla en la base de datos
  });
  return Genero;
};