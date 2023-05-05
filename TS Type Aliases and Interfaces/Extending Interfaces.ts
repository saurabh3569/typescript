// Extending an interface means you are creating a new interface with the same properties as the original, plus something new.
interface Rectangle {
  height: number;
  width: number;
}

interface ColoredRectangle extends Rectangle {
  color: string;
}

const coloredRectangle: ColoredRectangle = {
  height: 20,
  width: 10,
  color: "red",
};

console.log(coloredRectangle); //{ height: 20, width: 10, color: 'red' }
