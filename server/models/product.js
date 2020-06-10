import  mongoose from 'mongoose';

const ProductSchema = mongoose.Schema({
  name: String,
  category: String,
  description: String
})

export default mongoose.model('Products', ProductSchema);

