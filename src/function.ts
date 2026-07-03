// Task-1: Create a function named calculateTotal() that accepts two number parameters (price and quantity). The function should return the total price (price × quantity). Then call the function and print the result in the console.

function calculateTotal(price: number, quantity: number): number {
  const result: number = price * quantity;
  return result;
};

console.log(calculateTotal(10,5));

// Create a function named printStudentInfo() that accepts two parameters: name (string) and age (number).
// The function should not return anything. It should only print the student's information to the console.
// Example output: 
// Student Name: Pijush
// Age: 20

function printStudentInfo(name: string, age: number): void {
  const output = 
  `Student Name: ${name}
  Age: ${age}`
console.log(output);
  
};

 printStudentInfo("Jac", 10);
  
// Task-3: Create a function named createAccount().
// Parameters:
// username → Required (string)
// email → Required (string)
// phone → Optional (string)
// The function should return void and print the account information.

// Call the function twice:
// 1. With a phone number.
// 2. Without a phone number.

function createAccount(userName: string, email: string, phone?: number): void {
  console.log(userName, email, phone)
}

createAccount("Mica", "mica@gmail.com", 123458);
createAccount("Mica", "mica@gmail.com");

// Task-4: Create a function named createUser().

// Requirements:
// The function should accept two parameters:
// name → Required (string)
// role → Default value should be "User"
// The function should have a return type of void.
// It should print the following information to the console. 
// Name: Pijush
// Role: Admin

// Name: Mica
// Role: User

function createUser(name: string, role: "Admin" | "User" ="User" ): void {
  const output =
  `Name: ${name}
  Role: ${role}`
  console.log(output);
}
createUser("JAc", "Admin");
createUser("JAc");
// arrow function
// Create an arrow function named calculateDiscount.

// Requirements
// The function should accept two parameters:
// price (number)
// discount (number)
// The function should return the final price after subtracting the discount from the original price.
// The return type should be number.
// Call the function and print the result to the console.

const calculateDiscount = (price: number, discount: number): number => {
  return price - discount;
} ;

console.log(calculateDiscount(1000, 200));

// Create an arrow function named checkStock.
// Requirements
// The function should accept two parameters:
// productName (string)
// stock (number)
// If the stock is greater than 0, return:
// "Laptop is Available"
// Otherwise, return:
// "Laptop is Out of Stock"
// The return type should be string.
// Use the ternary operator (? :) instead of if...else.
// Call the function twice with different values and print the results.

const checkStock = (productName: string, stock: number): string => {
  if(stock > 0) {
    return `${productName} is Available`;
  }
  else {
    return `${productName} is Out of Stock`;
  }
};

console.log(checkStock("Laptop", 10))
console.log(checkStock("Head Phone", 0));

const multiply: (num1: number, num2: number) => number =(num1, num2) => {
  return num1 * num2;
}
console.log(multiply(5, 2));
