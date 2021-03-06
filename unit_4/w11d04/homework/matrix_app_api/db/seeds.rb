# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Character.create([

	{ name: "Neo", description: "The main protagonist" },
	{ name: "Trinity", description: "A computer programmer and a hacker who escaped from the Matrix" },
	{ name: "Morpheus", description: "Captain of the Nebuchadnezzar" },
	{ name: "Agent Smith", description: "The primary antagonist" },

])

Vehicle.create([
    {
        name: "Nebuchadnezzar",
        style: "Spaceship"
    }
])