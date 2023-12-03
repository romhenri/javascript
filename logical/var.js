var x = 1;
exampleVar();

// The 'var' variables are limited in scope to the function.
function exampleVar() {
  if (true) {
    var x = 2;
    console.log("Block Scope: ", x); // outputs "2"
  }
  console.log("Function Scope: ", x); // outputs "1"
}

console.log("Global Scope: ", x); // outputs "1"