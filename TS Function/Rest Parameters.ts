// Rest parameters can be typed like normal parameters, but the type must be an array as rest parameters are always arrays.
function sum(...numbers: number[]) {
  return numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
}

console.log(sum(1, 2, 3, 4, 5)); // Output: 15
console.log(sum(2, 4, 6)); // Output: 12
