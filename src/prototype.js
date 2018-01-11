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

/* eslint-disable no-undef */

function GameObject(gameOptions) {
  this.createdAt = gameOptions.createdAt;
  this.dimensions = gameOptions.dimensions;
}

GameObject.prototype.destroy = function () {
  return 'Game object was removed from the game.';
};

function NPC(NPCoptions) {
  this.hp = NPCoptions.hp;
  this.name = NPCoptions.name;
  GameObject.call(this, NPCoptions);
}
NPC.prototype = Object.create(GameObject.prototype);

NPC.prototype.takeDamage = function () {
  return `${this.name} took damage.`;
};

function Humanoid(humanoidOptions) {
  this.factions = humanoidOptions.factions;
  this.weapons = humanoidOptions.weapons;
  this.language = humanoidOptions.language;
  NPC.call(this, humanoidOptions);
}

Humanoid.prototype = Object.create(NPC.prototype);

Humanoid.prototype.greet = function () {
  return `${this.name} offers a greeting in ${this.language}`;
};

const newHumanoid = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 4,
    width: 2,
    height: 6,
  },
  hp: 1,
  name: 'Tony the Tiger',
  faction: 'Kellogs',
  weapons: [
    'spaghetti code',
    'plaintext passwords',
  ],
  language: 'JavaScript',
});

newHumanoid.greet();
console.log(newHumanoid.dimensions);
// prototype method -> returns the string '<object name> took damage.'
// should inherit destroy() from GameObject's prototype
module.exports = {
  GameObject,
  NPC,
  Humanoid,
};
