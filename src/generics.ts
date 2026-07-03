// Task: Create Your First Generic Function

// Create a generic function named identity.

// Requirements
// The function should use a generic type <T>.
// It should accept one parameter named value.
// It should return the same value.
// Call the function with:
// a string
// a number
// a boolean
// Print all the results.

// function identity <T> (value: T): T {
//   return value;
// };

// console.log(identity(10));
// console.log(identity("Luzi"));
// console.log(identity(true));

const identity = <T> (value: T) : T => {
  return value;
}

console.log(identity(10));
console.log(identity("Luzi"));
console.log(identity(true));


// Task: Create Generic Arrays

// Create the following arrays using the Generic Array syntax.

// Requirements

// Create:

// A numbers array containing at least 5 numbers.
// A names array containing at least 3 names.
// An isActive array containing boolean values.
// An employees array using a custom Employee type or interface.

// Finally, print all arrays to the console.

const number: Array<number> = [1, 2, 3, 4, 5];
const names: Array<string> = ["JAc", "Mica", "Luzi"];
const isActive: Array<boolean> = [true, true, false,];

interface Employee {
  id :number;
  name: string;
  age: number;
};

const Employees: Array<Employee> = [];

const employee1:Employee ={
  id: 1,
  name: "jac",
  age: 18,
};

Employees.push(employee1);
console.log(employee1)


// Task: Create a Generic Interface
// Create a generic interface named ApiResponse<T>.
// Requirements
// The interface should contain:
// success → boolean
// message → string
// data → Generic type (T)
// Then create two objects: Finally, print both objects.

interface ApiResponse <T> {
  success: boolean;
  message: string;
  data: T;
};

const apiResponse1: ApiResponse <string> = {
  success: true,
  message: "User fetched successfully",
  data: "Jac",
}
const apiResponse2: ApiResponse <number> = {
  success: false,
  message: "Somthing is worng",
  data: 500,
}

console.log(apiResponse1, apiResponse2);