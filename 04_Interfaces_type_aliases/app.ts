// Interfaces & Type Aliases

// interface: tell the shape of the objects
//types: make own user defined types
//Defining interfaces

function abcd(a: number, b: String) {
  // a.[method related to number]
  // b.[method related to string]
}
interface User {
  name: String;
  email: String;
  password: String;
}

function abx(obj: User) {
  console.log(obj.name);
}
abx({ name: "Rayied", email: "a@gmail.com", password: "1234" });

// function getdataofuser(obj: User) {
//   console.log(obj);
//   console.log(obj.name);
//   console.log(obj.email);
//   console.log(obj.password);
// }

// getdataofuser({name:"Rayied",email:"a@gmail.com",password:"1234})
// Using interfaces to define object shapes
// Extending interfaces
// Type aliases
// Intersection types
