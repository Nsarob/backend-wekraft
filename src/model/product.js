import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    productImage: {
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    },
    productName: {
        type: String,
        required: true
    },
    quantityAvailable: {
        type: Number,
        required: true
    },
    serialNumber: {
        type: String,
        required: true
    },
    productPrice: {
        type: Number,
        required: true
    },
    orderingHistory:[{
        quantity:Number,
        totalPrice:Number,
        orderingTime:Date
    }],
    postAt: {
        type: Date,
        default: Date.now
    }
});

const Product = mongoose.model("Product", productSchema);

export default Product;
