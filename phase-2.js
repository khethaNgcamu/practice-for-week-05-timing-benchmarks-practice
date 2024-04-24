const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
  // Fill this in
  let sum = 0;
  for(let i = 1; i <= 10; i++){
    sum += addNums(i * increment);
  }
  console.log("addNums10 sum:", sum); // Debug statement
  return sum;
  }

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
  // Fill this in
  let total = 0;

  for(let i = 1; i <= 10; i++){
    total += addManyNums(i * increment);
  }
  console.log("addManyNums10 total:", total); // Debug statement
  return total;
}

module.exports = [addNums10, addManyNums10];