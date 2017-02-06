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

waffle.init('waffle');
waffle.eat();


// In the above example you can see Object.create
// doesn't create a new object because line 13 effects
// waffle.eat(), whereas if Object.create was creating a new object
// it wouldn't have.
//
// It creates a new object and assigns food as the prototype. So if you call a 
// method on waffle and it doesn't exist it looks-up to food for the method.

console.log(food.isPrototypeOf(waffle)) // true

console.log(food.isPrototypeOf(23123123123)) // false
