class GameObject {
  constructor(gameObjectOptions) {
    this.createdAt = gameObjectOptions.createdAt;
    this.dimensions = gameObjectOptions.dimensions;
  }
  destroy(gameObject) {
    const name = this.name;
    return ('Game object was removed from the game.');
  }
}

class NPC extends GameObject {
  constructor(npcOptions) {
    super(npcOptions);
    this.hp = npcOptions.npc;
    this.name = npcOptions.name;
  }
  takeDamage(npc) {
    return (`${this.name} took damage.`);
  }
}

class Humanoid extends NPC {
  constructor(humanoidOptions) {
    super(humanoidOptions);
    this.faction = humanoidOptions.faction;
    this.weapons = humanoidOptions.weapons;
    this.language = humanoidOptions.language;
  }
  greet(humanoid) {
    return (`${this.name} offers a greeting in ${this.language}.`);
  }
}

// GameObject
// function GameObject(gameObjectOptions) {
//   this.createdAt = gameObjectOptions.createdAt;
//   this.dimensions = gameObjectOptions.dimensions;
// }

// GameObject.prototype.destroy = function destroy() {
//   return ('Game object was removed from the game.');
// };

// // NPC
// function NPC(npcOptions) {
//   GameObject.call(this, npcOptions);
//   this.hp = npcOptions.hp;
//   this.name = npcOptions.name;
// }

// NPC.prototype = Object.create(GameObject.prototype);

// NPC.prototype.takeDamage = function takeDamage() {
//   return (`${this.name} took damage.`);
// };

// // Humanoid
// function Humanoid(humanoidOptions) {
//   NPC.call(this, humanoidOptions);
//   this.faction = humanoidOptions.faction;
//   this.weapons = humanoidOptions.weapons;
//   this.language = humanoidOptions.language;
// }

// Humanoid.prototype = Object.create(NPC.prototype);

// Humanoid.prototype.greet = function greet() {
//   return (`${this.name} offers a greeting in ${this.language}.`);
// };

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

module.exports = {
  GameObject,
  NPC,
  Humanoid,
};
