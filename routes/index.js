import express from 'express';
import {getAllProduct,getProductById,createProduct,updateProduct,deleteProduct} from '../controller/product.controller.js'
const router = express.Router();

router.get('/',getAllProduct);
router.get('/:id',getProductById);
router.post('/',createProduct);
router.put('/:id',updateProduct);
router.delete('/:id',deleteProduct);

export default router;
