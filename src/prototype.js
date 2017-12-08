class GameObject {
  constructor(options) {
    this.createdAt = options.createdAt;
    this.dimensions = options.dimensions;
  }
  destroy() {
    const x = '';
    this.x = 'Game object was removed from the game.';
    return this.x;
  }
}

class NPC extends GameObject {
  constructor(npcStats) {
    super(npcStats);
    this.hp = npcStats.hp;
    this.name = npcStats.name;
  }
  takeDamage() {
    return `${this.name} took damage!`;
  }
}

class Humanoid extends NPC {
  constructor(humanoidStats) {
    super(humanoidStats);
    this.faction = humanoidStats.faction;
    this.weapons = humanoidStats.weapons;
    this.language = humanoidStats.language;
  }
  greet() {
    return `${this.name} offers a greeting in ${this.language}`;
  }
}

const smallDemon = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 5,
    width: 3,
    height: 15,
  },
  hp: 500,
  name: 'Xythor',
  faction: 'Hells Gates',
  weapons: [
    'Twin Blades of the Deceiver',
  ],
  language: 'Demonic',
});

smallDemon.greet();
smallDemon.takeDamage();
smallDemon.destroy();

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
