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
function GameObject(object) {
  this.createdAt = object.createdAt;
  this.dimensions = object.dimensions;
  // this.destroy = function() {
  //   return 'Game object was removed from the game.';
  // };
}

GameObject.prototype.destroy = () => {
  return 'Game object was removed from the game.';
};

function NPC(stats) {
  GameObject.call(this, stats);
  this.hp = stats.hp;
  this.name = stats.name;
  // this.takeDamage = function() {
  //   return `${this.name} took damage!`
  // }
}

NPC.prototype = Object.create(GameObject.prototype);

NPC.prototype.takeDamage = () => {
  return `${this.name} took damage!`;
};

function Humanoid(bgInfo) {
  NPC.call(this, bgInfo);
  this.faction = bgInfo.faction;
  this.weapons = bgInfo.weapons;
  this.language = bgInfo.language;
  this.greet = () => {
    return `${this.name} offers a greeting in ${this.language}.`;
  };
}

Humanoid.prototype = Object.create(NPC.prototype);

const mcgee = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 1,
    height: 2,
  },
  hp: 50,
  name: 'McGeeicus Maximus',
  faction: 'Wolf Riders',
  weapons: [
    'Wolf\'s Head Gladius',
  ],
  language: 'Canine',
});

const aysah = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 1,
    height: 2,
  },
  hp: 40,
  name: 'Aysah the Beautiful',
  faction: 'Pretty Heart Princesses',
  weapons: [
    'Cupid\'s Bow',
  ],
  language: 'Angelic',
});

const lilbear = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 1,
    height: 2,
  },
  hp: 10,
  name: 'Henry Bear',
  faction: 'Omnivores',
  weapons: [
    'Clawed Cestus',
  ],
  language: 'Ursine',
});

// console.log(mcgee.greet());
// console.log(mcgee.takeDamage());
// console.log(mcgee.destroy());

// console.log(aysah.greet());
// console.log(aysah.takeDamage());
// console.log(aysah.destroy());

// console.log(lilbear.greet());
// console.log(lilbear.takeDamage());
// console.log(lilbear.destroy());

/* eslint-disable no-undef */

module.exports = {
  GameObject,
  NPC,
  Humanoid,
};
