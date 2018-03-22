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
*/


function GameObject(params) {
  this.createdAt = params.createdAt; 
  this.dimensions = params.dimensions; 
}
GameObject.prototype.destroy = function() {
  return 'Game object was removed from the game.'
};

// es6
// class GameObject {
//   constructor(params) {
//   this.createdAt = params.createdAt; 
//   this.dimensions = params.dimensions; 
//   }
//   destroy(){
//     return 'Game object was removed from the game.'
//   }
// }


function NPC(params) {
  GameObject.call(this, params); 
  this.hp = params.hp; 
  this.name = params.name;
}
NPC.prototype = Object.create(GameObject.prototype); 
NPC.prototype.takeDamage = function(){ 
  return `${this.name} took damage.`
}; 

// es6
// class NPC extends GameObject {
//   constructor(params) {
//     super(params); 
//     this.hp = params.hp; 
//     this.name = params.name;
//   }
//   takeDamage(){
//     return `${this.name} took damage.`
//   }
// }

function Humanoid(params) {
  NPC.call(this,params); 
  this.faction = params.faction; 
  this.weapons = params.weapons; 
  this.language = params.language; 
}
Humanoid.prototype = Object.create(NPC.prototype); 
Humanoid.prototype.greet = function() { 
  return `${this.name} offers a greeting in ${this.language}.`
};

// es6
// class Humanoid extends NPC {
//   constructor(params) {
//     super(params); 
//     this.faction = params.faction; 
//     this.weapons = params.weapons; 
//     this.language = params.language; 
//   }
//   greet(){
//     return `${this.name} offers a greeting in ${this.language}.`
//   }
// }

/*
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
/* eslint-disable no-undef */

module.exports = {
  GameObject,
  NPC,
  Humanoid,
};
