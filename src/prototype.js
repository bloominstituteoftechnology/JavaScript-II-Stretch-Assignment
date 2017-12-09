function GameObject(properties) {
  this.createdAt = properties.createdAt;
  this.dimensions = properties.dimensions;
}

GameObject.prototype.destroy = function _() {
  return 'Game object was removed from the game.';
};
function NPC(stats) {
  GameObject.call(this, stats);
  this.hp = stats.hp;
  this.name = stats.name;
}
function Humanoid(characteristics) {
  NPC.call(this, characteristics);
  this.faction = characteristics.faction;
  this.weapons = characteristics.weapons;
  this.language = characteristics.language;
}
NPC.prototype = Object.create(GameObject.prototype);
NPC.prototype.takeDamage = function _() {
  return `${this.name} took damage.`;
};

Humanoid.prototype = Object.create(NPC.prototype);
Humanoid.prototype.greet = function _() {
  return `${this.name} offers a greeting in ${this.language}.`;
};
const dogRomeo = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 12,
    width: 2,
    height: 2,
  },
  hp: 1000,
  name: 'Romeo',
  faction: 'Bohemia',
  weapon: ['ultrasonic bark', 'jaws of death', 'rocket mode'],
  language: 'Italian',
});
dogRomeo.destroy();
/* eslint-disable no-undef */

module.exports = {
  GameObject,
  NPC,
  Humanoid,
};
