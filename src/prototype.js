/*
  Object oriented design is commonly used in video games.  For this part of the assignment
  you will be implementing several classes with their correct inheritance heirarchy.

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

/*
  GameObject
    createdAt
    dimensions
    destroy() // prototype method -> returns the string 'Game object was removed from the game.'
s
*/
class GameObject {
  constructor(settings) {
    this.createdAt = settings.createdAt;
    this.dimensions = settings.dimensions;
  }
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
  constructor(settings) {
    super(settings);
    this.name = settings.name;
    this.hp = settings.hp;
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
  constructor(settings) {
    super(settings);
    this.faction = settings.faction;
    this.weapons = settings.weapons;
    this.language = settings.language;
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
