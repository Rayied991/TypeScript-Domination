// classes & objects
class Device {
  name = "lg";
  price = 12000;
  category = "digital";
}
class Bottle {
  radius = 120;
  price = 100;
  color = "blue";
}

let d1 = new Device();
let d2 = new Device();

let b1 = new Bottle();

// Constructors
// ek aisi machine jo ki produce kr rahi hai final consumable product.=constructor
// constructor -> human maker
// constructor-> biscuit maker

class BottleMaker {
  constructor(public name: string, public price: number) {}
}
class HumanMaker {
  age = 12;
  constructor(public name: string, public isHandsome: boolean) {}
}
//wrong
// class HumanMaker2 {
// constructor(public a: string, age: number = 0) {}
// }
let b2 = new BottleMaker("Milton", 1200);
let h1 = new HumanMaker("Rayied", true);
// let h2 = new HumanMaker2("Rayied");
