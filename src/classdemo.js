class Parent {
  constructor(attributes) {
      this.gender = attributes.gender;
      this.age = attributes.age;
      this.name = attributes.name;
      this.homeTown = attributes.homeTown;
    }
  speak() {
      return `Hello, my name is ${this.name}`;
    }
}

class Child extends Parent {
  constructor(childAttrs) {
      super(childAttrs);
      this.isChild = childAttrs.isChild;
    }
  checkIfChild() {
      return `${this.name} is child? ${this.isChild}`;
    }
}

class GrandChild extends Child {
  constructor(gcAttrs) {
      super(gcAttrs);
      this.isGrandChild = gcAttrs.isGrandChild;
    }
  checkIfGrandChild() {
      return `${this.name} is child? ${this.isGrandChild}`;
    }
}

const fred = new Parent({
  gender: 'Male',
  age: 35,
  name: 'Fred',
  homeTown: 'Bedrock',
});

const pebbles = new Child({
  gender: 'Female',
  age: 3,
  name: 'Pebbles',
  homeTown: 'Bedrock',
  isChild: true,
});

const bambamJr = new Child({
  gender: 'Male',
  age: 3,
  name: 'BambamJrB',
  homeTown: 'Bedrock',
  isGrandChild: true,
});
