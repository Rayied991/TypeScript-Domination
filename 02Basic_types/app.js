"use strict";
/**
 * Basic types
 * Primitive types( number,string,boolean)
 * Arrays
 * Tuples
 * Enums
 * Any,Unknown, Void, Null, Undefined, Never
 */
Object.defineProperty(exports, "__esModule", { value: true });
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
let a2 = ["ray", 100];
//array where size is fixed; location pe kya ayega batana
//is called tuples
let arr3 = [12, "six"];
//enums
//key-value pairs
var UserRoles;
(function (UserRoles) {
    UserRoles[UserRoles["ADMIN"] = 12] = "ADMIN";
    UserRoles["GUEST"] = "guest";
    UserRoles["SUPER_ADMIN"] = "superadmin";
})(UserRoles || (UserRoles = {}));
// UserRoles.SUPER_ADMIN
var StatusCodes;
(function (StatusCodes) {
    StatusCodes["ABANDONED"] = "500";
    StatusCodes["NOT_FOUND"] = "404";
})(StatusCodes || (StatusCodes = {}));
// StatusCodes.NOT_FOUND
//Any,Unknown, Void, Null, Undefined, Never
let s;
s = 12;
// s = true; //error
//ANY:stops typescript and everythings
// let s1; //by default type set as any
// s1 = 12;
//s1.touppercase();//error
//Unknown:
let s1;
s1 = 12;
s1 = "ray";
//type narrowing
if (typeof s1 === "string")
    s1.toUpperCase();
//Void->returns nothing
function abcd() {
    console.log("no return ");
}
function cde() {
    return true;
}
//null:not found
let cafe = null;
// cafe=12;//error
// cafe="nn";//either string or null
//undefined
let c;
//never:never returns
// function cc(): never {
//   while (true) {}
// }
// cc();
// console.log("never run"); //never run
//# sourceMappingURL=app.js.map