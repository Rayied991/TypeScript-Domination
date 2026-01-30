// Functions
// Function types 
// Optional & default parameters
//Rest parameters
// Overloads

// function abcd():string{
//     return "Hey";
// }
function abcd():void{
    
}
// Function types
function abc(name:string,cb:(value:string)=>void){

}

abc("harsh",(value)=>console.log(value));

function abcdef(name:string,age:number,cb:(arg:string)=>void){
    cb("hey");
}
abcdef("ray",25,(arg:string)=>console.log("abcdef",arg))

// Optional parameters
function abca(name:string,age:number,gender?:string){
    
}
abca("ray",25,"male");
 abca("alu",22);//optional for gender

//  default parameter
 function abcab(name:string,age:number,gender:string="not to be disclosed"){
    console.log(name,age,gender);
}
abcab("ray",25);

// Rest parameters
//  ... rest/spread operator
// In function parameter if ... used then all the arguments are stored in a variable as an array.

function sum(...arr:number[]){
    console.log(arr);
}

sum(1,2,3,4,5,6,7,8,9,10);

function friends(...args:string[]){
    console.log(args);
    console.log(args[0]);
}

friends("ray","angi","alif");


// spread operator
let arr=[12,,34,5,6];
let arr2=[...arr];

// Function Overloading

// tsc fnc signature
function overload(a:string):void;
function overload(a:string,b:number):number;

function overload(a:any,b?:any){
    if(typeof a === "string" && b === "undefined"){
        console.log("hey");
    }
     if(typeof a === "string" && typeof b === "number"){
        return 123;
    }
    else{ throw new Error("something is wrong");}
}

overload("hel");
overload("hey",12);