// For parameters with default values, the default value goes after the type annotation:
function pow(value: number, exponent: number = 2) {
  return value ** exponent;
}
const powResult = pow(5);
console.log(powResult); //25
