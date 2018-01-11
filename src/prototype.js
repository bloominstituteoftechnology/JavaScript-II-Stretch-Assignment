/* eslint-disable no-undef */

function GameObject(traits) {
  this.createdAt = traits.createdAt;
  this.dimensions = traits.dimensions;
}
GameObject.prototype.destroy = function destroy() {
  return 'Game object was removed from the game.';
};

function NPC(NPCTraits) {
  GameObject.call(this, NPCTraits);
  this.hp = NPCTraits.hp;
  this.name = NPCTraits.name;
}

NPC.prototype = Object.create(GameObject.prototype);

NPC.prototype.takeDamage = function takeDamage() {
  return `${this.name} took damage.`;
};

function Humanoid(humanoidTraits) {
  NPC.call(this, humanoidTraits);
  this.faction = humanoidTraits.faction;
  this.weapons = humanoidTraits.weapons;
  this.language = humanoidTraits.language;
}

Humanoid.prototype = Object.create(NPC.prototype);

Humanoid.prototype.greet = function greet() {
  return `${this.name} offers a greeting in ${this.language}.`;
};

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
