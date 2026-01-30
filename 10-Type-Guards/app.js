// Type Guards and TypeScript Utility Types
// Using typeof and instanceof
// Partial,Required,Readonly
// Type guards-> type narrowing
function abcd(arg) {
    if (typeof arg === "number") {
        // arg. [all related to number]
        return "number;";
    }
    else if (typeof arg === "string") {
        // arg. [alll related to string]
        return "string";
    }
    else {
        return "Weird";
    }
}
console.log(abcd(12));
console.log(abcd("hello"));
console.log(abcd(true));
// typeof instanceof
var TvRemote = /** @class */ (function () {
    function TvRemote() {
    }
    TvRemote.prototype.switchTVoff = function () {
        console.log("turn off");
    };
    return TvRemote;
}());
var CarRemote = /** @class */ (function () {
    function CarRemote() {
    }
    CarRemote.prototype.switchCaroff = function () {
        console.log("turn off car");
    };
    return CarRemote;
}());
var tv = new TvRemote();
var car = new CarRemote();
function switchedoff(device) {
    if (device instanceof TvRemote) {
        device.switchTVoff();
    }
    else if (device instanceof CarRemote) {
        device.switchCaroff();
    }
}
console.log(switchedoff(tv));
console.log(switchedoff(car));
