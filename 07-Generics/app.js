// Generics
//Generic functions
// Generic Interfaces
// Generic classes
// one function that except any values and prints
// function logger(a:any){
//     // for any typescript doesnt work
// }
// function logger(a:any){
// }
// logger("hey");
// logger(12);
// logger(true)
// logger(null)
// logger(undefined)
// function while using we can tell that function argument can be treated which type.
function log(val) {
    console.log(val);
}
function abcd(a, b, c) {
    log(a);
}
abcd("Hello", "world", 4);
function foods(obj) {
    log(obj);
    log(obj.key);
}
foods({ name: "foo", age: 25, key: "Asas" });
// Generic classes
var BottleMaker = /** @class */ (function () {
    function BottleMaker(key) {
        this.key = key;
    }
    return BottleMaker;
}());
var b1 = new BottleMaker("hey");
var b2 = new BottleMaker(12);
console.log(b1, b2);
