// a food prototype example

const food = {
  init: function (type) {
    this.type = type;
  },

  eat: function() {
    console.log('you ate the ' + this.type)
  }
}

food.eat = function() {
  console.log('YOU TOTALLY ATE THE ' + this.type.toUpperCase());
}

const waffle = Object.create(food);

waffle.init('eggo');
//waffle.eat();


// In the above example you can see Object.create on line 17
// doesn't create a new object because line 13 effects
// waffle.eat(), whereas if Object.create was creating a new object
// it wouldn't have.
//
// It creates a new object and assigns food as the prototype, or the object that is waffles
// "parent" so to speak. If you call a method on waffle and it doesn't exist on the waffle object
// it looks-up to food for the method, and if food has the method then it calls it.

//console.log(food.isPrototypeOf(waffle)) // true
//console.log(food.isPrototypeOf(23123123123)) // false


////////////////////////////////////////
//  Another Example
////////////////////////////////////////

function Animal(type) {
  this.type = type;
}

Animal.prototype.eat = function(food) {
  console.log('The', this.type, 'just ate the', food);
}

//var bear = new Animal('bear');
//bear.eat('food');

// let's say we want to break it down further and create
// another constructor function that inherits from Animal
// and adds a few more methods...

function Bear() {
  // In order to set this.type from Animal we can do...
  Animal.call(this, 'bear');
}
  
Bear.prototype = Object.create(Animal.prototype);

Bear.prototype.talk = function() {
  console.log('ROOAARRRR!!!'); 
}

var grizzly = new Bear();
grizzly.type // bear
grizzly.eat('pizza'); // The bear just ate the pizza
grizzly.talk(); // ROAAARRRR!!!





