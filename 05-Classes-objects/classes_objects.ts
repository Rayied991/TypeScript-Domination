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
  ) {
    this.brand=brand;
    this.price=price;
    this.color=color;
    this.material=material;

    // 1.parameter name
    // 2.this.name [variable made by us]
    // public name=name;
  }
}

class Music {

  constructor(
    public name: string,
    public artist: string,
    public thumbnail: string = "semethumbnail.jpg",
    public length: Number,
    public free: boolean
  ) {
    // if(!thumbnail){
    //   this.thumbnail=thumbnail;
    // }
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
ms.artist="halua";

// This keyword
class abcd{
  name="ray";

  // method
  changemore(){
    console.log("changing");
  }
  changeName(){
    // this.name
    console.log(this.name);
    let a =12;
    this.changemore=()=>{
      console.log("first");
    }
  }
}

// access modifiers(public,private,protected)

class BottleMaker2 {
  // constructor(
  //   public name: string,
  // ) {
  // }
    constructor(
    private name: string,
  ) {
  }
}

let bt1=new BottleMaker2("Milton");
bt1.name="hululu";