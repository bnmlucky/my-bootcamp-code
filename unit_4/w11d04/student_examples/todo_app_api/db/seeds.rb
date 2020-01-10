# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# user = User.create({name: "Schmitty"});
User.create([
    {
        name: "Neff"
    }, 
    {
        name: "Jacc"
    }, 
    {
        name: "Snoop"
    }
])

Todo.create([
    {
        title: "Accentuate the Positive", 
        completed: false,
        user_id: 1
    }, 
    {
        title: "Eliminate the Negative",
        completed: false,
        user_id: 1
    },
    {
        title: "Latch on to the Affirmative",
        completed: false,
        user_id: 2
    }, 
    {
        title: "Don't mess with Mister In-Between",
        completed: false,
        user_id: 3
    }
])