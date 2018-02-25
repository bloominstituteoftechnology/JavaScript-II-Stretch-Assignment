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

// function GameObject(attr) {
//   this.createdAt = attr.createdAt;
//   this.dimensions = attr.dimensions;
// }

// GameObject.prototype.destroy = function () {
//   return 'Game object was removed from the game.';
// };

// function NPC(npcAttrs) {
//   GameObject.call(this, npcAttrs);
//   this.hp = npcAttrs.hp;
//   this.name = npcAttrs.name;
// }

// NPC.prototype = Object.create(GameObject.prototype);

// NPC.prototype.takeDamage = function () {
//   return `${this.name} took damage.`;
// };

// function Humanoid(humanAttrs) {
//   NPC.call(this, humanAttrs);
//   this.faction = humanAttrs.faction;
//   this.weapons = humanAttrs.weapons;
//   this.language = humanAttrs.language;
// }

// Humanoid.prototype = Object.create(NPC.prototype);

// Humanoid.prototype.greet = function () {
//   return `${this.name} offers a greeting in ${this.language}.`;
// };

class GameObject {
  constructor(attrs) {
    this.createdAt = attrs.createdAt;
    this.dimensions = attrs.dimensions;
  }
  //This method was causing 'this expected' linter error.
  // destroy() {
  //   return 'Game object was removed from the game.';
  // }
}

GameObject.prototype.destroy = function () {
  return 'Game object was removed from the game.';
};

class NPC extends GameObject {
  constructor(npcAttrs) {
    super(npcAttrs);
    this.hp = npcAttrs.hp;
    this.name = npcAttrs.name;
  }

  takeDamage() {
    return `${this.name} took damage.`;
  }
}

class Humanoid extends NPC {
  constructor(humanoidAttrs) {
    super(humanoidAttrs);
    this.faction = humanoidAttrs.faction;
    this.weapons = humanoidAttrs.weapons;
    this.language = humanoidAttrs.language;
  }

  greet() {
    return `${this.name} offers a greeting in ${this.language}.`;
  }
}

/* eslint-disable no-undef */

module.exports = {
  GameObject,
  NPC,
  Humanoid,
};
