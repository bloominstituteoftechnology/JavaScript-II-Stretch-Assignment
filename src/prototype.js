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

// ####################### GameObject #######################
function GameObject(g) {
  this.createdAt = g.createdAt;
  this.dimensions = g.dimensions;
}
GameObject.prototype.destroy = function (item) {  // parameter ??
  return ('Game object was removed from the game.');
};
// ####################### NPC #######################

function NPC(n) {
  GameObject.call(this, n);
  this.hp = n.hp;
  this.name = n.name;
}
NPC.prototype = Object.create(GameObject.prototype);

NPC.prototype.takeDamage = function (td) { // parameter ??
  return (`${this.name} took damage.`);
};
// ####################### HUMANOID #######################
function Humanoid(h) {
  NPC.call(this, h);
  this.faction = h.faction;
  this.weapons = h.weapons;
  this.language = h.language;
}

Humanoid.prototype = Object.create(NPC.prototype);

Humanoid.prototype.greet = function (g) { // parameter ??
  return (`${this.name} offers a greeting in ${this.language}.`);
};


module.exports = {
  GameObject,
  NPC,
  Humanoid,
};
