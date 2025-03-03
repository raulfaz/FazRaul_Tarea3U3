const express = require('express');
const libroRoutes = require('./routes/libroRoutes');
const autorRoutes = require('./routes/autorRoutes');
const { sequelize } = require('./models');  // Importa sequelize desde el nuevo archivo

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Rutas
app.use('/api', libroRoutes);
app.use('/api', autorRoutes);

// Sincronización de la base de datos
sequelize.sync()
  .then(() => {
    console.log('Conexión a la base de datos establecida.');
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
  });