const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  availability: [{ type: Date }],
});

module.exports = mongoose.model('Product', productSchema);
