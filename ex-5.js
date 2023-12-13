function sum(...number) {
  console.log(number)

function addNumber(acc, crr){
  return acc + crr;
  }
let total = number.reduce(addNumber, 0)
  return total
}

let result1 = sum(1, 2, 3, 4, 5, 6, 7, 8);
let result2 = sum(1, 2, 3, 4);

console.log(`Result ${result1}`);
console.log(`Result ${result2}`);
