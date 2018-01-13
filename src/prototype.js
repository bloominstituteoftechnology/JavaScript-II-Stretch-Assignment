/*
  Object oriented design is commonly used in video games.  For this part of the assignment
  you will be implementing several classes with their correct inheritance hierarchy.

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

// ===== myCODE  ======

function GameObject(attrs) {
    this.createdAt = attrs.createdAt;
    this.dimensions = attrs.dimensions;
}
  GameObject.prototype.destroy = function() { // prototype method -> returns the string 'Game object was removed from the game.'
    return 'Game object was removed from the game.';
  };

function NPC(attrs) {
    this.hp = attrs.hp;
    this.name = attrs.name;
};
  NPC.prototype = Object.create(GameObject.prototype);
  // 
  NPC.prototype.takeDamage = function() { // prototype method -> returns the string '<object name> took damage.'
     return '${this.name} took damage.';                                     // should inherit destroy() from GameObject's prototype
  };

function Humanoid(attrs) {
    this.faction = attrs.faction;
    this.weapons = attrs.weapons;
    this.name = attrs.language;
};
  Humanoid.prototype.greet = function() {  // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    GameObject.call(this,GameObject(attrs));  // should inherit destroy() from GameObject through NPC
                                          // should inherit takeDamage() from NPC

// Animal.prototype = Object.create(Animal.prototype);
// const mittens

//Example:

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

module.exports = {
  GameObject,
  NPC,
  Humanoid,
};
