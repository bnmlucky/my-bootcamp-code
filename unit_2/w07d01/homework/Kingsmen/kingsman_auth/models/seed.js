const mongoose = require('mongoose');
const UserModel = require('./userModel');

const seedUsers = [
  {
    username: 'merlin',
    password: 'countryroads',
    messages: ['teamwork is paramount', 'take me home, country road']
  },
  {
    username: 'lancelot',
    password: 'roxy'
  },
  {
    username: 'eggsy',
    password: 'galahadjr',
    messages: ['who\'s in the mood for saving the world?']
  },
  {
    username: 'galahad',
    password: 'harry',
    messages: ['manners maketh man', 'we\'re the new knights']
  }
];

// Seeding function
const seedDB = () => {
  // Declare db name, URI, and instantiate connection
  const dbName = 'kingsmenAuth'
  const dbURI = `mongodb://localhost:27017/${dbName}`;
  const dbConnection = mongoose.connection;

  dbConnection.on('error', (err) => console.log('DB Connection Error: ', err));
  dbConnection.on('connected', () => console.log('DB Connected to: ', dbURI));
  dbConnection.on('disconnected', () => console.log('DB Disconnected'));
  
  mongoose.connect(
    dbURI,
    { useNewUrlParser: true },
    () => console.log(`${dbName} db running on ${dbURI}`)
  );
  
  UserModel.collection.drop()

  UserModel.create(seedUsers, (err, newUsers) => {
    if (err) {
      console.log('Seeding error: ', err);
    } else {
      console.log('Seeding OK: ', newUsers);
    }
    dbConnection.close();
  });
}

seedDB();

module.exports = seedUsers;
