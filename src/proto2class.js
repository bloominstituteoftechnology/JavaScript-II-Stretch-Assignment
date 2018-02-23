class GameObject {
  constructor(stats) {
    this.createdAt = stats.createdAt;
    this.dimensions = stats.dimensions;
  }
  destroy() {
    return 'Game object was removed from the game.';
  }
}

class NPC extends GameObject {
  constructor(stats) {
    this.hp = stats.hp;
    this.name = stats.name;
  }
  takeDamage() {
    return `${this.name} took damage.`;
  }
}

class Humanoid extends NPC {
  constructor(stats) {
    this.faction = stats.faction;
    this.weapons = stats.weapons;
    this.language = stats.language;
  }
  greet() {
    return `${this.name} offers a greeting in ${this.language}.`;
  }
}
