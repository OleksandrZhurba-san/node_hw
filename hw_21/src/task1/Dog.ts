import { Animal } from "./Animal"

export class Dog extends Animal {
  name: string;
  constructor(){
    super();
    this.name = "Dog"
  }
  makeSound(): void {
      console.log("Bark");
  }
};
