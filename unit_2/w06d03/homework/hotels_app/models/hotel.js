//Dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const hotelSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    location: String,
    rating: { type: Number, maxvalue: 5 },
    vacancies: Boolean,
    tags: [String],
    rooms: [
      { roomNumber: Number, size: String, price: Number, booked: Boolean }
    ]
  },
  { timestamps: true }
);

const hotel = mongoose.model("hotel", hotelSchema);
module.exports = hotel;
