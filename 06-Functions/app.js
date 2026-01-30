// Functions
// Function types 
// Optional & default parameters
//Rest parameters
// Overloads
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// function abcd():string{
//     return "Hey";
// }
function abcd() {
}
// Function types
function abc(name, cb) {
}
abc("harsh", function (value) { return console.log(value); });
function abcdef(name, age, cb) {
    cb("hey");
}
abcdef("ray", 25, function (arg) { return console.log("abcdef", arg); });
// Optional parameters
function abca(name, age, gender) {
}
abca("ray", 25, "male");
abca("alu", 22); //optional for gender
//  default parameter
function abcab(name, age, gender) {
    if (gender === void 0) { gender = "not to be disclosed"; }
    console.log(name, age, gender);
}
abcab("ray", 25);
// Rest parameters
//  ... rest/spread operator
// In function parameter if ... used then all the arguments are stored in a variable as an array.
function sum() {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
    }
    console.log(arr);
}
sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
function friends() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    console.log(args);
    console.log(args[0]);
}
friends("ray", "angi", "alif");
// spread operator
var arr = [12, , 34, 5, 6];
var arr2 = __spreadArray([], arr, true);
function overload(a, b) {
    if (typeof a === "string" && b === "undefined") {
        console.log("hey");
    }
    if (typeof a === "string" && typeof b === "number") {
        return 123;
    }
    else {
        throw new Error("something is wrong");
    }
}
overload("hel");
overload("hey", 12);
