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
const dragQueen = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 12,
    width: 55,
    height: 6,
  },
  hp: 7634862,
  name: 'Ineda Buffet',
  faction: 'Queensland',
  weapon: ['nails', 'heels', 'throwin\' shade'],
  language: 'Shade',
});
dragQueen.destroy();
/* eslint-disable no-undef */

module.exports = {
  GameObject,
  NPC,
  Humanoid,
};
