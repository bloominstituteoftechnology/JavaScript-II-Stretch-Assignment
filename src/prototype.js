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

// #################### GAME OBJECT #################

function GameObject(attrs) {
  this.createdAt = attrs.createdAt;
  this.dimensions = attrs.dimensions;
}

GameObject.prototype.destroy = function destroy() {
  return 'Game object was removed from the game.';
};

// ##################### NPC #######################

function NPC(attrs) {
  GameObject.call(this, attrs);
  this.hp = attrs.hp;
  this.name = attrs.name;
}

NPC.prototype = Object.create(GameObject.prototype);

NPC.prototype.takeDamage = function takeDamage() {
  return `${this.name} took damage.`;
};

// ##################### HUMANOID #######################

function Humanoid(attrs) {
  NPC.call(this, attrs);
  this.faction = attrs.faction;
  this.weapons = attrs.weapons;
  this.language = attrs.language;
}

Humanoid.prototype = Object.create(NPC.prototype);

Humanoid.prototype.greet = function greet(offer) {
  return `${this.name} offers a greeting in ${this.language}.`;
};

const gameObject = new GameObject({
  createdAt: new Date(),
  dimensions: {
    length: 10,
    width: 10,
    height: 30,
  },

  hp: 500,
  name: 'Zeus',
});

const humanoid = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 10,
    width: 10,
    height: 30,
  },
  hp: 500,
  name: 'Zeus',
  faction: 'Athens',
  weapons: [
    'spear',
  ],
  language: 'Ancient Greek',
});

/* eslint-disable no-undef */

module.exports = {
  GameObject,
  NPC,
  Humanoid,
};
