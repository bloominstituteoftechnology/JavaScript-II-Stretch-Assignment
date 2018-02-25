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

// class GameObject {
//   constructor(options) {
//     this.createdAt = new Date();
//     this.dimensions = {
//       length: options.length,
//       width: options.width,
//       height: options.height,
//     };
//   }
//   destroy() {
//     return 'Game Object was removed from the game';
//   }
// }

// class NPC extends GameObject {
//   constructor(options) {
//     super(options);
//     this.hp = options.hp;
//     this.name = options.name;
//   }
//   takeDamage(damagePoints = 1) {
//     this.hp -= damagePoints;
//     if (this.hp <= 0) return this.destroy();
//     return `${this.name} took ${damagePoints} damage.`;
//   }
// }

// class Humanoid extends NPC {
//   constructor(options) {
//     super(options);
//     this.faction = options.faction;
//     this.weapons = options.weapons;
//     this.language = options.language;
//   }
//   greet() {
//     return `${this.name} offered a greeting in ${this.language};`;
//   }
// }

// const hamsterHuey = new Humanoid({
//   createdAt: new Date(),
//   dimensions: {
//     length: 2,
//     width: 1,
//     height: 1,
//   },
//   hp: 5,
//   name: 'Hamster Huey',
//   faction: 'Gooey Kablooie',
//   weapons: ['bubblegum'],
//   language: 'Hamsterish',
// });

function GameObject(options) {
  this.createdAt = new Date();
  this.dimensions = {
    length: options.dimensions.length,
    width: options.dimensions.width,
    height: options.dimensions.height,
  };
}
GameObject.prototype.destroy = function destroy() {
  return 'Game object was removed from the game.';
};

function NPC(options) {
  GameObject.call(this, options);
  this.hp = options.hp;
  this.name = options.name;
}
NPC.prototype = Object.create(GameObject.prototype);
NPC.prototype.takeDamage = function takeDamage(dmgPoints = 1) {
  this.hp -= dmgPoints;
  if (this.hp <= 0) return this.destroy();
  return `${this.name} took damage.`;
};

function Humanoid(options) {
  NPC.call(this, options);
  this.faction = options.faction;
  this.weapons = options.weapons;
  this.language = options.language;
}
Humanoid.prototype = Object.create(NPC.prototype);
Humanoid.prototype.greet = function greet() {
  return `${this.name} offers a greeting in ${this.language}.`;
};

const humanoid = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 5,
    width: 5,
    height: 15,
  },
  hp: 100,
  name: 'Foofie',
  faction: 'Lannister',
  weapons: [
    'boomerang',
  ],
  language: 'Common Tongue',
});

/* eslint-disable no-undef */

module.exports = {
  GameObject,
  NPC,
  Humanoid,
};
