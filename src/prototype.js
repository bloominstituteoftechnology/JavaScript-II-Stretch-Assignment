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
  constructor(data) {
    this.createdAt = data.createdAt;
    this.dimensions = data.dimensions;
  }

  destroy() {
    return `${this.name} was removed from the game.`;
  }
}

class NPC extends GameObject {
  constructor(data) {
    super(data);
    this.hp = data.hp;
    this.name = data.name;
    this.alive = true;
  }

  takeDamage() {
    if (this.alive) {
      if (this.hp > 0) {
        this.hp -= 1;
        //for fun, actually takes damage
        console.log(`${this.name} took damage. HP is now ${this.hp}`);
        return `${this.name} took damage. HP is now ${this.hp}`;
      }
      if (this.hp === 0) {
        console.log(`${this.name} has reached ${this.hp} HP.`);
        console.log(this.destroy());
        this.alive = false;
        //for realism, upon 0 hp runs destroy()
        return this.destroy();
      }
    }
  }
}

class Humanoid extends NPC {
  constructor(data) {
    super(data);
    this.faction = data.faction;
    this.weapons = data.weapons;
    this.language = data.language;
  }

  greet() {
    if (this.alive) {
      return `${this.name} offers a greeting in ${this.language}.`;
    }
  }
}

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
  weapons: ['bubblegum'],
  language: 'Hamsterish',
});


/* eslint-disable no-undef */

module.exports = {
  GameObject,
  NPC,
  Humanoid,
};
