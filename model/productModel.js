import mongoose from "mongoose";
import { Schema} from "mongoose";

const productSchema = new Schema({

    name:
    {
        type :  String,
        required : true
    },
    price:
    {
        type : Number,
        required : true
    },
    quantity:
    {
        type : Number,
        required : true
    },
},
{timestamps: true,})

export default mongoose.model('Product', productSchema);
