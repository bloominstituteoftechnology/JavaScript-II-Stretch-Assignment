
// Object oriented design is commonly used in video games.  For this part of the assignment
// you will be implementing several classes with their correct inheritance heirarchy.

// In this file you will be creating three classes:
// GameObject
//   createdAt
//   dimensions
//   destroy() // prototype method -> returns the string 'Game object was removed from the game.'
function GameObject(attribute) {
  this.createdAt = attribute.createdAt;
  this.dimensions = attribute.dimensions;
}

GameObject.prototype.destroy = () => {
  return 'Game object was remmoved from the game.';
};

// <alternative syntax method to avove>
// GameObject.prototype.destroy = function() {
//   if(this.destroy){
//     return `Game object was remmoved from the game.`;
//   }
// }
// NPC
//   hp
//   name
//   takeDamage() // prototype method -> returns the string '<object name> took damage.'
//   // should inherit destroy() from GameObject's prototype
function NPC(npcAttribute) {
  GameObject.call(this, npcAttribute);
  this.hp = npcAttribute.hp;
  this.name = npcAttribute.name;
}

NPC.prototype = Object.create(GameObject.prototype);

NPC.prototype.takeDamage = () => {
  return `${this.name} took damage.`;
};

// Humanoid
//   faction
//   weapons
//   language
//   greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
// should inherit destroy() from GameObject through NPC
// should inherit takeDamage() from NPC

function Humanoid(humanoidAttribute) {
  NPC.call(this, humanoidAttribute);
  GameObject.call(this, humanoidAttribute);
  this.faction = humanoidAttribute.faction;
  this.weapons = humanoidAttribute.weapons;
  this.language = humanoidAttribute.language;
}

Humanoid.prototype = Object.create(GameObject.prototype);
Humanoid.prototype = Object.create(NPC.prototype);

Humanoid.prototype.greet = () => {
  return `${this.name} offers a greeting in ${this.language}`;
};


// Inheritance chain: Humanoid -> NPC -> GameObject
// Instances of Humanoid should have all of the same properties as NPC and GameObject.
// Instances of NPC should have all of the same properties as GameObject.

// Example:

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
