import "./basic"

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
type Users = {
  id: number,
  name: string,
  class: string,
  age: number,
  isActive: boolean
};

let user1: Users = {
  id: 1,
  name: "Mica",
  class: "two",
  age: 7,
  isActive: true
};

let user2: Users = {
  id: 2,
  name: "Luzi",
  class: "five",
  age: 10,
  isActive: false
};

console.log(user1, user2);


// InterFace
interface IProduct {
  id: number;
  title: string;
  price: number;
  category: string;
  stock: number;
  isAvailable: boolean;
}

const products : IProduct [] = [];

const product1 : IProduct = {
  id: 1,
  title: "Potato",
  price: 10,
  category: "Crakers",
  stock: 50,
  isAvailable: true,
};
const product2 : IProduct = {
  id: 2,
  title: "Mr.Cookis",
  price: 10,
  category: "Biskit",
  stock: 100,
  isAvailable: true,
};
const product3 : IProduct = {
  id: 3,
  title: "Fanta",
  price: 25,
  category: "Soft Drinks",
  stock: 20,
  isAvailable: false,
};

products.push(product1);
products.push(product2);
products.push(product3);

products.forEach((product) => {
  console.log(`Id:${product.id}, Title: ${product.title}, Price: ${product.price},`)

})




// Function
function sum (a: number, b: number): number {
  let sum: number = a + b;
  return sum;
}

const result: number = sum (10, 10);
console.log(result)



