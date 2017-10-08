// Lambda School - CS4 - Jeff Schock

class GameObject{
  constructor(options){
    this.createdAt = new Date();
    this.dimensions = {};
    this.dimensions.length = options.dimensions.length;
    this.dimensions.width = options.dimensions.width;
    this.dimensions.height = options.dimensions.height;
}}; // tested

GameObject.prototype.destroy = function destroy(){
  this.destroyedAt = new Date();
  return `${this.name} was removed from the game.`;
}; // tested

class NPC extends GameObject {
  constructor(options){
    super(options);
    this.hp = options.hp;
    this.name = options.name;
}}; // tested

NPC.prototype.takeDamage = function takeDamage(){
  return `${this.name} took damage.`};

class Humanoid extends NPC {
  constructor(options){
    super(options);  
    this.faction = options.faction;
    this.weapons = options.weapons;
    this.language = options.language;
}}; // tested

Humanoid.prototype.greet = function greet(){
  return `${this.name} offers a greeting in ${this.language}.`;}

const hamsterHuey = new Humanoid({
  hp: 0,
  name: 'Ondori',
  faction: 'BlueGartr',
  weapons: 'Longbow',
  language: 'English',
  dimensions: {
    length: 0.3,
    width: 0.3,
    height: 0.3 // default test 10
}});

console.log(`>>> `, hamsterHuey.greet());
console.log(`>>> `, hamsterHuey.takeDamage());
console.log(`>>> `, hamsterHuey.destroy());
console.log(`>>> `, hamsterHuey);

/* eslint-disable no-undef */

module.exports = {
  GameObject,
  NPC,
  Humanoid,
};
