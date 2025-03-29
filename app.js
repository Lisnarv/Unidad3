require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Configuración de bodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configuración de EJS
app.set('view engine', 'ejs');

// Importo rutas
const authRoutes = require('./routes/auth');
const crudRoutes = require('./routes/crud');

app.use('/auth', authRoutes);
app.use('/crud', crudRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
