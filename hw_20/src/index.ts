import { Dog } from "./Dog";
import { Library } from "./Library";
import { Motorcycle } from "./Motorcycle";
import { Vehicle } from "./Vehicle";

const myDog = new Dog("Chuck", "Dog", "French Bulldog");
myDog.sound();

const lib1 = new Library();
const lib2 = new Library();

lib1.addBook();
lib1.addBook();
lib2.addBook();
lib2.addBook();

console.log(Library.getTotalBooks());


const car = new Vehicle("ford", "fusion");
const bike = new Motorcycle("Yamaha", "R1", "petrol");

console.log(`Make: ${car.make}, model: ${car.model}`);
console.log(`Make: ${bike.make}, model: ${bike.model}, type: ${bike.type}`);


