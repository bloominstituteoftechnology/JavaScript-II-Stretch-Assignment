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
function GameObject(options) { // constructs a class
  this.createdAt = options.createdAt;
  this.dimensions = options.dimensions;
}
// creates a destroy method on GameObject prototype (do first)
GameObject.prototype.destroy = function a() {
  return 'Game object was removed from the game.';
};
// const childClass = new className(someObject);
// const player = new GameObject({ // GameObject instance
//   createdAt: new Date(),
//   dimensions: {
//     length: 3,
//     width: 2,
//     height: 2,
//   },
// });
// player.destroy(); // 'Game object was removed from the game.'
//
//
function NPC(options) { // constructs a class
  // super() -> sets this context to options
  GameObject.call(this, options);
  //
  this.hp = options.hp;
  this.name = options.name;
}
// links NPC & GameObject prototypes (do first)
// inherits destroy() from GameObject's prototype
NPC.prototype = Object.create(GameObject.prototype);
// creates takeDamage method on NPC prototype (do second)
NPC.prototype.takeDamage = function b() {
  return `${this.name} took damage.`;
};
//
//
function Humanoid(options) { // constructs a class
  // super() is equivalent to .call here
  // passes all parent (NPC) props to child class (Humanoid)
  NPC.call(this, options);
  //
  this.faction = options.faction;
  this.weapons = options.weapons;
  this.language = options.language;
}
// links Humaniod & NPC prototypes (do first)
// inherits destroy() & takesDamage from (GameObject through) NPC
Humanoid.prototype = Object.create(NPC.prototype);
// creates a greet method on Humanoid prototype (do second)
Humanoid.prototype.greet = function c() {
  return `${this.name} offers a greeting in ${this.language}.`;
};
/* eslint-disable no-undef */

module.exports = {
  GameObject,
  NPC,
  Humanoid,
};
