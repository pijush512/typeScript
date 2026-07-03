
// create object using interface
interface Iuser {
  readonly id: number;
  name: string;
  age: number;
  isActive: boolean;
  phone?: string;
}

const users: Iuser[] = [];

const user1: Iuser = {
  id: 1,
  name: "Jac",
  age: 20,
  isActive: true,
  phone: "017555555"
}
const user2: Iuser = {
  id: 2,
  name: "Mica",
  age: 22,
  isActive: false
}
const user3: Iuser = {
  id: 3,
  name: "Rica",
  age: 10,
  isActive: true,
  phone: "017995426"
}

users.push(user1);
users.push(user2);
users.push(user3);

// Task 1: Active Users print

const activeUser = users.filter((user) => user.isActive
);
console.log(activeUser);

// Task 2: Total Age
let totalAge: number = 0;
users.forEach(user => {
  totalAge += user.age;
});
console.log(totalAge);

// Task 3: Name Array
const nameArr = users.map(user => {
  return user.name;
});
console.log(nameArr);

//Task 4 find user-2
const findUser = users.find(user => user.id === 2)
console.log(findUser);
// Task -5 change user2 isActive value
user2.isActive = true;
console.log(user2);
//---------------- Type
// task-1: Create a User Profile System. Define UserId, UserName, UserAge, and UserStatus as Type Aliases. Then create variables named id, name, age, and status using those types and assign appropriate values.


  type UserId = number;
  type UserName = string;
  type UserAge = number;
  type UserStatus = "Admin" | "Creator" | "User";

const id: UserId = 10;
const name: UserName = "Jac";
const age: UserAge = 10;
const status: UserStatus = "Admin";

// Task-2: Create an Employee Management System.

// Create the following Type Aliases:

// EmployeeId
// EmployeeName
// EmployeeDepartment
// EmployeeRole
// EmployeeStatus

// Rules:

// EmployeeRole can only be "Frontend" | "Backend" | "Full Stack".
// EmployeeStatus can only be "Active" | "Inactive".

// Finally, create an employee1 object using those types.

type EmployeeId = number;
type EmployeeName = string;
type EmployeeDepartment = string;
type EmployeeRole = "Frontend" | "Backend" | "Full Stack";
type EmployeeStatus = "Active" | "InActive"

type Employee = {
  id: EmployeeId;
  name: EmployeeName;
  department: EmployeeDepartment;
  role: EmployeeRole;
  status: EmployeeStatus;
};

const employee1: Employee = {
  id: 1,
  name: "Luzi",
  department: "CSE",
  role: "Full Stack",
  status: "Active"
};

console.log(employee1)