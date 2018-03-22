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


function GameObject(attributes) {
  this.createdAt = attributes.createdAt;
  this.dimensions = attributes.dimensions;
}

GameObject.prototype.destroy = function() {
  return 'Game object was removed from the game.';
};

function NPC(npcAttributes) {
  GameObject.call(this, npcAttributes);
  this.hp = npcAttributes.hp;
  this.name = npcAttributes.name;
}

NPC.prototype = Object.create(GameObject.prototype); //bridges NPC and Gameobject, always put BEFORE methods

NPC.prototype.takeDamage = function() {
  return `${this.name} took damage.`;
};

function Humanoid(humanAttributes) {
  NPC.call(this, humanAttributes);
  this.faction = humanAttributes.faction;
  this.weapons = humanAttributes.weapons;
  this.language = humanAttributes.language;
}

Humanoid.prototype = Object.create(NPC.prototype); //bridges Humanoid and NPC, always put BEFORE methods

Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}.`;
};


//creates a bob object, has NPC and GameObject attributes
const bob = new Humanoid ({
  createdAt: 'now',
  dimensions: 'manlet',
  hp: 5,
  name: 'Bob The Great',
  faction: 'Lambda',
  weapons: 'stick',
  language: 'bing bong',
});

/* eslint-disable no-undef */

module.exports = {
  GameObject,
  NPC,
  Humanoid,
};
