/*
  Object oriented design is commonly used in video games.  For this part of the assignment
  you will be implementing several classes with their correct inheritance heirarchy.

  In this file you will be creating three classes:
    createdAt
    dimensions
    destroy() // prototype method -> returns the string 'Game object was removed from the game.' */

/* GameObject */

class GameObject {
  constructor(gameTraits) {
    this.createdAt = gameTraits.createdAt;
    this.dimensions = gameTraits.dimensions;
  }
  destroy() {
    this.message = 'Game object was removed from the game.';
    return this.message;
  }
}

  /* NPC */

class NPC extends GameObject {
  constructor(npcTraits) {
    super(npcTraits);
    this.hp = npcTraits.hp;
    this.name = npcTraits.name;
  }
  takeDamage() {
    return `${this.name} took damage.`;
  }
}

  /* Humanoid */

class Humanoid extends NPC {
  constructor(humanTraits) {
    super(humanTraits);
    this.faction = humanTraits.faction;
    this.weapons = humanTraits.weapons;
    this.language = humanTraits.language;
  }
  greet() {
    return `${this.name} offers a greeting in ${this.language}.`;
  }
}

// function GameObject(gameTraits) {
//   this.createdAt = gameTraits.createdAt;
//   this.dimensions = gameTraits.dimensions;
// }

// GameObject.prototype.destroy = function destroy() {
//   return 'Game object was removed from the game.';
// };

//   /* NPC */

// function NPC(npcTraits) {
//   GameObject.call(this, npcTraits);
//   this.hp = npcTraits.hp;
//   this.name = npcTraits.name;
// }

// NPC.prototype = Object.create(GameObject.prototype);
// NPC.prototype.takeDamage = function takeDamage() {
//   return `${this.name} took damage.`;
// };

//   /* Humanoid */

// function Humanoid(humanTraits) {
//   NPC.call(this, humanTraits);
//   this.faction = humanTraits.faction;
//   this.weapons = humanTraits.weapons;
//   this.language = humanTraits.language;
// }

// Humanoid.prototype = Object.create(NPC.prototype);
// Humanoid.prototype.greet = function greet() {
//   return `${this.name} offers a greeting in ${this.language}.`;
// };

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
