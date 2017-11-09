class GameObject {
  constructor(options) {
    this.createdAt = options.createdAt;
    this.dimensions = {
      length: options.dimensions.length,
      height: options.dimensions.height,
      width: options.dimensions.width,
    };
  }
}
GameObject.prototype.destroy = () => 'Game object was removed from the game.';

class NPC extends GameObject {
  constructor(options) {
    super(options);
    this.hp = options.hp;
    this.name = options.name;
  }
  takeDamage() {
    return `${this.name} took damage.`;
  }
}

class Humanoid extends NPC {
  constructor(options) {
    super(options);
    this.faction = options.faction;
    this.weapons = options.weapons;
    this.language = options.language;
  }
  greet() {
    return `${this.name} offers a greeting in ${this.language}.`;
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

// console.log(hamsterHuey);

/* eslint-disable no-undef */

module.exports = {
  GameObject,
  NPC,
  Humanoid,
};
