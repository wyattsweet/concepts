// some simple examples of how scope works in javascript
//
// Scope is essentially a list of all the declared identifiers (variables), it enforces strict rules to how these are accessed based on where the code is currently being executed.

var a = 2;

function getNumber(num) {
  var a = num;
  console.log(a);
}

getNumber(12); // 12
console.log(a); // 2

// In the above function getNumber a new variable 'a' is declared within the function.
// When console.log looks for the variable a it first looks within the scope of the object from which it's being called

function noNumber() {
  console.log(a);
}

noNumber() // 2

// When noNumber is called, it first looks within the scope for the variable a, since there isn't one there it then looks to 
// the outer scope for the variable and finds that it's equal to 2.
//


//**************************
// Lexical Scope
//************************** 

// Lexical scope defines the rules for how variable names are resolved in nested functions, inner functions contain the scope of their
// outer parent and also inherit variables from these outer functions. 

function fun() {
  console.log(x);
}

function dummy() {
  fun();
}

dummy();





