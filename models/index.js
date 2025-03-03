const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Importa los modelos
const AutorModel = require('./autor');
const GeneroModel = require('./genero');
const LibroModel = require('./libro');

// Inicializa los modelos
const Autor = AutorModel(sequelize, DataTypes);
const Genero = GeneroModel(sequelize, DataTypes);
const Libro = LibroModel(sequelize, DataTypes);

// Crea un objeto de modelos
const models = {
  Autor,
  Genero,
  Libro
};

// Establece las asociaciones
Object.keys(models).forEach(modelName => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

// Exporta modelos y sequelize
module.exports = {
  Autor,
  Genero, 
  Libro,
  sequelize
};