const {
  GameObject,
  NPC,
  Humanoid,
} = require('../src/prototype');

/* eslint-disable no-undef */

describe('prototype', () => {
  describe('GameObject', () => {
    const gameObject = new GameObject({
      createdAt: new Date(),
      dimensions: {
        length: 5,
        width: 5,
        height: 15,
      },
    });
    it('', () => {});
    it('should create an object with the properties: createdAt and dimensions', () => {
      expect(Object.prototype.hasOwnProperty.call(gameObject, 'createdAt')).toBe(true);
      expect(gameObject.createdAt instanceof Date).toBe(true);
      expect(Object.prototype.hasOwnProperty.call(gameObject, 'dimensions')).toBe(true);
      expect(gameObject.dimensions.length).toBe(5);
    });
    it('should have the method .destroy() on its prototype', () => {
      expect(Object.prototype.hasOwnProperty.call(GameObject.prototype, 'destroy')).toBe(true);
      expect(Object.prototype.hasOwnProperty.call(GameObject, 'destroy')).toBe(false);
      expect(typeof GameObject.prototype.destroy).toBe('function');
    });
    it('.destroy() should return the string \'Game object was removed from the game.\'', () => {
      expect(gameObject.destroy()).toBe('Game object was removed from the game.');
    });
  });

  describe('NPC', () => {
    const npc = new NPC({
      createdAt: new Date(),
      dimensions: {
        length: 5,
        width: 5,
        height: 15,
      },
      hp: 100,
      name: 'Foofie',
    });

    it('should create an object with the properties: createdAt, dimensions (use GameObject to set these two), hp, and name', () => {
      expect(Object.prototype.hasOwnProperty.call(npc, 'createdAt')).toBe(true);
      expect(Object.prototype.hasOwnProperty.call(npc, 'dimensions')).toBe(true);
      expect(Object.prototype.hasOwnProperty.call(npc, 'hp')).toBe(true);
      expect(Object.prototype.hasOwnProperty.call(npc, 'name')).toBe(true);
      expect(npc.createdAt instanceof Date).toBe(true);
      expect(npc.dimensions.length).toBe(5);
      expect(npc.hp).toBe(100);
      expect(npc.name).toBe('Foofie');
    });
    it('should inherit the .destroy() method from GameObject', () => {
      expect(Object.prototype.hasOwnProperty.call(npc, 'destroy')).toBe(false);
      expect(Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(NPC.prototype), 'destroy')).toBe(true);
      expect(npc.destroy()).toBe('Game object was removed from the game.');
    });
    it('should have the method .takeDamage() on its prototype', () => {
      expect(Object.prototype.hasOwnProperty.call(NPC.prototype, 'takeDamage')).toBe(true);
      expect(Object.prototype.hasOwnProperty.call(npc, 'takeDamage')).toBe(false);
      expect(typeof NPC.prototype.takeDamage).toBe('function');
    });
    it('.takeDamage() should return the string \'<object name> took damage.\'', () => {
      expect(npc.takeDamage()).toBe(`${npc.name} took damage.`);
    });
  });

  describe('Humanoid', () => {
    const humanoid = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 5,
        width: 5,
        height: 15,
      },
      hp: 100,
      name: 'Foofie',
      faction: 'Lannister',
      weapons: [
        'boomerang',
      ],
      language: 'Common Tongue',
    });
    it('should create an object with the properties: createdAt, dimensions (from GameObject), hp, name (from NPC), faction, weapons, and language', () => {
      expect(Object.prototype.hasOwnProperty.call(humanoid, 'createdAt')).toBe(true);
      expect(Object.prototype.hasOwnProperty.call(humanoid, 'dimensions')).toBe(true);
      expect(Object.prototype.hasOwnProperty.call(humanoid, 'hp')).toBe(true);
      expect(Object.prototype.hasOwnProperty.call(humanoid, 'name')).toBe(true);
      expect(Object.prototype.hasOwnProperty.call(humanoid, 'faction')).toBe(true);
      expect(Object.prototype.hasOwnProperty.call(humanoid, 'weapons')).toBe(true);
      expect(Object.prototype.hasOwnProperty.call(humanoid, 'language')).toBe(true);
      expect(humanoid.createdAt instanceof Date).toBe(true);
      expect(humanoid.dimensions.length).toBe(5);
      expect(humanoid.hp).toBe(100);
      expect(humanoid.name).toBe('Foofie');
      expect(humanoid.faction).toBe('Lannister');
      expect(humanoid.language).toBe('Common Tongue');
      expect(humanoid.weapons[0]).toBe('boomerang');
    });
    it('should inherit the .destroy() method from GameObject', () => {
      expect(Object.prototype.hasOwnProperty.call(humanoid, 'destroy')).toBe(false);
      expect(Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(Object.getPrototypeOf(Humanoid.prototype)), 'destroy')).toBe(true);
      expect(humanoid.destroy()).toBe('Game object was removed from the game.');
    });
    it('should inherit the .takeDamage() method from NPC', () => {
      expect(Object.prototype.hasOwnProperty.call(humanoid, 'takeDamage')).toBe(false);
      expect(Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(Humanoid.prototype), 'takeDamage')).toBe(true);
      expect(humanoid.takeDamage()).toBe(`${humanoid.name} took damage.`);
    });
    it('should have the method .greet() on its prototype', () => {
      expect(Object.prototype.hasOwnProperty.call(Humanoid.prototype, 'greet')).toBe(true);
      expect(Object.prototype.hasOwnProperty.call(humanoid, 'greet')).toBe(false);
      expect(typeof Humanoid.prototype.greet).toBe('function');
    });
    it('.greet() should return the string \'<object name> offers a greeting in <object language>.\'', () => {
      expect(humanoid.greet()).toBe(`${humanoid.name} offers a greeting in ${humanoid.language}.`);
    });
  });
});
