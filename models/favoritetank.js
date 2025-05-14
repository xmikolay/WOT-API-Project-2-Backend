const mongoose = require('mongoose');

const FavoriteTankSchema = new mongoose.Schema({
  tank_id: { type: Number, required: true, unique: true },
  name: String,
  nation: String,
  type: String,
  tier: Number,
  is_premium: Boolean,
  description: String,
  added_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('FavoriteTank', FavoriteTankSchema);