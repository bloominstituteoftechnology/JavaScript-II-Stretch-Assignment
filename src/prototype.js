/* eslint-disable no-undef */

class GameObject {
  constructor(traits) {
    this.createdAt = traits.createdAt;
    this.dimensions = traits.dimensions;
  }
  destroy() {
    const theLinterIsAnIdiot = this.name;
    return 'Game object was removed from the game.';
  }
}

class NPC extends GameObject {
  constructor(NPCTraits) {
    super(NPCTraits);
    this.hp = NPCTraits.hp;
    this.name = NPCTraits.name;
  }
  takeDamage() {
    return `${this.name} took damage.`;
  }
}

class Humanoid extends NPC {
  constructor(humanoidTraits) {
    super(humanoidTraits);
    this.faction = humanoidTraits.faction;
    this.weapons = humanoidTraits.weapons;
    this.language = humanoidTraits.language;
  }
  greet() {
    return `${this.name} offers a greeting in ${this.language}.`;
  }
}

const snakeOiler = new Humanoid({
  createdAt: 'Fire Mountain',
  dimensions: [5, 5],
  hp: 100,
  name: 'Leon McCree',
  faction: 'Snake Oilers',
  weapons: 'Snake',
  language: 'Oilish',
});

module.exports = {
  GameObject,
  NPC,
  Humanoid,
};
