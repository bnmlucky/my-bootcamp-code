//Dependencies
const mongoose = require("mongoose");
const hotel = require("./models/hotel.js");

//Config
const mongoURI = "mongodb://localhost:27017/hotel";
const db = mongoose.connection;
//Models
const hotelSeed = require("./models/seed.js");
//Connect
mongoose.connect(mongoURI, { useNewUrlParser: true }, () => {
  console.log("Mongo running at", mongoURI);
});
// Error/success
db.on("error", err => console.log(err.message + " is Mongod not running?"));
db.on("connected", () => console.log("mongo connected: ", mongoURI));
db.on("disconnected", () => console.log("mongo disconnected"));

// hotel.create(hotelSeed, (err, data) => {
//   if (err) console.log(err.message);
//   console.log("added provided hotel data");
// }); - used it and commented it out to avoid my db being populated with duplicates

// Hotel.collection.drop()

// const myFirstHotel = {
//   name: "Wilton Grand",
//   location: "Wilton, CT",
//   rating: 4,
//   vacancies: true,
//   tags: ["cool", "awesome"],
//   rooms: [
//     {
//       roomNumber: 100,
//       size: "Queen Double",
//       price: 50,
//       booked: true
//     },
//     {
//       roomNumber: 404,
//       size: "Shoebox",
//       price: 30,
//       booked: false
//     },
//     {
//       roomNumber: 500,
//       size: "King Suite",
//       price: 100,
//       booked: true
//     }
//   ]
// };
// hotel.create(myFirstHotel, (error, hotel) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(hotel);
//   }
//   db.close();
// });

// hotel.countDocuments({}, (err, data) => {
//   if (err) console.log(err.message);
//   console.log(`There are ${data} hotels in this database`);
// });

// hotel.find({}, (error, hotels) => {
//   console.log(hotels);
//   db.close;
// });

// hotel.find({}, "name -_id", (err, name) => {
//   console.log(name);
//   db.close();
// });

// hotel.find({ name: "Wilton Grand" }, (err, hotel) => {
//   console.log(hotel);
//   db.close();
// });

// hotel.find({ vacancies: true }, { rating: 0 }, (err, hotel) => {
//   console.log(hotel);
//   db.close();
// });

// hotel.findOneAndRemove({ name: "Hotelicopter" }, (err, hotel) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("This is the deleted hotel: ", hotel);
//   }
//   db.close();
// });

// hotel.findOneAndRemove({ name: "Hilbert's Hotel" }, (err, hotel) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("This is the deleted hotel: ", hotel);
//   }
//   db.close();
// });

// hotel.findOneAndRemove({ location: "Colorado Rockies" }, (err, hotel) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("This is the deleted hotel: ", hotel);
//   }
//   db.close();
// });

// hotel.findOneAndUpdate(
//   { name: "The Great Northern" },
//   { rating: 5 },
//   { new: true },
//   (err, hotel) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(hotel);
//     }
//     db.close();
//   }
// );

// hotel.findOneAndUpdate(
//   { name: "Motel Bambi" },
//   { vacancies: false },
//   { new: true },
//   (err, hotel) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(hotel);
//     }
//     db.close();
//   }
// );

hotel.findOneAndUpdate(
  { location: "White Bay, Oregon" },
  { rating: 2 },
  { new: true },
  (err, hotel) => {
    if (err) {
      console.log(err);
    } else {
      console.log(hotel);
    }
    db.close();
  }
);
