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
*/
function GameObject(properties) {
  this.createdAt = properties.createdAt;
  this.dimensions = properties.dimensions;
}
GameObject.prototype.destroy = function _() {
  return 'Game object was removed from the game.';
};
function NPC(stats) {
  GameObject.call(this, stats);
  this.hp = stats.hp;
  this.name = stats.name;
}
function Humanoid(characteristics) {
  NPC.call(this, characteristics);
  this.faction = characteristics.faction;
  this.weapons = characteristics.weapons;
  this.language = characteristics.language;
}
NPC.prototype = Object.create(GameObject.prototype);
NPC.prototype.takeDamage = function _() {
  return `${this.name} took damage.`;
};

Humanoid.prototype = Object.create(NPC.prototype);
Humanoid.prototype.greet = function _() {
  return `${this.name} offers a greeting in ${this.language}.`;
};
const corgiYuki = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 3,
    width: 1.5,
    height: 1.5,
  },
  hp: 567,
  name: 'Yuki Sempai',
  faction: 'Snow Princess Caravan',
  weapons: ['Kendo Stick', 'Surprise Wand'],
  language: 'Welsh',
});

// function greet() { return greet('<object name> offers a greeting in <object language>'); }
// function takeDamage() { return takeDamage('took damage'); }
// function destroy() { return destroy('Game object was removed from the game'); }

/* eslint-disable no-undef */

module.exports = {
  GameObject,
  NPC,
  Humanoid,
};
