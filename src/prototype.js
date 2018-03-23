/*
  Object oriented design is commonly used in video games.  For this part of the assignment
  you will be implementing several classes with their correct inheritance heirarchy.

  In this file you will be creating three classes:
  GameObject
    createdAt
    dimensions
    destroy() // prototype method -> returns the string 'Game object was removed from the game.'*/
    function GameObject(gameobject) {
      this.createdAt = gameobject.createdAt;
      this.dimensions = gameobject.dimensions;
      this.name = gameobject.name;

    }

    GameObject.prototype.destroy = function() { // this is a function for
      console.log(this.name + ' was removed from the game!');
    }

     const gameobject = {
      name: this.GameObject,
    }
    
 

    const pawn = new GameObject ({ // creates a new object
      name: 'pawn',
    })

    pawn.destroy(); //calls destroy on the pawn object

    function NPC(NPCgameobjects) {
      GameObject.call(this, NPCgameobjects);
      this.hp = NPCgameobjects.hp;
      this.name = NPCgameobjects.name;
    }

    NPC.prototype = Object.create(GameObject.prototype);

    NPC.prototype.takeDamage = function() {
      console.log(this.name + ' took damage');
    }

    const Enemy = new NPC ({
      hp: 100,
      name: 'The Destroyer!',
    })
    
    function Humanoid(options) {
      NPC.call(this, options)
      this.faction = options.faction;
      this.weapons = options.weapons;
      this.language = options.language;
    }

    Humanoid.prototype = Object.create(NPC.prototype);

    Humanoid.prototype.greet = function() {
      console.log(this.name + " offers a greeting in " + this.language);
    }

    const Player = new Humanoid ({
      hp: 100,
      name: 'Player1',
      faction: 'Blue Team',
      weapons: 'Swords',
      language: 'Japanese',
    })

    Enemy.takeDamage();
    Player.takeDamage();
    Player.greet();
    
     // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    // should inherit destroy() from GameObject through NPC
    // should inherit takeDamage() from NPC
/*
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

module.exports = {
  GameObject,
  NPC,
  Humanoid,
};
