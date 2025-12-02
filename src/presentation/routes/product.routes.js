const { Router } = require("express");
const ProductController = require("../controllers/product.controller");

// Esta es la "Inyección de Dependencias" manual
const ProductService = require("../../application/use-cases/product.service");
// const MockProductRepository = require("../../../infrastructure/repositories/product.mock.repository");
// const productRepository = new MockProductRepository();

const productMongoRepository = require("../../infrastructure/database/mongo/product.mongo.repository");
const productRepository = new productMongoRepository();

const productService = new ProductService(productRepository);
const productController = new ProductController(productService);

const router = Router();
router.get("/", productController.getAll);
router.get("/:id", productController.getById);
router.post("/", productController.create);
router.put("/:id", productController.update);
router.delete("/:id", productController.delete);

module.exports = router;
