var me = 'Wyatt Earp'

function greetMe() {
  console.log('hello,', me + '!');
}

greetMe(); // hello, Wyatt Earp!

// greetMe() is called without passing name in, so when console.log calls me inside of greetMe it has
// the ability to look-up to its parent scope for the 'me' variable. Some languages do not allow you to 
// do this, you would be required to pass in me.

var me = 'somebody'

function greetMe() {
  console.log('hello,', me + '!');
}

me = 'Doc Holiday'

greetMe(); // hello, Doc Holiday!
// clojures look-up and take the final result of the outer scope
//

// Clojures are one of those things that permiates the entire language
// It makes a lot of things possible, like callbacks
