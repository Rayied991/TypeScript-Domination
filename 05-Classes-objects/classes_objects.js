var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// classes & objects
var Device = /** @class */ (function () {
    function Device() {
        this.name = "lg";
        this.price = 12000;
        this.category = "digital";
    }
    return Device;
}());
var Bottle = /** @class */ (function () {
    function Bottle() {
        this.radius = 120;
        this.price = 100;
        this.color = "blue";
    }
    return Bottle;
}());
var d1 = new Device();
var d2 = new Device();
var b1 = new Bottle();
// Constructors
// ek aisi machine jo ki produce kr rahi hai final consumable product.=constructor
// constructor -> human maker
// constructor-> biscuit maker
var BottleMaker = /** @class */ (function () {
    function BottleMaker(brand, price, color, material) {
        this.brand = brand;
        this.price = price;
        this.color = color;
        this.material = material;
        this.brand = brand;
        this.price = price;
        this.color = color;
        this.material = material;
        // 1.parameter name
        // 2.this.name [variable made by us]
        // public name=name;
    }
    return BottleMaker;
}());
var Music = /** @class */ (function () {
    function Music(name, artist, thumbnail, length, free) {
        if (thumbnail === void 0) { thumbnail = "semethumbnail.jpg"; }
        this.name = name;
        this.artist = artist;
        this.thumbnail = thumbnail;
        this.length = length;
        this.free = free;
        // if(!thumbnail){
        //   this.thumbnail=thumbnail;
        // }
        this.name = name;
        this.artist = artist;
        this.thumbnail = thumbnail;
        this.length = length;
        this.free = free;
    }
    return Music;
}());
var HumanMaker = /** @class */ (function () {
    function HumanMaker(name, isHandsome) {
        this.name = name;
        this.isHandsome = isHandsome;
        this.age = 12;
    }
    return HumanMaker;
}());
//wrong
// class HumanMaker2 {
// constructor(public a: string, age: number = 0) {}
// }
var b2 = new BottleMaker("Milton", 1200, "yellow", "metal");
var h1 = new HumanMaker("Rayied", true);
// let h2 = new HumanMaker2("Rayied");
var b3 = new BottleMaker("Cello", 100, "transparent", "plastic");
var ms = new Music("Sanam re", "atif aslam", "", 200, true);
ms.artist = "halua";
// This keyword
var abcd = /** @class */ (function () {
    function abcd() {
        this.name = "ray";
    }
    // method
    abcd.prototype.changemore = function () {
        console.log("changing");
    };
    abcd.prototype.changeName = function () {
        // this.name
        console.log(this.name);
        var a = 12;
        this.changemore = function () {
            console.log("first");
        };
    };
    return abcd;
}());
// access modifiers(public,private,protected)
var BottleMaker2 = /** @class */ (function () {
    // constructor(
    //   public name: string,
    // ) {
    // }
    function BottleMaker2(name) {
        this.name = name;
    }
    BottleMaker2.prototype.changing = function () {
        this.name = "rdd";
    };
    return BottleMaker2;
}());
var MetalBottlemaker = /** @class */ (function (_super) {
    __extends(MetalBottlemaker, _super);
    function MetalBottlemaker(name) {
        return _super.call(this, name) || this;
    }
    MetalBottlemaker.prototype.getValue = function () {
        // console.log(this.name);
    };
    return MetalBottlemaker;
}(BottleMaker2));
// Protected
var BM = /** @class */ (function () {
    function BM() {
        // public name="gg";
        this.name = "gg";
    }
    return BM;
}());
var MB = /** @class */ (function (_super) {
    __extends(MB, _super);
    function MB() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.material = "mt";
        return _this;
    }
    MB.prototype.changename = function () {
        this.name = "xd";
    };
    return MB;
}(BM));
var pt = new MB();
// pt.name="ff";//error for protected
var bt1 = new BottleMaker2("Milton");
// bt1.name="hululu";
// bt1.name="hululu"; //private cannot change
bt1.changing();
var mb2 = new MetalBottlemaker("Chilton");
mb2.getValue();
// public ->can access change anywhere[constructor,method,inherit and change]
// private->can change inside class[constructor,method isnide can be  changed,inherit cannot be changed]
// protected->can be used in own class and extended class also
// optional properties
// readonly 
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    User.prototype.chanename = function () {
        this.name = "new";
    };
    return User;
}());
var u1 = new User("hel");
u1.chanename();
// Optional fields
var Person = /** @class */ (function () {
    function Person(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        // gender is optional field
    }
    return Person;
}());
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
var a1 = new Person("hh", 25, "male");
var a2 = new Person("hh1", 225);
// let c=new P1("alu",22);
// getter and setters
var P1 = /** @class */ (function () {
    function P1(_name, _age) {
        this._name = _name;
        this._age = _age;
    }
    Object.defineProperty(P1.prototype, "name", {
        // getName(){
        //   return this.name;
        // }
        // setName(value:string){
        //   this.name=value;
        // }
        get: function () {
            return this._name;
        },
        set: function (val) {
            this._name = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(P1.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (num) {
            this._age = num;
        },
        enumerable: false,
        configurable: true
    });
    return P1;
}());
var c = new P1("alu", 22);
// static members
// without creating new can accessed
var Hero = /** @class */ (function () {
    function Hero() {
    }
    Hero.getRandomNumber = function () {
        return Math.random();
    };
    Hero.version = 1.0;
    return Hero;
}());
// let x1=new Hero();
