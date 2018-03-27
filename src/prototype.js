class GameObject {
  constructor(options) {
    this.createdAt = options.createdAt;
    this.dimensions = options.dimensions;
  }

  destroy() {
    return this.createdAt.message = 'Game object was removed from the game.';
  }
}
  
class NPC extends GameObject {
  constructor(options) {
    super(options);
    this.name = options.name;
    this.hp = options.hp;
  }
  takeDamage() {
    return '${this.name} took damage.';
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
    return '${this.name} offers a greeting in ${this.language}.';
  }
}

/* eslint-disable no-undef */

module.exports = {
  GameObject,
  NPC,
  Humanoid,
};
