/*
  Object oriented design is commonly used in video games.  For this part of the assignment
  you will be implementing several classes with their correct inheritance heirarchy.

  In this file you will be creating three classes:
  GameObject
    createdAt
    dimensions
    destroy() // prototype method -> returns the string 'Game object was removed from the game.' */
function GameObject(stats) {
  this.createdAt = new Date();
  this.dimensions = stats.dimensions;
}
GameObject.prototype.destroy = function () {
  return 'Game object was removed from the game.';
}; // in this notation format, the function must be created outside of the object
// strings not incorporating methods from the Object must use '', not ``
  /* NPC
    hp
    name
    takeDamage() // prototype method -> returns the string '<object name> took damage.'
    // should inherit destroy() from GameObject's prototype */
function NPC(stats) {
  GameObject.call(this, stats);
  this.hp = stats.hp;
  this.name = stats.name;
}
NPC.prototype = Object.create(GameObject.prototype);
// ^^ you must complete the prototype chain here in order for it to work see p2 of your notes, the
// example item doesn't stop at the first page
NPC.prototype.takeDamage = function () {
  return `${this.name} took damage.`; // this line can use `` because it's calling a method
};
/*  Humanoid
    faction
    weapons
    language
    greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    // should inherit destroy() from GameObject through NPC
    // should inherit takeDamage() from NPC */
function Humanoid(stats) {
  NPC.call(this, stats);
  this.faction = stats.faction;
  this.weapons = stats.weapons;
  this.language = stats.language;
}
Humanoid.prototype = Object.create(NPC.prototype); // don't forget to finish the prototype chain...
Humanoid.prototype.greet = function () {
  return `${this.name} offers a greeting in ${this.language}.`;
};
  /* Inheritance chain: Humanoid -> NPC -> GameObject
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

module.exports = {
  GameObject,
  NPC,
  Humanoid,
};
