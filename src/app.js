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
  "http://localhost:5174",  // Para desarrollo
  "isesgestion2024-git-main-lidiagimenezs-projects.vercel.app",  // Para producción
];

// Configuración de CORS
const corsOptions = {
  origin: (origin, callback) => {
    // Permitir solicitudes sin "origin" (por ejemplo, Postman)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Origen no permitido por CORS"));
    }
  },
  credentials: true,  // Permitir cookies y encabezados de autorización
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));

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
