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
  
  "https://isesgestion2024.vercel.app",  // Producción
  "http://localhost:3000",  // Desarrollo local
];

const corsOptions = {
  origin: function (origin, callback) {
    console.log("Origen de la solicitud:", origin);  // Verifica el valor de origin
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Origen no permitido por CORS'));
    }
  },
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
  credentials: true,
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
