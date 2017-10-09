/*
  Object oriented design is commonly used in video games.  For this part of the assignment
  you will be implementing several classes with their correct inheritance heirarchy.

  In this file you will be creating three classes:
  GameObject
    createdAt
    dimensions
    destroy() // prototype method -> returns the string 'Game object was removed from the game.'

  NPC
    hp
    name
    takeDamage() // prototype method -> returns the string '<object name> took damage.'
    // should inherit destroy() from GameObject's prototype

  Humanoid
    faction
    weapons
    language
    greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    // should inherit destroy() from GameObject through NPC
    // should inherit takeDamage() from NPC

  Inheritance chain: Humanoid -> NPC -> GameObject
  Instances of Humanoid should have all of the same properties as NPC and GameObject.
  Instances of NPC should have all of the same properties as GameObject.

  Example:

  const hamsterHuey = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    hp: 5,
    name: 'Hamster Huey',
    faction: 'Gooey Kablooie',
    weapons: [
      'bubblegum',
    ],
    language: 'Hamsterish',
  });

  hamsterHuey.greet(); // returns 'Hamster Huey offers a greeting in Hamsterish'
  hamsterHuey.takeDamage(); // returns 'Hamster Huey took damage.'
  hamsterHuey.destroy(); // returns 'Game object was removed from the game.'
*/
function isRemoved(obj) {
  if (obj !== null) {
    console.log(`<- [!]Game object {${obj.name}} failed removal.`);
    return false;
  }
  console.log('<- Game object removal successful.');
  return true;
}

function GameObject(options) {
  this.createdAt = options.createdAt;
  this.dimensions = options.dimensions;
  const thisRef = this;
}

GameObject.prototype.destroy = (obj) => {
  console.log(`Game object {${this.name}} attemping removal ->`);
  return null;
};

function NPC(options) {
  GameObject.call(this, options);
  this.name = options.name;
  this.hp = options.hp;
  this.maxHP = options.hp;
  this.isDead = this.hp < 1;
}

NPC.prototype = new GameObject(GameObject.prototype);
NPC.prototype.takeDamage = (damage) => {
  !!damage ? damage : damage = 1;

  this.hp -= damage;
  this.isDead = this.hp < 1;

  if (this.isDead) {
    console.log(`${this.name} took ${damage} damage [HP: ${this.hp}/${this.maxHP}].`);
    return `${this.name} is dead`;
  } else {
    return `${this.name} took ${damage} damage [HP: ${this.hp}/${this.maxHP}].`;
  }
};


function Humanoid(options) {
  const oldoptions = options;
  NPC.call(this, options);

  this.faction = options.faction;
  this.language = options.language;
  this.weapons = options.weapons;
}

// Humanoid.prototype = Object.create(NPC.prototype);
Humanoid.prototype = new NPC(NPC.prototype);

Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}.`;
};

let hamsterHuey = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1,
  },
  hp: 5,
  name: 'Hamster Huey',
  faction: 'Gooey Kablooie',
  weapons: [
    'bubblegum',
  ],
  language: 'Hamsterish',
});

console.log(hamsterHuey.greet()); // returns 'Hamster Huey offers a greeting in Hamsterish'
console.log(hamsterHuey.takeDamage()); // returns 'Hamster Huey took damage.'console.log(hamsterHuey.takeDamage()); // returns 'Hamster Huey took damage.'

console.log(hamsterHuey.takeDamage(5)); // returns 'Hamster Huey took damage.'console.log(hamsterHuey.takeDamage()); // returns 'Hamster Huey took damage.'

hamsterHuey.destroy();
console.log('hamsterHuey Value: ' + hamsterHuey);
isRemoved(hamsterHuey);

hamsterHuey = hamsterHuey.destroy();
console.log('hamsterHuey Value: ' + hamsterHuey);
isRemoved(hamsterHuey);

/* eslint-disable no-undef */

module.exports = {
  GameObject,
  NPC,
  Humanoid,
};