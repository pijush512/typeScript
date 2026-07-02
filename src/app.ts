let a:number = 10;
console.log(a);

// !! Data type
const name: string = "Mica";
const age: number = 22;
let isActive: boolean = true;

console.log(name, age, isActive);

// Array

let digits: number [] = [1,2,3,4,5];
const names: string [] = ["Mica", "Johan", "Luzi"];

console.log(digits, names);

// Object using type
type users = {
  id: number,
  name: string,
  class: string,
  age: number,
  isActive: boolean
};

let user1: users = {
  id: 1,
  name: "Mica",
  class: "two",
  age: 7,
  isActive: true
};

let user2: users = {
  id: 2,
  name: "Luzi",
  class: "five",
  age: 10,
  isActive: false
};

console.log(user1, user2)
