"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// classes & objects
class Device {
    constructor() {
        this.name = "lg";
        this.price = 12000;
        this.category = "digital";
    }
}
class Bottle {
    constructor() {
        this.radius = 120;
        this.price = 100;
        this.color = "blue";
    }
}
let d1 = new Device();
let d2 = new Device();
let b1 = new Bottle();
// Constructors
// ek aisi machine jo ki produce kr rahi hai final consumable product.=constructor
// constructor -> human maker
// constructor-> biscuit maker
class BottleMaker {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
class HumanMaker {
    constructor(name, isHandsome) {
        this.name = name;
        this.isHandsome = isHandsome;
        this.age = 12;
    }
}
//wrong
// class HumanMaker2 {
// constructor(public a: string, age: number = 0) {}
// }
let b2 = new BottleMaker("Milton", 1200);
let h1 = new HumanMaker("Rayied", true);
// let h2 = new HumanMaker2("Rayied");
//# sourceMappingURL=classes_objects.js.map