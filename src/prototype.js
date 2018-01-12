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

class GameObject {
  constructor(gameOptions) {
    this.createdAt = gameOptions.createdAt;
    this.dimensions = gameOptions.dimensions;
    this.gameName = gameOptions.gameName;
  }
  destroy() {
    return 'Game object was removed from the game.';
  }
}

class NPC extends GameObject {
  constructor(npcOptions) {
    super(npcOptions);
    this.hp = npcOptions.hp;
    this.name = npcOptions.name;
  }
  takeDamage() {
    return `${this.name} took damage.`;
  }
}

class Humanoid extends NPC {
  constructor(humanOptions) {
    super(humanOptions);
    this.faction = humanOptions.faction;
    this.weapons = humanOptions.weapons;
    this.language = humanOptions.language;
  }
  greet() {
    return `${this.name} offers a greeting in ${this.language}.`;
  }
}

const newHumanObject = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 4,
    width: 4,
    height: 2,
  },
  gameName: 'Game Object',
  hp: 5,
  name: 'Jaffar Regina',
  faction: 'Kellogs',
  weapons: [
    'spaghetti code',
    'plaintext passwords',
  ],
  language: 'Javascript',
});

newHumanObject.greet();
newHumanObject.takeDamage();
newHumanObject.destroy();

/* eslint-disable no-undef */

module.exports = {
  GameObject,
  NPC,
  Humanoid,
};
