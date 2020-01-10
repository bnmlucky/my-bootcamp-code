const milkyWay = {
    type: 'barred spiral',
    age: 13600000000,
    containsEarth: false
}
console.log(milkyWay.containsEarth);
milkyWay.containsEarth = true;
console.log(milkyWay.containsEarth);
milkyWay['number of stars'] = 100000000000;
console.log(milkyWay);

const solarSystem = [
	{ name: 'Mercury', ringSystem: false, moons: [] },
	{ name: 'Venus', ringSystem: false, moons: [] },
	{ name: 'Earth', ringSystem: false, moons: ['The Moon'] },
	{ name: 'Mars', ringSystem: false, moons: ['Phobos', 'Deimos'] },
	{ name: 'Jupiter', ringSystem: true, moons: ['Europa', 'Ganymede', 'Io', 'Callisto'] },
	{ name: 'Saturn', ringSystem: true, moons: ['Titan', 'Enceladus', 'Rhea', 'Mimas'] },
	{ name: 'Uranus', ringSystem: true, moons: ['Miranda', 'Titania', 'Ariel', 'Umbriel'] },
	{ name: 'Neptune', ringSystem: true, moons: ['Triton', 'Nereid'] }
];

console.log(solarSystem[0].ringSystem);

console.log(solarSystem[4].moons);
console.log(solarSystem[7].moons[1]);
solarSystem[1].moons = 'Endor';
console.log(solarSystem[1].moons);
solarSystem.push({name: 'Pluto', ringSystem: true, moons: ['Charon']});
console.log(solarSystem[8]);
solarSystem[2].diameter = '7,917.5 miles';
solarSystem[0].ringSystem = true;
solarSystem[6].moons[3] = 'Oberon';
for (let i = 0; i < solarSystem.length; i++) {
    if (solarSystem[i].ringSystem === true) {
        console.log(solarSystem[i]);
    }
}