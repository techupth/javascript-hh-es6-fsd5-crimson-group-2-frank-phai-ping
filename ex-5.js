function sum(...rest) {
  // Start coding here !

  console.log(rest);

  function plus(acc, cur) {
    return acc + cur;
  }
  let total = rest.reduce(plus, 0);
  return total;
}

let result1 = sum(1, 2, 3, 4, 5, 6, 7, 8);
let result2 = sum(1, 2, 3, 4);

console.log(`Result ${result1}`);
console.log(`Result ${result2}`);
