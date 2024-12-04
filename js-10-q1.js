// Using an example, explain the difference between block,global and function scope in variables.
let global = "global";

function showglobal() {
    console.log(global); 
}

console.log(global); 
// we can access them anywhere

function greet() {
    let name = "mobina";
    console.log(`hello, ${name}`);
  }
  
  greet();
  console.log(name); 

//   only works inside the function

if (true) {
    let blockscp = "block scoped";
    console.log(blockscp); 
  }
  
  console.log(blockscp); 
//   only works inside the {}
  
