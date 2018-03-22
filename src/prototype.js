/*
  Object oriented design is commonly used in video games.  For this part of the assignment
  you will be implementing several classes with their correct inheritance heirarchy.

  In this file you will be creating three classes:
  GameObject
    createdAt
    dimensions
    destroy() // prototype method -> returns the string 'Game object was removed from the game.'
*/
  // parent class
  class GameObject {
    constructor(options) {
      this.createdAt = options.createdAt;
      this.dimensions = options.dimensions;
    }
    // destroy() {
    //   return `${this.name} was removed from the game.`;
    // }
  }
  GameObject.prototype.destroy = function destroy() {
    return 'Game object was removed from the game.';
  };

/*
  NPC
    hp
    name
    takeDamage() // prototype method -> returns the string '<object name> took damage.'
    // should inherit destroy() from GameObject's prototype
*/
  class NPC extends GameObject {
    constructor(NPCoptions) {
      super(NPCoptions);
      this.hp = NPCoptions.hp;
      this.name = NPCoptions.name;
    }
    takeDamage() {
      return `${this.name} took damage.`;
    }
  }
/*
  Humanoid
    faction
    weapons
    language
    greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    // should inherit destroy() from GameObject through NPC
    // should inherit takeDamage() from NPC
*/

  class Humanoid extends NPC {
    constructor(Humanoidoptions) {
      super(Humanoidoptions);
      this.faction = Humanoidoptions.faction;
      this.weapons = Humanoidoptions.weapons;
      this.language = Humanoidoptions.language;
    }
    greet() {
      return `${this.name} offers a greeting in ${this.language}.`;
    }
  }

/*
  Inheritance chain: Humanoid -> NPC -> GameObject
  Instances of Humanoid should have all of the same properties as NPC and GameObject.
  Instances of NPC should have all of the same properties as GameObject.
*/

  const playerTwo = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 1,
    },
    hp: 10,
    name: 'Player Two',
    faction: 'USA',
    weapons: [
      'spear gun',
    ],
    language: 'English',
  });

  playerTwo.greet();
  playerTwo.takeDamage();
  playerTwo.destroy();

/*
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
