// create 5 burgers (at least 3 should be beef)
db.burger.insert({
  meat: "beef",
  cheese: true,
  toppings: ["ketchup", "mustard", "guacamole"]
});
db.burger.insert({
  meat: "beef",
  cheese: false,
  toppings: ["mustard", "guacamole", "Worstershire sauce"]
});
db.burger.insert({
  meat: "beef",
  chesse: true,
  toppings: ["guacamole", "Worstershire sauce", "french fries"]
});
db.burger.insert({
  meat: "chicken",
  cheese: false,
  toppings: ["Worstershire sauce", "french fries", "hot fudge"]
});
db.burger.insert({
  meat: "turkey",
  cheese: true,
  toppings: ["french fries", "hot fudge", "mayonnaise"]
});
// find all the burgers
db.burger.find();
// show just the meat of each burger
db.burger.distinct("meat");
// show just the toppings of each burger
db.burger.distinct("toppings");
// show everything but the cheese
db.burger.find({}, { cheese: false, _id: false });
// find all the burgers with beef
db.burger.find({ meat: "beef" });
// find all the burgers that are not beef
db.burger.find({ meat: { $ne: "beef" } });
// find the first burger with cheese
db.burger.findOne({ cheese: true });
// find one and update the first burger with cheese to have a property of 'double cheese'
db.burger.findOneAndUpdate({ cheese: true }, { $set: { doublecheese: true } });
// find the burger you updated to have double cheese
db.burger.findOneAndUpdate({ cheese: true }, { $set: { doublecheese: true } }); // I kind of did that already
// find and update all the beef burgers to be 'veggie'
db.burger.updateMany({ meat: "beef" }, { $set: { meat: "veggie" } });
// delete one of your veggie burgers
db.burger.findOneAndDelete({ meat: "veggie" });
// WRONG - dELETES ALL : db.burger.remove({meat: 'veggie'})

// drop the collection
db.burger.drop();
//Expected Output
//true
true
// drop the database
db.dropDatabase();
//Expected Output
// {
//   "dropped": "burgers",
//   "ok": 1
// }
{ "dropped" : "burgers", "ok" : 1 }
//
// Bonus
//recreate your burgers database and your burger collection
//copy paste your insert burgers from above to reseed your database

//
// Change the name of the key cheese to 'pumpkinSpice'

// find all the burgers with ketchup (or another topping you used at least once)

// find all the burgers with pickles (or a topping you used more than once) and remove the pickles

// add a topping of 'eggs' to all the beef burgers
//note since this db is 'reset' there should be no veggie burgers, all beef burgers should still be intact

//Add a price to each burger, start with $5.00 for each burger
