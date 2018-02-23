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

///GameObject (parent)
function GameObject(attrs) {
  this.createdAt = attrs.createdAt;
  this.dimensions = attrs.dimensions
}

GameObject.prototype.destroy = function () {
  return 'Game object was removed from the game.';
}

///NPC (child)

function NPC(npcAttrs) {
  GameObject.call(this, npcAttrs);
  this.hp = npcAttrs.hp;
  this.name = npcAttrs.name;
}

NPC.prototype = Object.create(GameObject.prototype)

GameObject.prototype.takeDamage = function () {
  return `${this.name} took damage.`;
}

//Humanoid (grandchild)



/* eslint-disable no-undef */

module.exports = {
  GameObject,
  NPC,
  Humanoid,
};
