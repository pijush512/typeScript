
// Task 1: User Management. Create a user object, user1, user2, user3

const user1 = {
  id: 1,
  name: "Pijush",
  email: "pijush@gmail.com",
  age: 20,
  isActive: true,
};

const user2 = {
   id: 2,
  name: "jac",
  email: "jac@gmail.com",
  age: 18,
  isActive: false,
}
const user3 = {
   id: 3,
  name: "mca",
  email: "mica@gmail.com",
  age: 19,
  isActive: true,
}
// ------------------------
// Task: 2 create a user array

const users = [user1, user2, user3];

// Task-3 formatting print users array

users.forEach((user) => {
  const result = 
    `
    ID:${user.id}
    Name:${user.name}
    Email:${user.email}
    Age:${user.age},
    Active:${user.isActive}
    `
    console.log(result)
  
})

// Task-4 print al of Active User
users.filter((user) => {
  if(user.isActive === true) {
    console.log(user)
  }
})

// Task-5 find sum all user age 

let sum: number = 0;
users.map((user) => {
  let age: number = user.age;
  sum = sum + age;
})
console.log(sum);

// TAsk find user name create a new array 

let newArr: string [] = [];
users.map((user) => {
  let userName: string = user.name;
  newArr.push(userName)
})

console.log(newArr);


// For termanil check 
//!! npx tsx src/basic.ts
