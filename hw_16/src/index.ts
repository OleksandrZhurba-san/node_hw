//1
function greeUser(userName: string): void {
  console.log(`Hello, ${userName}`)
}
greeUser("Alex")

interface IPerson {
  name: string;
  age: number;
  city: string;
}

//2
function printPersonInfo(person: IPerson): void {
  console.log(`Name: ${person.name}, Age: ${person.age}, City: ${person.city}`)
}

const myPerson: IPerson = {
  name: "Alex",
  age: 35,
  city: "Dortmund",
}

printPersonInfo(myPerson);

//3
function squareNumber(num: number): number {
  return num ** 2;
}
console.log(squareNumber(5));

//4
function isEven(num: number): boolean {
  return num % 2 === 0 ? true : false;
}

console.log(isEven(4))

//5
interface IStudent {
  name: string;
  grade: number;
}
function printStudentInfo(student: IStudent): string {
  return `Student: ${student.name}, Grade: ${student.grade}`
}

const newStudent: IStudent = {
  name: "Alex",
  grade: 5,
}

console.log(printStudentInfo(newStudent));
//6
function logMessage(msg: string): void {
  console.log(msg);
}
logMessage("here is your log message");
