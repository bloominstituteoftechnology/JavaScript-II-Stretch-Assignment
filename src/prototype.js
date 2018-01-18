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

class GameObject {
  constructor({ createdAt, dimensions }) {
    this.createdAt = createdAt
    this.dimensions = dimensions
  }

  destroy() {
    return 'Game object was removed from the game.'
  }
}

// NPC needs to inherit destroy() from GameObject
// I think by extending GameObject, that's all we need to do?
// Or do we need to have this.createdAt and this.dimensions properties as well?
class NPC extends GameObject {
  constructor({ createdAt, dimensions, name, hp }) {
    super({ createdAt, dimensions })

    this.name = name
    this.hp = hp
  }

  takeDamage() {
    return `${this.name} took damage.`
  }
}

class Humanoid extends NPC {
  constructor({ createdAt, dimensions, hp, name, faction, weapons, language }) {
    super({ createdAt, dimensions, hp, name })
    this.faction = faction
    this.weapons = weapons
    this.language = language
  }

  greet() {
    return `${this.name} offers a greeting in ${this.language}.`
  }
}

module.exports = {
  GameObject,
  NPC,
  Humanoid,
};
