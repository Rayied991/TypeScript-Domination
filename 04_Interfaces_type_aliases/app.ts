// Interfaces & Type Aliases

// interface: tell the shape of the objects
//types: make own user defined types
//Defining interfaces

// function abcd(a: number, b: String) {
// a.[method related to number]
// b.[method related to string]
// }
interface User {
  name: string;
  email: string;
  password: string;
  gender?: string; //optional
}

function abx(obj: User) {
  console.log(obj.name);
  console.log(obj.gender);
}
abx({ name: "Rayied", email: "a@gmail.com", password: "1234" });
abx({ name: "Rayied", email: "a@gmail.com", password: "1234", gender: "male" });


