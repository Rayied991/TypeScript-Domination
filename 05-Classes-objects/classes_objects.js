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
    constructor(brand, price, color, material) {
        this.brand = brand;
        this.price = price;
        this.color = color;
        this.material = material;
    }
}
class Music {
    constructor(name, artist, thumbnail = "semethumbnail.jpg", length, free) {
        this.name = name;
        this.artist = artist;
        this.thumbnail = thumbnail;
        this.length = length;
        this.free = free;
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
let b2 = new BottleMaker("Milton", 1200, "yellow", "metal");
let h1 = new HumanMaker("Rayied", true);
// let h2 = new HumanMaker2("Rayied");
let b3 = new BottleMaker("Cello", 100, "transparent", "plastic");
let ms = new Music("Sanam re", "atif aslam", "", 200, true);
//# sourceMappingURL=classes_objects.js.map