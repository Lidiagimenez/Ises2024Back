const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const routerApi = require("./routes/index");
const morgan = require("morgan");
// Cargar variables de entorno
dotenv.config();

const app = express();

// Configuración de CORS (permitir cualquier origen)
const corsOptions = {
  origin: "https://ises2024back.onrender.com",  // El origen específico que quieres a permitir
  credentials: true,  // Permitir solicitudes con credenciales
};

app.use(cors(corsOptions));// Esto permite todas las solicitudes de cualquier origen

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
