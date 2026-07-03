// Task: Create a String Enum
// Create an enum named UserRole.
// Requirements
// The enum should contain the following values:
// Admin
// User
// Manager
// Each value should be a string.
// Then:
// Create a variable named role.
// Assign it the value UserRole.Admin.
// Print the value to the console.

enum UserRole {
  Admin = "Admin",
  User = "User",
  Manager = "Manager"
};
const role = UserRole.Admin;
console.log(role);


// Task: Create an Order Status Enum
// Requirements
// Create an enum named OrderStatus.
// The enum should contain the following string values:
// Pending
// Processing
// Shipped
// Delivered
// Cancelled
// Then:
// Create a variable named currentStatus.
// Assign it the value OrderStatus.Processing.
// Print the value.
// Create a function named printOrderStatus() that:
// accepts one parameter of type OrderStatus
// prints the status to the console

enum OrderStatus {
  Pending = "Pending",
  Processing = "Processing",
  Shipped = "Shipped",
  Delivered = "Delivered",
  Cancelled = "Cancelled",
};

const currentStatus = OrderStatus.Processing;
console.log(currentStatus);


function printOrderStatus(status: OrderStatus): void {
  console.log(status);
};

printOrderStatus(OrderStatus.Pending);