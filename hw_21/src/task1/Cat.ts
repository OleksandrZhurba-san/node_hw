import { Animal } from "./Animal"

export class Cat extends Animal {
  name: string;

  constructor() {
    super();
    this.name = "Cat";
  }
  makeSound(): void {
      console.log("Meow");
  }
}
