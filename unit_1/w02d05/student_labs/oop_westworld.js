console.log("westworld");
const host = {
  name: "Roget",
  occupation: "creator of Roget's Thesaurus"
};
host.saySpecs = () => {
  console.log(
    "My name is " + host.name + ". My occupation is " + host.occupation + ". "
  );
};
host.saySpecs();

class BasicHost {
  constructor(name, occupation) {
    this.name = name;
    this.occupation = occupation;
  }
  saySpecs() {
    console.log(
      "My name is " +
        this.name +
        " . My occupation is " +
        this.occupation +
        ". "
    );
  }
}

var host1 = new BasicHost("Roget", "creator of Roget's Thesaurus");
console.log(host1);

var host2 = new BasicHost("Ella", "homemaker");
console.log(host2);

var host3 = new BasicHost("Natalia", "GA student");

host1.saySpecs();
host2.saySpecs();
host3.saySpecs();

const names = [
  "Laila",
  "Jack",
  "Harley",
  "Hertha",
  "Darren",
  "Jolene",
  "Loura",
  "Lona",
  "Davida",
  "Reena",
  "Leland",
  "Ta",
  "Jen",
  "Linn",
  "Roslyn",
  "Margorie",
  "Rafaela",
  "Romona",
  "Shanel",
  "Stan"
];

const occupations = [
  "Clerical assistant",
  "Leaflet distributor",
  "Landowner",
  "Special constable",
  "Anaesthetist",
  "Park-keeper",
  "Butler",
  "Choreographer",
  "Blacksmith",
  "Chef",
  "Legal secretary",
  "Song writer",
  "Librarian",
  "Landscape gardener"
];

const hostArray = [];

// I need to get a random index from both arrays
// and push the values associated with that index
// to hostArray

for (i = 0; i <= 100; i++) {
  let randNameIndex = Math.floor(Math.random() * names.length);
  let randomName = names[randNameIndex];
  let randOccIndex = Math.floor(Math.random() * occupations.length);
  let randomOcc = occupations[randOccIndex];
  hostArray.push(new BasicHost(randomName, randomOcc));
}
console.log(hostArray);

hostArray[55].saySpecs();

class Pet {
  constructor(owner, name) {
    this.owner = owner;
    this.name = name;
  }
  walk() {
    console.log("walka walka");
  }
}
const pet1 = new Pet("Pam", "Barky");
console.log(pet1);
pet1.walk();

class Dog extends Pet {
  constructor(owner, name, price) {
    super(owner, name, price);
    this.owner = owner;
    this.name = name;
    this.price = price;
  }
  bark() {
    console.log("bark");
  }
  chaseTail() {
    console.log("oh boy oh boy oh boy");
  }
  getPrice() {
    return this.price;
  }
  setName(dogName) {
    this.name = dogName;
  }
}

const pet2 = new Dog("Mom", "Yoshka", 50);
console.log(pet2);
pet2.bark();
pet2.chaseTail();
console.log(pet2.getPrice());

class Cat extends Pet {
  constructor(owner, name, price) {
    super(owner, name, price);
    this.owner = owner;
    this.name = name;
    this.price = 10;
  }
  purr() {
    console.log("purrrrrrrrrrr");
  }
  clean() {
    console.log("cleaning");
  }
  getPrice() {
    return this.price;
  }
  walk() {
    console.log("strut strut");
  }
  setOwner(firstName) {
    this.owner = firstName;
  }
}

const pet3 = new Cat("Boo", "Meowy");
console.log(pet3);
pet3.purr();
pet3.clean();
pet3.getPrice();
pet3.walk();
pet2.setName("Woofy");
console.log(pet2);
pet3.setOwner("Marianna");
console.log(pet3);
