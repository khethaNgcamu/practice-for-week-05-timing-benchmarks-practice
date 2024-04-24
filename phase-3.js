const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
  // Copy your `addNums10` code here
  function addNums10(increment) {
    // Fill this in
    let sum = 0;
    for(let i = 1; i <= 10; i++){
      sum += addNums(i * increment);
    }
    return sum;
    }
  // Then, add timing code
  const startTime = Date.now();
  const result = addNums10(increment);
  const endTime = Date.now();

  // Your code here

  // Calculate the execution time
  const executionTime = endTime - startTime;

 // Log the execution time
  console.log(`Execution time for addNums10(${increment}): ${executionTime} milliseconds`);
 
 // Return the result
  return result;

}


function addManyNums10Timing(increment) {
// Copy your `addManyNums10` code here
function addManyNums10(increment) {
  // Fill this in
  let total = 0;

  for(let i = 1; i <= 10; i++){
    total += addManyNums(i * 10);
  }
  return total;
}
// Then, add timing code
const start = Date.now();
const result2 = addManyNums10(increment);
const end = Date.now();

  // Calculate the execution time
  const executionTime = end - start;

// Your code here
  // Log the execution time
  console.log(`Execution time for addManyNums10(${increment}): ${executionTime} milliseconds`);

  // Return the result
  return result2;

}


n = 1000000
console.log(`addNums(${n}): `);
addNums10Timing(1000000);

console.log("\n***********\n");

n = 1000
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);