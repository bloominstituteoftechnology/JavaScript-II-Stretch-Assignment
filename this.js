function Person(options) {
  this.name = options.name;
  this.age = options.age;
  this.occupation = options.occupation;
  this.favFood = options.favFood;
}

Person.prototype.speak = function() {
    console.log(`Sometimes ${this.name} dances in the rain, "Said" ${this.name}.`);
};

let him = new Person({name: Tom}

}


class Identity {
  constructor(I) {
    this.name = I.name,
    this.age = I.age,
    this.occupation = I.occupation,
    this.favFood = I.favFood;
  }
}


const I = {
  name: 'Chris',
  age: 27,
  occupation: 'Harbringer of things to come',
  favFood: 'Buffalo Wings',

};

const chris = new Person(I);
console.log(chris);
I.speak()


function Fruit(attrs) {
    this.type = attrs.type;
    this.name = attrs.name;
    this.isRipe = attrs.isRipe;
    this.calories = attrs.calories;
}

Fruit.prototype.shipped = function(destination) {
    console.log(`Shipping ${this.name} to ${destination}`);
};

someFruit.shipped('Arizona');

function Banana() {
    Fruit.call(this, bananaAttrs)
    this.doMonkeysLikeIt = attrs.doMonkeysLikeIt;
}
const newBananas = new Banana({
    doMonkeysLikeIt : false,
    type: "Tree",
    name : "Banana",
    isRipe : false,
    calories : 100
});