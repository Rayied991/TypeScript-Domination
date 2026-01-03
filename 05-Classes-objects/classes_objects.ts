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
  constructor(
    public brand: string,
    public price: number,
    public color: string,
    public material: string
  ) {}
}

class Music {
  public name;
  public artist;
  public thumbnail;
  public length;
  public free;
  constructor(
    name: string,
    artist: string,
    thumbnail: string = "semethumbnail.jpg",
    length: Number,
    free: boolean
  ) {
    this.name = name;
    this.artist = artist;
    this.thumbnail = thumbnail;
    this.length = length;
    this.free = free;
  }
}
class HumanMaker {
  age = 12;
  constructor(public name: string, public isHandsome: boolean) {}
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
