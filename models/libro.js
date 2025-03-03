'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Libro extends Model {
    static associate(models) {
      // Un Libro pertenece a un Autor
      Libro.belongsTo(models.Autor, { foreignKey: 'autorId', as: 'autor' });
      
      // Un Libro pertenece a un Genero
      Libro.belongsTo(models.Genero, { foreignKey: 'generoId', as: 'genero' });
    }
  }

  Libro.init({
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    precio: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    autorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    generoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Libro',
    tableName: 'libros',  // Cambiar si el nombre de la tabla es diferente
  });

  return Libro;
};
