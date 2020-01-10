// DEPENDENCIES ==================================
const mongoose = require('mongoose');

// MONGOOSE CONFIGURATION ==================================
const mongoURI = 'mongodb://localhost:27017/hotel';
const db = mongoose.connection;

mongoose.connect(mongoURI, () => console.log('Mongo running at', mongoURI));

db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', mongoURI));
db.on('disconnected', () => console.log('mongo disconnected'));

// MODELS =======================================
const Hotel = require('./models/hotelSchema.js');
const hotelSeed = require('./models/seed.js');

// SEED =========================================
Hotel.create(hotelSeed, (err, data) => {
  if (err) { 
    console.log('Seeding error: ', err.message); 
  }
  console.log("Seeded hotels OK: ", hotelSeed.length);
});

// if seeded too many times
Hotel.collection.drop();

// check hotel count
Hotel.count({}, (err, data) => {
  if (err) {
    console.log(err.message);
  }
  console.log(`There are ${data} hotels in this database`);
});

// CRUD OPERATIONS ================================
Hotel.create(
  {
    name: 'The Tipton Hotel',
    location: 'Boston',
    rating: 5,
    vacancies: false,
    tags: ['no running in the lobby'],
    rooms: [{ roomNumber: 613, size: "King", price: 100, booked: true }]
  },
  (err, data) => {
    if (err) { 
      console.log('Create Tipton error: ', err); 
    } else {
      console.log('Created Tipton OK: ', data);
    }
  }
);

// -- Find all hotels
Hotel.find({}, (err, data) => {
  if (err) { 
    console.log('Find all error: ', err); 
  } else {
    console.log('Find all OK: ', data);
  }
});

// -- Find all hotels, display only the name
Hotel.find({}, 'name', (err, data) => {
  if (err) { 
    console.log('Find name error: ', err); 
  } else {
    console.log('Find name OK: ', data);
  }
});

// -- Find our hotel
Hotel.find({ name: 'The Tipton Hotel' }, (err, data) => {
  if (err) { 
    console.log('Find Tipton error: ', err); 
  } else {
    console.log('Find Tipton OK: ', data);
  }
});

// -- Find hotels with vacancies, exclude ratings
Hotel.find({ vacancies: true }, { rating: 0 }, (err, data) => {
  if (err) { 
    console.log('Find vacancies error: ', err); 
  } else {
    console.log('Find vacancies OK: ', data);
  }
});

// - Delete Hotelicopter
Hotel.deleteOne({ name: 'Hotelicopter' }, (err, data) => {
  if (err) { 
    console.log('Delete Heli error: ', err); 
  } else {
    console.log('Delete Heli OK: ', data);
  }
});

// -- Hilbert's Hotel
Hotel.remove({ name: "Hilbert's Hotel" }, (err, data) => {
  if (err) { 
    console.log('Remove Hilbert error: ', err); 
  } else {
    console.log('Remove Hilbert OK: ', data);
  }
});

// -- Delete hotel in Colorado Rockies
Hotel.findOneAndRemove({ location: "Colorado Rockies" }, (err, data) => {
  if (err) { 
    console.log('Remove Rockies error: ', err); 
  } else {
    console.log('Remove Rockies OK: ', data);
  }
});

// -- Update The Great Northern's rating to 5
Hotel.update({ name: 'The Great Northern' },
  { $set: { rating: 5 } },
  (err, data) => {
    if (err) { 
      console.log('Update Northern error: ', err); 
    } else {
      console.log('Update Northern OK: ', data);
    }
  }
);

Hotel.find({ name: 'The Great Northern' }, (err, data) => {
  if (err) { 
    console.log('Find Northern error: ', err); 
  } else {
    console.log('Find Northern OK: ', data);
  }
});

// -- Update Motel Bambi's vacancies to false
Hotel.findOneAndUpdate({ name: 'Motel Bambi' },
  { $set: { vacancies: false } },
  (err, data) => {
    if (err) { 
      console.log('Update Bambi error: ', err); 
    } else {
      console.log('Update Bambi OK: ', data);
    }
  }
);
