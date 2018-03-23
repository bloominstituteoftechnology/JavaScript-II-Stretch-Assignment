
/*  Object oriented design is commonly used in video games.  For this part of the assignment
  you will be implementing several classes with their correct inheritance heirarchy.

  In this file you will be creating three classes:*/

  const GameObject {
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 1,
      height: 1
    }

    GameObject.prototype.destroy = function() {
      return `Game object was removed from the game.`
    }
    // prototype method -> returns the string 'Game object was removed from the game.'


  const NPC = new Object ({
    hp: 5,
    name: 'Hamster Huey'
    takeDamage() {
      return `${this.name} and took damage.`
    });


    // prototype method -> returns the string '<object name> took damage.'
    // should inherit destroy() from GameObject's prototype

  const Humanoid = new NPC ({
    faction: 'Gooey Kablooie',
    weapons: 'bubblegum',
    language: 'Hamsterish'
    greet() {
      return `${this.name} offers a greeting in ${this.language}.`
    });
    // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    // should inherit destroy() from GameObject through NPC
    // should inherit takeDamage() from NPC

    Humanoid.destroy();
    Humanoid.takeDamage();

/*  Inheritance chain: Humanoid -> NPC -> GameObject
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


/* eslint-disable no-undef */

module.exports = {
  GameObject,
  NPC,
  Humanoid,
};
