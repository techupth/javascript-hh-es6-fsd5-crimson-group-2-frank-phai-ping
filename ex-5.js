function sum(...numbers) {
  // Start coding here !
  console.log(numbers)
  //<------------------------------->
  // let calculateNumbers = (acc,curr) =>{
  //   return acc+curr;
  // }
  // let result = numbers.reduce(calculateNumbers,0);
  // return result;
  //<------------------------------->
  let result = numbers.reduce(((acc,curr)=>{
    return acc+curr;
    }),0);
    return result
}

let result1 = sum(1, 2, 3, 4, 5, 6, 7, 8);
let result2 = sum(1, 2, 3, 4);

console.log(`Result ${result1}`);
console.log(`Result ${result2}`);
