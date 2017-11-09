# JavaScript II

## Topics

* recursion - when it function calls itself until it doesn't
* base case - a "stopper" solution that has a known solution that returns out of the function.
* constructors - functions that create objects of the same type with set variables.
* `new`- keyword used to create an instance of an object
* `prototype` - All objects inherit properties and methods from the prototype that it sits upon.
* `.bind` - returns a copy of the function and forces the function to reference the object where it's bound to.
*`.call` - attaches a function to the object passed in as an arguement temporarily
*`.apply` - allows you to the same thing as call, except you can pass in arrays for the 2nd arguement after the object.
* `this` - refers to the context where the function is being call and refers to that object
* `class` - a blueprint for objects that has properties and methods.
* methods - Is a function that belongs to a class
* inheritance - when a class extends another class and gets access to the properties and methods of the parent
* prototype methods vs methods in the constructor (Methods that inherit via the prototype chain can be changed universally for all instances) Prototype allows you to add methods to already existing objects, while the constructor methods are made on new objects when they are instianated.
* class vs instance - class methods require an object to be made from the class adn the method is ran on each instantiation depending on which one calls it, while static is associatd with the class and does not need an instantion. 


## Instructions

* Fork and clone this repo.
* Run the command `npm i` to install needed node packages.
* Run the command `npm test <filename>` to run the tests. (Example: `npm test prototype`)
* Work through the files and make the tests pass.
* Suggested order: `prototype.js`, `class.js`, `recursion.js`, `this.js`.
* When you are finished submit a pull request.
* Make commits often.  A good practice would be to make a commit when you get a test, or set of tests, to pass.
