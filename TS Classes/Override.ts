class Animal {
  public makeSound(): void {
    console.log("The animal makes a sound");
  }
}

class Dog extends Animal {
  public makeSound(): void {
    console.log("The dog barks");
  }
}

const animal = new Animal();
animal.makeSound(); // Output: "The animal makes a sound"

const dog = new Dog();
dog.makeSound(); // Output: "The dog barks"
