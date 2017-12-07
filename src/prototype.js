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

// GameObject.prototype.

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
  constructor(humanoidOptions) {
    super(humanoidOptions);
    this.faction = humanoidOptions.faction;
    this.weapons = humanoidOptions.weapons;
    this.language = humanoidOptions.language;
  }

  greet() {
    return `${this.name} offers a greeting in ${this.language}.`;
  }
}

const hamsterHuey = new Humanoid({
  createdAt: Date(),
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


/* eslint-disable no-undef */

module.exports = {
  GameObject,
  NPC,
  Humanoid,
};
