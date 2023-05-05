// define our tuple
let ourTuple1: readonly [number, boolean, string];
// initialize correctly
ourTuple1 = [5, false, 'Coding God was here'];
// throws error as it is readonly.
ourTuple1.push('Something new and wrong');
console.log(ourTuple1);