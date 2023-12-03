let x = 1;
exampleVar();

// The 'let' and 'const' variables are limited in scope to the block, between the curly braces {}.
function exampleVar() {
  if (true) {
    let x = 2;
    console.log("Block Scope: ", x); // outputs "2"
  }
  console.log("Function Scope: ", x); // outputs "1"
}

console.log("Global Scope: ", x); // outputs "1"