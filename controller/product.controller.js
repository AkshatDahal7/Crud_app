import productSchema from '../model/productModel.js'; // Ensure the .js extension is included

export const getAllProduct = async (req, res) => {
    try {
        const products = await productSchema.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: "Thiis is the  error " });
    }
};

export const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await productSchema.findById(id);
        if (product) {
            res.status(200).json(product);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createProduct = async (req, res) => {
    try {
        const product = await productSchema.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await productSchema.findByIdAndUpdate(id, req.body, { new: true });
        if (!product) {
            return res.status(404).json({ message: 'Product not found!' });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await productSchema.findByIdAndDelete(id);
        if (!product) {
            res.status(404).json({ message: 'Product not found to delete!' });
        } else {
            res.status(200).json({ message: 'Product deleted successfully' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
