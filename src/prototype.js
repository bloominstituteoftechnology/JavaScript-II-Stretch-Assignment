
//   Object oriented design is commonly used in video games.  For this part of the assignment
//   you will be implementing several classes with their correct inheritance heirarchy.

//   In this file you will be creating three classes:
let ID_CEILING = 21000888;

class GameObject {
  constructor(options) {
    this.id = `#${ID_CEILING++}`;
    this.createdAt = new Date();
    this.isAlive = options.isAlive || true;
    this.dimensions = options.dimensions;
  }
}

GameObject.prototype.destroy = function () { this.isAlive = false; return console.log(`${this.id} was removed from the game.`); };

class NPC extends GameObject {
  constructor(options) {
    super(options);
    this.hp = options.hp;
    this.name = options.name;
  }
}

NPC.prototype.takeDamage = function () { return console.log(`${this.name} took damage.`); };

class Humanoid extends NPC {
  constructor(options) {
    super(options);
    this.faction = options.faction;
    this.weapons = options.weapons;
    this.language = options.language;
  }
}

Humanoid.prototype.greet = function () { return console.log(`${this.name} offers a greeting in ${this.language}.`); };

//   Inheritance chain: Humanoid -> NPC -> GameObject
//   Instances of Humanoid should have all of the same properties as NPC and GameObject.
//   Instances of NPC should have all of the same properties as GameObject.

//   Example:

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
console.log(hamsterHuey);
hamsterHuey.destroy(); // returns 'Game object was removed from the game.'
console.log(hamsterHuey);

// /* eslint-disable no-undef */

// module.exports = {
//   GameObject,
//   NPC,
//   Humanoid,
// };
