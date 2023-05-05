// the `: number` here specifies that this function returns a number
function getTime(): number {
  return Date.now();
}

const time = getTime();
console.log(time);
