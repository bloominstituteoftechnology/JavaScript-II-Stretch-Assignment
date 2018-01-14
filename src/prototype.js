/* eslint-disable */

function GameObject(options) {
  this.createdAt = options.createdAt;
  this.dimensions = options.dimensions;
}
GameObject.prototype.destroy = function destroy() {
  return ('${this.name}was removed from the game');
};

function NPC(npcOptions) {
  GameObject.call(this, npcOptions);
  this.hp = npcOptions.hp;
  this.name = npcOptions.name;
};
NPC.prototype = Object.create(GameObject.prototype);
NPC.prototype.takedamage = function takeDamage() {
  return '${this.name}took damage.';
};

function Humanoid(humOptions) {
  NPC.call(this, humOptions);
  this.faction = humOptions.faction;
  this.weapons = humOptions.weapons;
  this.language = humOptions.language;
}
Humanoid.prototype.greet = function greet() {
  return '${this.name}offers a greeting in`${this.language}';
}

const Bill = new Humanoid({
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

module.exports = {
  GameObject,
  NPC,
  Humanoid,
};
