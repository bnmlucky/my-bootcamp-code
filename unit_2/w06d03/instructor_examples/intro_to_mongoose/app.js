const mongoose = require('mongoose');
const Tweet = require('./tweet.js');

const dbName = 'tweets';
const mongoURI = `mongodb://localhost:27017/${dbName}`;
const db = mongoose.connection;

const manyTweets = [
  {
    title: 'Deep Thoughts',
    body: 'Friends, I have been navel-gazing',
    author: 'Karolin'
  },
  {
    title: 'Sage Advice',
    body: 'Friends, I am vegan and so should you',
    author: 'Karolin',
    likes: 20
  },
  {
    title: 'Whole Reality',
    body:
      'I shall deny friendship to anyone who does not exclusively shop at Whole Foods',
    author: 'Karolin',
    likes: 40
  },
  {
    title: 'Organic',
    body:
      'Friends, I have spent $2300 to be one of the first people to own an organic smartphone',
    author: 'Karolin',
    likes: 162
  },
  {
    title: 'Confusion',
    body:
      'Friends, why do you just respond with the word `dislike`? Surely you mean to click the like button?',
    author: 'Karolin',
    likes: -100
  },
  {
    title: 'Vespa',
    body:
      'Friends, my Vespa has been upgraded to run on old french fry oil. Its top speed is now 11 mph',
    author: 'Karolin',
    likes: 2
  },
  {
    title: 'Licensed',
    body:
      'Friends, I am now officially licensed to teach yogalates. Like this to get 10% off a private lesson',
    author: 'Karolin',
    likes: 3
  },
  {
    title: 'Water',
    body:
      'Friends, I have been collecting rain water so I can indulge in locally sourced raw water. Ask me how',
    author: 'Karolin'
  }
];

// const myFirstTweet = {
//   title: 'Deep Thoughts',
//   body: 'Friends, I have been navel-gazing',
//   author: 'Karolin'
// };

// Tweet.create(myFirstTweet, (error, tweet) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(tweet);
//   }
//   db.close();
// });

// Tweet.insertMany(manyTweets, (error, tweets) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(tweets);
//   }
//   db.close();
// });

// Tweet.find({ title: 'Water' }, (err, tweets) => {
//   console.log(tweets);
//   db.close();
// });

// Tweet.findOneAndRemove({ title: 'Deep Thoughts' }, (error, tweet) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('This is the deleted tweet: ', tweet);
//   }
//   db.close();
// });

Tweet.findOne({ title: 'Vespa' }, (err, tweet) => {
  if (err) {
    console.log(err);
  } else {
    console.log(tweet);
  }
  db.close();
});

mongoose.connect(mongoURI, { useNewUrlParser: true }, () => {
  console.log('the connection with mongo is established');
});
