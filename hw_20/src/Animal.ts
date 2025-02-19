export class Animal {
  name: string;
  species: string;

  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
  }

  sound() {
    console.log("The animal make a sound");
  }

}
