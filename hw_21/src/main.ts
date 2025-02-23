import { Animal } from "./task1/Animal";
import { Cat } from "./task1/Cat";
import { Dog } from "./task1/Dog";
import { ColoredCircle } from "./task2/ColoredCircle";
import { ColoredRectangle } from "./task2/ColoredRectangle";
import { Appliance } from "./task3/Appliance";
import { Refrigerator } from "./task3/Refrigerator";
import { WashingMachine } from "./task3/WashingMachine";
import { CheckingAccount } from "./task4/CheckingAccount";
import { SavingsAccount } from "./task4/SavingsAccount";
import { Audio } from "./task5/Audio";
import { Media } from "./task5/Media";
import { Video } from "./task5/Video";

//1
const arr: Animal[] = [new Cat(), new Dog(), new Cat()];
console.log(arr);
arr.forEach(e => e.makeSound());

//2
const myRec = new ColoredRectangle("my rec", "red", 5, 10);
const myCircle = new ColoredCircle("my rec", "red", 6);

console.log(myRec.calculateArea());
console.log(myCircle.calculateArea());

//3
const appArr: Appliance[] = [new Refrigerator(), new WashingMachine()]

appArr.forEach(e => {
  e.turnOn();
  e.turnOff();
});
console.log("\n");

//4
const savings = new SavingsAccount(1000, 7); //7% interest
savings.deposit(500);
savings.applyInterest();
savings.withdraw(300);

console.log("\n");

const checking = new CheckingAccount(500);
checking.deposit(200);
checking.withdraw(100);
checking.getBalance();
checking.withdraw(800); //error

//5
const mediaArr: Media[] = [new Audio(), new Video()];
mediaArr.forEach(e => e.play());
