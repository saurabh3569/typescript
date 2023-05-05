// Typing named parameters follows the same pattern as typing normal parameters.
function divide({ dividend, divisor }: { dividend: number; divisor: number }) {
  return dividend / divisor;
}

divide({ dividend: 5, divisor: 4 }); // returns 1.25
