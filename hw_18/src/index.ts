//1
type Admin = {
  name: string;
  permissions: string[];
}
type User = {
  name: string;
  email: string;
}

type AdminUser = User & Admin;

const newAdminUser: AdminUser = {
  name: "Alex",
  email: "alex@test.co",
  permissions: ["admin"]
}

//2
type Engine = {
  type: string;
  hp: number;
}
type Car = {
  make: string;
  model: string;
  engine: Engine;
}
const newCar: Car = {
  make: "mercedes",
  model: "slc-300",
  engine: {
    type: "petrol",
    hp: 250,
  }
}

function carInfo(car: Car): void {
  console.log(`Make: ${car.make}, Model: ${car.model}, Engine type: ${car.engine.type}, HP: ${car.engine.hp}`)
}
carInfo(newCar);

//3
interface IProduct {
  name: string;
  price: number;
}

function calcDiscount(product: IProduct, discount: number): number {
  return product.price * (1 - 100 / discount);
}

//4
interface IEmployee {
  name: string;
  salary: number;
}

const employees: IEmployee[] = [
  { name: "Alex", salary: 80000 },
  { name: "Anastasiia", salary: 90000 },
  { name: "Jana", salary: 50000 },
]

function employesSalary(employees: IEmployee[]): number[] {
  return employees.map(e => e.salary);
}

console.log(employesSalary(employees));
//5
interface IPerson {
  firstName: string;
  lastName: string;
}

interface IStudent extends IPerson {
  grade: number;
}

const newStudent: IStudent = {
  firstName: "Alex",
  lastName: "Zhurba",
  grade: 5,
}
function fullStudentName(student: IStudent): void {
  console.log(`${student.firstName} ${student.lastName} ${student.grade}`)
}
fullStudentName(newStudent);

//6
interface IConcatString {
  (str1: string, str2: string): string;
}

const concatString: IConcatString = (str1, str2) => {
  return `${str1} ${str2}`
}

console.log(concatString("hello", "world"));
