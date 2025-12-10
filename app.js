require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const {
  connectDB,
} = require("./src/infrastructure/repositories/database/mongo/config.js");
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./src/presentation/swagger.config.ts');

const app = express();

// Connect to Database
connectDB();
 
// Middlewares
app.use(morgan('dev')); // Logging [cite: 1122]
app.use(express.json()); // Body Parser [cite: 1129]
 
// TODO: Cargar Rutas (lo haremos en Clase 2)
const productRoutes = require('./src/presentation/routes/product.routes.js');
app.use('/api/v1/products', productRoutes);
 
// Healthcheck Endpoint (para probar)
app.get('/api/v1/healthcheck', (req, res) => {
   res.status(200).json({ status: 'ok', timestamp: new Date() });
});

// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
console.log(`Swagger UI disponible en http://localhost:${PORT}/api-docs`);
