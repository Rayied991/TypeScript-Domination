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
function log<T>(val:T){
    console.log(val);

}
function abcd<T>(a:T,b:string,c:number){
    log(a);
}
abcd<string>("Hello","world",4);


// Generic Interfaces
interface Food<T>{
    name:string,
    age:number,
    key:T;
}

function foods(obj:Food<string>){
    log(obj);
    log(obj.key);
}
foods({name:"foo",age:25,key:"Asas"});

// Generic classes
class BottleMaker<T>{
    constructor(public key:T){

    }
}
let b1=new BottleMaker<string>("hey");
let b2=new BottleMaker<number>(12);
console.log(b1,b2);

// Catche
function  c<T>(a:T,b:T):T{
    // return a; //not error
    // return "hey"; //error
    // return b;//no error
    // return "hey" as T;//works
    // return <T>"hey";///also works 

    // if(typeof a === "string"){
    //     // to back intellisense in vs code
    //     a.
    // }
}
c<string>("hey","hello");

// in ts-> "hey"->string literals
