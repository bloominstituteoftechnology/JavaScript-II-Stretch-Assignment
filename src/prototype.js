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

// ############ GameObject ##########

class GameObject {
  constructor(gameObjAttr) {
    this.createdAt = gameObjAttr.createdAt;
    this.dimensions = gameObjAttr.dimensions;
    this.objectname = 'Game object ';
  }

  destroy() {
    return `${this.objectname}was removed from the game.`;
  }
}


// ############ NPC ##################

class NPC extends GameObject {
  constructor(npcAttr) {
  //  GameObject.call(this, npcAttr);
    super(npcAttr);
    this.hp = npcAttr.hp;
    this.name = npcAttr.name;
  }
  takeDamage() {
    return `${this.name} took damage.`;
  }
}

// ########### Humanoid ################

class Humanoid extends NPC {
  constructor(humanAttr) {
    super(humanAttr);
    this.faction = humanAttr.faction;
    this.weapons = humanAttr.weapons;
    this.language = humanAttr.language;
    this.companion = humanAttr.companion;
  // NPC.call(this, humanAttr);
  // GameObject.call(this, humanAttr);
  }

  greet() {
    return `${this.name} offers a greeting in ${this.language}.`;
  }

  attack() {
    return `${this.name} uses ${this.weapon}`;
  }
}


 // ########## Animal #############

class Animal extends NPC {
  constructor(animalAttr) {
    super(animalAttr);
    this.species = animalAttr.species;
    this.owner = animalAttr.owner;
  }

  sound() {
    if (this.species === 'Dog') {
      return 'Bark!' || 'Woof!' || 'Grrrr...';
    }
  }
}


 // ########### Hero ############


const hero = new Humanoid({
  createdAt: 'July 13, 2258',
  dimensions: {
    height: `${5}'${9}`,
    skin: 'Pale',
    eyes: 'Brown',
  },
  name: 'Lone Wanderer',
  hp: 100,
  faction: 'Vault Dweller',
  weapons: 'Rock_it_Launcher',
  language: 'English',
  companion: 'Dogmeat',
});


// ########### Companion ###########

const dogmeat = new Animal({
  createdAt: '2277',
  dimensions: {
    height: `${3}'${2}"`,
    fur: 'Black & White',
    breed: 'Australian Cattle Dog',
  },
  name: 'Dogmeat',
  hp: 50,
  species: 'Dog',
  owner: 'Lone Wanderer',
});

// ########### Enemy ############

const enemyBandit = new Humanoid({
  createdAt: 'September 23rd, 2260',
  dimensions: {
    height: `${6}'${2}"`,
    skin: 'Dirty',
    eyes: 'Green',
  },
  name: 'Lag-Bolt',
  hp: 100,
  faction: 'Raider',
  weapons: 'Heavy Incinerator',
  language: 'Russian',
  companion: 'Lug-Nut',
});


module.exports = {
  GameObject,
  NPC,
  Humanoid,
};
