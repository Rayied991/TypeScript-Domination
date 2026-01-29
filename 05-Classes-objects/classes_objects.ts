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
  changing(){
    this.name="rdd";
  }
}

class MetalBottlemaker extends BottleMaker2{
  constructor(name:string){
    super(name);
  }

  getValue(){
    // console.log(this.name);
  }
}
// Protected
class BM{
// public name="gg";

protected name="gg";



}
class MB extends BM{
  public material="mt";

  changename(){
    this.name="xd";
  }
}

let pt=new MB();
// pt.name="ff";//error for protected

let bt1=new BottleMaker2("Milton");
// bt1.name="hululu";
// bt1.name="hululu"; //private cannot change
bt1.changing();

let mb2=new MetalBottlemaker("Chilton");
mb2.getValue();
// public ->can access change anywhere[constructor,method,inherit and change]
// private->can change inside class[constructor,method isnide can be  changed,inherit cannot be changed]
// protected->can be used in own class and extended class also


// optional properties
// readonly 
class User{
  constructor(public readonly name:string){
    
  }
  chanename(){
    this.name="new";
  }
}

let u1=new User("hel");
u1.chanename();


// Optional fields
class Person{
  constructor(public name:string,public age:number,public gender?:string){
    // gender is optional field
  }
}
// Parameter Properties
// class P1{

//   // way-1
//   // public name;
//   // public age;
//   // constructor(name:string,age:number){
//   //   this.name=name;
//   //   this.age=age;
//   // }
//   // way-2
//   constructor(public name:string,public age:number){
//     this.name=name;
//     this.age=age;
//   }

// }
let a1=new Person("hh",25,"male");
let a2=new Person("hh1",225);

// let c=new P1("alu",22);


// getter and setters

class P1{


  constructor(public _name:string,public _age:number){
    
  }
  // getName(){
  //   return this.name;
  // }

  // setName(value:string){
  //   this.name=value;
  // }

  get name(){
    return this._name;
  }

  set name(val:string){
    this._name=val;
  }
  get age(){
    return this._age;
  }

  set age(num:number){
    this._age=num;
  }

}

let c=new P1("alu",22);

// static members
// without creating new can accessed
class Hero{
  static version=1.0;

  static getRandomNumber(){
    return Math.random();
  }

}


// abstract classes & methods
// Human is abstract
// Me,her,him is the implementation
class Payment{
  constructor(protected amount:number,protected account:number){

  }
  isPaymentValid(amount:number){
    return this.amount >0;
  }
}

class CookingEssentials{
  constructor(protected gas:number,public Gasname:string){

  }
}

class Vegi extends CookingEssentials{


}
class Cake extends CookingEssentials{
  
}
class paytm extends Payment{

}

// why can't do new Payment(): not needed its base property.
