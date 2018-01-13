function Fruit(attrs) {
  this.type = attrs.type;
  this.name = attrs.name;
  this.isRipe = attrs.isRipe;
  this.calories = attrs.calories;
}
// constructor

Fruit.prototype.calculateCalories = function() {
  console.log(`Calories in a ${this.name} are ${this.calories * 200}`);
};

function Banana(banAttrs) {
  Fruit.call(this, banAttrs);
  this.doMonkeysEat = banAttrs.doMonkeysEat;
}

function Kiwi(kiwiAttrs) {
  Fruit.call(this, kiwiAttrs);
  this.isFuzzy = kiwiAttrs.isFuzzy;
}

Banana.prototype = Object.create(Fruit.prototype);
Banana.prototype.ripen = function() {
  if(this.isRipe === false) {
    this.isRipe = true;
  }
};

Kiwi.prototype = Object.create(Fruit.prototype);

const myBanana = new Banana({
  type: 'tree',
  name: 'Banana',
  isRipe: false,
  calories: 1,
  doMonkeysEat: true,
});

const myKiwi = new Kiwi({
  type: 'tree',
  name: 'Kiwi',
  isRipe: false,
  calories: 3,
  isFuzzy: true,
});

console.log(myKiwi);
myKiwi.calculateCalories();
myBanana.calculateCalories();
myKiwi.ripen();