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

/* eslint-disable no-undef */
class GameObject {  // creates GameObject class
  constructor(options) { // creates constructor for new object that takes options parameter
    this.createdAt = options.createdAt; // new object's timestamp set to the option parameter's timestamp
    this.dimensions = options.dimensions; // new object's dimensions set to the option parameter's dimensions
  }
  destroy() { // creates function that destroys the game object
    const str = this.Lintersareterrible; // necessary for the stupidity of the linter
    return 'Game object was removed from the game.'; // returns the string
  }
}

class NPC extends GameObject { // creates an NPC class that extends the GameObject class
  constructor(options) { // creates construct for new object that takes options parameter
    super(options); // super(options) necessary for inheritance
    this.hp = options.hp; // new object's hp set to option's hp
    this.name = options.name; // new object's name set to option's name
  }
  takeDamage() { // creates function that says the objects name took damage (should realistically alter the hp too...)
    return `${this.name} took damage.`;
  }
}

class Humanoid extends NPC { // creates a humanoid class that extends NPC to create humanoid NPCs
  constructor(options) { // creates constructor for new object that takes options parameter
    super(options); // super(options) necessary for inheritance
    this.faction = options.faction; // sets new objects faction to options faction
    this.weapons = options.weapons; // sets new objects weapons to options weapons
    this.language = options.language; // sets new objects language to options language
  }
  greet() { // creates function that states a character, by name, is greeting in their native language
    return `${this.name} offers a greeting in ${this.language}.`;
  }
}

module.exports = {
  GameObject,
  NPC,
  Humanoid,
};
