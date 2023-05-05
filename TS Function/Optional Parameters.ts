// the `?` operator here marks parameter `c` as optional
function add(a: number, b: number, c?: number) {
  return a + b + (c || 0);
}
const addResult = add(4, 5);
console.log(addResult); //20