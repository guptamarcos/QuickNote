const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
   title: {
    type: String,
    required: true,
    minlength: [5,"Title must be at least 5 characters"],
    maxlength: [50,"Username cannot exceed 50 characters"]
   },
   content: {
    type: String,
    required: true,
   },
   tags: {
    type: [String],
    default: [],
   },
   isPinned:{
      type: Boolean,
      default: false,
   }
},{timestamps: true});

const Card = mongoose.model("Card",cardSchema);

module.exports = Card;