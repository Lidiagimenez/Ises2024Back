const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');

const app = express();
const routerApi = require('./routes/index');

// Lista blanca de dominios permitidos
var whitelist = ['http://localhost:5173', 'isesgestion2024.vercel.app'];

var corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true, // Permite enviar cookies o cabeceras de autenticación
};

app.use(cors(corsOptions));
app.use(express.json());

// Rutas principales
app.get('/', (req, res) => {
    res.send('Backend con Node.js');
});

routerApi(app);

module.exports = app;
