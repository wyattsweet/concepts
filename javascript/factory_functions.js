// factories a functions that create objects and return them

// first an example of an es6 class

class Dog {
  constructor() {
    this.sound = 'woof'
  }

  talk() {
    console.log(this.sound);
  }
}

var charlie = new Dog();
charlie.talk(); // output: 'woof'

// problem
//$('button.myButton').click(sniffles.talk)

// in line 19 'this' no longer references sniffles


// To avoid having to use 'this' and 'bind' you can write this as 
// a factory function because javascript is cool and flexible like that

const dog = () => {
  const sound = 'woof'

  return {
    talk: () => console.log(sound) // thanks to clojures talk has access to sound
  }
}

var charlie = dog();
charlie.talk(); // outputs 'woof'

//$('button.myButton').click(sniffles.talk)
// Now the above will work because your not using 'this' to reference to sound

// most of the time factory functions are the way to go!
// unless you are creating more than 10,000 instances per frame because classes have 
// slightly better performance









