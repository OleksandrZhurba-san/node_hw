import { Animal } from "./Animal";

export class Dog extends Animal {
  breed: string;
  constructor(name: string, species: string, breed: string) {
    super(name, species);
    this.breed = breed;
  }
  sound(): void {
    console.log("The dog barks")
  }
}


