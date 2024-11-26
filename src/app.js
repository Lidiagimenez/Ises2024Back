const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const routerApi = require("./routes/index");
const morgan = require("morgan");
// Cargar variables de entorno
dotenv.config();

const app = express();

// Lista de orígenes permitidos
const allowedOrigins = [
  "isesgestion2024-git-main-lidiagimenezs-projects.vercel.app",  // Para producción, 
  'http://localhost:3000', // para local
];

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.includes(origin) || !origin) { // !origen es para solicitudes sin origen 
      callback(null, true);
    } else {
      callback(new Error('Origen no permitido por CORS'));
    }
  },
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
  credentials: true, // habilita cookies o sesiones
};

app.use(cors(corsOptions)); // Usar CORS con las opciones definidas

app.use(morgan("dev"));
// Middleware
app.use(express.json());

// Rutas
app.get("/", (req, res) => {
  res.send("Backend con Node.js");
});

// Usar las rutas del archivo index.js
routerApi(app);

module.exports = app;
