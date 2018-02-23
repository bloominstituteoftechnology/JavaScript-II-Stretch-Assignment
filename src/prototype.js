/*
  Object oriented design is commonly used in video games.  For this part of the assignment
  you will be implementing several classes with their correct inheritance heirarchy.

  In this file you will be creating three classes:
  GameObject
    createdAt
    dimensions
    destroy() // prototype method -> returns the string 'Game object was removed from the game.'
*/
// Constructor way of creating a game obj
/* 
function GameObject(options) {
  this.createdAt = options.createdAt;
  this.dimensions = options.dimensions;
}

GameObject.prototype.destroy = function () {
  return 'Game object was removed from the game';
};
*/
// Using a class

class GameObject {
  constructor (options) {
    this.createdAt = options.createdAt;
    this.dimensions = options.dimensions;
  }
  destroy() {
    return 'Game object was removed from the game';
  }
}
  
/*
  NPC
    hp
    name
    takeDamage() // prototype method -> returns the string '<object name> took damage.'
    // should inherit destroy() from GameObject's prototype
*/
// Constructor way of creating a NPC obj
/*
function NPC(options) {
  GameObject.call(this, options);
  this.hp = options.hp;
  this.name = options.name;
}

NPC.prototype = Object.create(GameObject.prototype);

NPC.prototype.takeDamage = function () {
  return `${this.name} took damage`;
};
*/
// Using a class
class NPC extends GameObject {
  constructor (options) {
    super (options);
    this.hp = options.hp;
    this.name = options.name;
  }
  takeDamage() {
    return `${this.name} took damage`;
  }
}
/*
  Humanoid
    faction
    weapons
    language
    greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    // should inherit destroy() from GameObject through NPC
    // should inherit takeDamage() from NPC
*/
// Constructor way of creating a Humanoid obj
/*
function Humanoid(attrs) {
  NPC.call(this, attrs);
  this.faction = attrs.faction;
  this.weapons = attrs.weapons;
  this.language = attrs.language;
}

Humanoid.prototype = Object.create(NPC.prototype);

Humanoid.prototype.greet = function (name) {
  return `${this.name} offers a greeting in ${this.language}.`;
};
*/
// Using a class
class Humanoid extends NPC {
  constructor (attrs) {
    super(attrs);
    this.faction = attrs.faction;
    this.weapons = attrs.weapons;
    this.language = attrs.language;
  }
  greet() {
    return `${this.name} offers a greeting in ${this.language}.`;
  }
}

/*
  Inheritance chain: Humanoid -> NPC -> GameObject
  Instances of Humanoid should have all of the same properties as NPC and GameObject.
  Instances of NPC should have all of the same properties as GameObject.

  Example:
*/
const hamsterHuey = new Humanoid({
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


hamsterHuey.greet(); // returns 'Hamster Huey offers a greeting in Hamsterish'
hamsterHuey.takeDamage(); // returns 'Hamster Huey took damage.'
hamsterHuey.destroy(); // returns 'Game object was removed from the game.'

/* eslint-disable no-undef */

module.exports = {
  GameObject,
  NPC,
  Humanoid,
};
