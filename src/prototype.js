/*
  Object oriented design is commonly used in video games.  For this part of the assignment
  you will be implementing several classes with their correct inheritance heirarchy.

  In this file you will be creating three classes:
  GameObject
    createdAt
    dimensions
    destroy() // prototype method -> returns the string 'Game object was removed from the game.'

  NPC
    hp
    name
    takeDamage() // prototype method -> returns the string '<object name> took damage.'
    // should inherit destroy() from GameObject's prototype

  Humanoid
    faction
    weapons
    language
    greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    // should inherit destroy() from GameObject through NPC
    // should inherit takeDamage() from NPC

  Inheritance chain: Humanoid -> NPC -> GameObject
  Instances of Humanoid should have all of the same properties as NPC and GameObject.
  Instances of NPC should have all of the same properties as GameObject.

  Example:

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
*/
function GameObject(props) {
  this.date = props.date;
  this.dimensions = props.dimensions;
}

GameObject.prototype.destroy = function () {
  return 'Game object was removed from the game.';
};

function NPC(props) {
  GameObject.call(this, props);
  this.hp = props.hp;
  this.name = props.name;
}

NPC.prototype = Object.create(GameObject.prototype);

NPC.prototype.takeDamage = function (amnt) {
  this.hp = amnt !== undefined ? this.hp - amnt : this.hp - 1;
  if (this.hp <= 0) {
    return this.destroy();
  }
  return `${this.name} took damage. ${this.hp} health points left.`;
};

function Humanoid(props) {
  NPC.call(this, props);
  this.faction = props.faction;
  this.weapons = props.weapons;
  this.language = props.language;
}
Humanoid.prototype = Object.create(NPC.prototype);

Humanoid.prototype.greet = function () {
  return `${this.name} offers a greeting in ${this.language}`;
};

const playerOne = new Humanoid({
  date: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2,
  },
  hp: 100,
  name: 'bob',
  faction: 'el oh el',
  weapons: [
    'WMD',
    'pistol',
  ],
  language: 'weeb',
});

// console.log(playerOne.greet());

/* eslint-disable no-undef */

module.exports = {
  GameObject,
  NPC,
  Humanoid,
};
