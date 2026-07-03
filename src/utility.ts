// Task: Update User Profile Using Partial
// Requirements
// Create an interface named User with the following properties:
// id → number
// name → string
// email → string
// age → number
// Create a variable named updatedUser using Partial<User>.
// Update only the following properties:
// name
// age
// Print the object to the console.

interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}
const user: User = {
  id: 1,
  name: "Jac",
  email: "jac@gmail.com",
  age: 22,
};
const updatedUser: Partial<User> = {
  name: "Lee",
  age: 21,
};

console.log(updatedUser);

// ask: Create a Required User Object
// Requirements
// Create an interface named UserProfile.

// It should contain:

// id → number
// name? → string
// email? → string
// phone? → string

// Notice that name, email, and phone are optional.

// Create a variable named completeUser using Required<UserProfile>.
// Provide all properties.
// Print the object.

interface UserProfile {
  id: number;
  name?: string;
  email?: string;
  phone?: string;
}
const completeUser: Required<UserProfile> = {
  id: 1,
  name: "Jac",
  email: "jac@gmail.com",
  phone: "5555",
};
console.log(completeUser);

// Task: Create a User Contact Type Using Pick
// Requirements
// Create an interface named User with the following properties:
// id
// name
// email
// age
// isActive
// Create a new type named UserContact using Pick<User, ...>.
// UserContact should contain only:
// name
// email
// Create a variable named contact.
// Assign appropriate values.
// Print it.

interface User {
  id: number;
  name: string;
  email: string;
  age: number;
  // isActive: boolean;
}

type UserContact = Pick<User, "name" | "email">;
const contact: UserContact = {
  name: "Jac",
  email: "jac@gmail.com",
};
console.log(contact);

// Create a Product interface, then create a CustomerProduct type using Omit that removes the supplierPrice property. Finally, create a product object of type CustomerProduct and print it.

interface Product {
  id: number;
  title: string;
  price: number;
  supplierPrice: number;
  category: string;
  stock: number;
  isAvailable: boolean;
};

type CustomerProduct = Omit<Product, "supplierPrice">;
const product: CustomerProduct = {
  id: 1,
  title: "Priemeo",
  price: 500000,
  category: "car",
  stock: 50,
  isAvailable: true
}



interface BankAccount {
  accountNumber: number;
  holderName: string;
  balance: number;
}

const account: Readonly<BankAccount> = {
  accountNumber: 12345,
  holderName: "Jac",
  balance: 5000,
};
