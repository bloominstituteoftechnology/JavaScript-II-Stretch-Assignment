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

function GameObject(properties) {
  this.createdAt = properties.createdAt;
  this.dimensions = properties.dimensions;
}
GameObject.prototype.destroy = function _() {
  return (`${this.name} was removed from the game.`);
};
function NPC(stats) {
  GameObject.call(this, stats);
  this.hp = stats.hp;
  this.name = stats.name;
}
function Humanoid(characteristics) {
  this.faction = characteristics.faction;
  this.weapons = characteristics.weapons;
  this.language = characteristics.language;
}
NPC.prototype = Object.create(GameObject.prototype);
NPC.prototype.takeDamage = function _() {
  return (`${this.name} took damage!`);
};
Humanoid.prototype = Object.create(NPC.prototype);
Humanoid.prototype.greet = function _() {
  return (`${this.name} offers a greeting in ${this.language}`);
};
const catSmokey = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 3,
    width: 2,
    height: 4,
  },

  hp: 9000,
  name: 'Smokey',
  faction: 'Catopia',
  weapon: ['claws', 'tail whip', 'lightning punches'],
  language: 'Catanese',
});
catSmokey.destroy();

// NPC.prototype = Object.create(GameObject.prototype);
// Humanoid.prototype = Object.create(NPC.prototype);
// Humanoid.prototype.catSmokey;
// console.log(`${this.name} offers a greeting in ${this.language}`);
// console.log(`${this.name} took damage!`);
// console.log(`${this.name} was removed from the game.`);
/* eslint-disable no-undef */

module.exports = {
  GameObject,
  NPC,
  Humanoid,
};
