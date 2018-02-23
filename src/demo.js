// // Pseudo Classical Inheritance

// // ############################# FRUIT #############################

// function Fruit(attrs) {
//     this.type = attrs.type;
//     this.name = attrs.name;
//     this.isRipe = attrs.isRipe;
//     this.calories = attrs.calories;
// }

// Fruit.prototype.shipped = function (destination) {
//     console.log(`Shipping ${this.name} to ${destination}`);
// };

// Fruit.prototype.calculateCals = function () {
//     console.log(`Calories in ${this.name} are ${this.calories * .45}`);
// };

// // ############################# BANANA #############################

// function Banana(bananaAttrs) {
//     Fruit.call(this, bananaAttrs);
//     this.doMonkeysLikeIt = bananaAttrs.doMonkeysLikeIt;
// }

// Banana.prototype = Object.create(Fruit.prototype);

// Banana.prototype.checkIfMonkeysLikeIt = function () {
//     if (this.doMonkeysLikeIt) {
//         return 'Yes! Monkeys love Bananas';
//     } else {
//         return 'Nope! Monkeys are no longer into bananas.';
//     }
// };

// // ############################# KIWI #############################

// function Kiwi(kiwiAttrs) {
//     Fruit.call(this, kiwiAttrs);
//     this.isFuzzy = kiwiAttrs.isFuzzy;
// }

// Kiwi.prototype = Object.create(Fruit.prototype);

// Kiwi.prototype.checkIfFuzzy = function () {
//     if (this.isFuzzy) {
//         return true;
//     } else {
//         return false;
//     }
// };

// // ############################# Create the Objects #############################

// const newBanana = new Banana({
//     doMonkeysLikeIt: true,
//     type: 'Tree',
//     name: 'Banana',
//     isRipe: false,
//     calories: 0.1
// });

// const newKiwi = new Kiwi({
//     isFuzzy: true,
//     type: 'Tree',
//     name: 'Kiwi',
//     isRipe: false,
//     calories: 0.7
// });

// console.log(newBanana.checkIfMonkeysLikeIt());
// newBanana.calculateCals();
// newBanana.shipped('Alaska');
// newKiwi.calculateCals();
// newKiwi.shipped('Dominican Republic');
// console.log(newKiwi.checkIfFuzzy());
