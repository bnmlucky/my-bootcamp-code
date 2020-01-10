// create 5 burgers (at least 3 should be beef)
db.burger.insert({
	meat: 'beef',
	cheese: true,
	toppings: ['lettuce', 'onions', 'pickles']
});

db.burger.insert({
	meat: 'beef',
	cheese: true,
	toppings: ['onions', 'ketchup']
});

db.burger.insert({
	meat: 'beef',
	cheese: true,
	toppings: ['avocado']
});

db.burger.insert({
	meat: 'veggie',
	cheese: true,
	toppings: ['fried egg']
});

db.burger.insert({
	meat: 'black bean',
	cheese: false,
	toppings: ['corn']
});

// find all the burgers
db.burger.find();

// show just the meat of each burger
db.burger.find({}, { meat: true });

// show just the toppings of each burger
db.burger.find({}, { toppings: true });

// show everything but the cheese
db.burger.find({}, { cheese: false });

// find all the burgers with beef
db.burger.find({ meat: 'beef' });

// find all the burgers that are not beef
db.burger.find({ meat: { $ne: 'beef' } });

// find the first burger with cheese
db.burger.findOne({ cheese: true });

// find one and update the first burger with cheese to have a property of 'double cheese'
db.burger.findOne({ cheese: true });

// find the burger you updated to have double cheese
db.burger.findOneAndUpdate(
	{ cheese: { $eq: true } },
	{ $set: { cheese: 'double cheese' } }
);

// find and update all the beef burgers to be 'veggie'
db.burger.updateMany({ meat: { $eq: 'beef' } }, { $set: { meat: 'veggie' } });

// delete one of your veggie burgers
// WRONG - dELETES ALL : db.burger.remove({meat: 'veggie'})
db.burger.deleteOne({ meat: 'veggie' });

// drop the collection
db.burger.drop;

// drop the database
db.dropDatabase();

// Change the name of the key cheese to 'pumpkinSpice'
db.burger.updateMany({}, { $rename: { cheese: 'pumpkinSpice' } });

// find all the burgers with ketchup (or another topping you used at least once)
db.burger.find({ toppings: { $all: ['ketchup'] } });

// find all the burgers with pickles (or a topping you used more than once) and remove the pickles
db.burger.updateMany(
	{ toppings: { $all: ['ketchup'] } },
	{ $pull: { toppings: { $all: ['ketchup'] } } }
);

// add a topping of 'eggs' to all the beef burgers
db.burger.updateMany({ meat: 'beef' }, { $push: { toppings: 'eggs' } });

//Add a price to each burger, start with $5.00 for each burger
db.burger.updateMany({}, { $set: { price: '$5.00' } });