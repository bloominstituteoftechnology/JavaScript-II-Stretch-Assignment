function GameObject(options) {
  this.createdAt = options.createdAt;
  this.dimensions = options.dimensions;
}

GameObject.prototype.destroy = function () {
  return 'Game object was removed from the game.';
};

function NPC(options) {
  GameObject.call(this, options);
  this.hp = options.hp;
  this.name = options.name;
}

NPC.prototype = Object.create(GameObject.prototype);
NPC.prototype.takeDamage = function () {
  return `${this.name} took damage.`;
};

function Humanoid(options) {
  NPC.call(this, options);
  this.faction = options.faction;
  this.weapons = options.weapons;
  this.language = options.language;
}

Humanoid.prototype = Object.create(NPC.prototype);

Humanoid.prototype.greet = function () {
  return `${this.name} offers a greeting in ${this.language}.`;
};

/* eslint-disable no-undef */

module.exports = {
  GameObject,
  NPC,
  Humanoid,
};
