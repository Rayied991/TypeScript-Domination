/**
 * Basic types
 * Primitive types( number,string,boolean)
 * Arrays
 * Tuples
 * Enums
 * Any,Unknown, Void, Null, Undefined, Never
 */

//Primitive and reference

//Primitive types

let a = 12;
let name = "ray";
let issolve = true;

//Arrays
// let arr = [1, 2, 3, "rayied"];
// //here inferred
// let arr2 = [1, 2, 3, 4, 5, { name: "rased" }, { name: 12 }];

// let arr: number[] = [1, 2, 3, 4, "harsh"];

//tuples
let a2: [string, number] = ["ray", 100];
//array where size is fixed; location pe kya ayega batana
//is called tuples
let arr3: [number, string] = [12, "six"];

//enums
//key-value pairs

enum UserRoles {
  ADMIN = 12,
  GUEST = "guest",
  SUPER_ADMIN = "superadmin",
}
// UserRoles.SUPER_ADMIN
enum StatusCodes {
  ABANDONED = "500",
  NOT_FOUND = "404",
}
// StatusCodes.NOT_FOUND

//Any,Unknown, Void, Null, Undefined, Never
let s: number;
s = 12;
// s = true; //error

//ANY:stops typescript and everythings
// let s1; //by default type set as any
// s1 = 12;
//s1.touppercase();//error
//Unknown:
let s1: unknown;
s1 = 12;
s1 = "ray";

//type narrowing
if (typeof s1 === "string") s1.toUpperCase();

//Void->returns nothing
function abcd(): void {
  console.log("no return ");
}

function cde(): Boolean {
  return true;
}

//null:not found
let cafe: string | null = null;
// cafe=12;//error
// cafe="nn";//either string or null
//undefined

let c: undefined;
//never:never returns

// function cc(): never {
//   while (true) {}
// }

// cc();
// console.log("never run"); //never run
