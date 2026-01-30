// Type Guards and TypeScript Utility Types
// Using typeof and instanceof
// Partial,Required,Readonly

// Type guards-> type narrowing
function abcd(arg:string | number | any){
if(typeof arg ==="number"){
    // arg. [all related to number]
    return "number;"
}
else if(typeof arg === "string"){
    // arg. [alll related to string]
    return "string";
}
else{
    return "Weird";
}
}
console.log(abcd(12))
console.log(abcd("hello"))
console.log(abcd(true));

// typeof instanceof

class TvRemote{
    switchTVoff(){
        console.log("turn off");
    }
}

class CarRemote{
    switchCaroff(){
        console.log("turn off car");
    }
}

const tv=new TvRemote();
const car=new CarRemote();

function switchedoff(device: TvRemote | CarRemote){
    if(device instanceof TvRemote){
        device.switchTVoff();
    }
    else if(device instanceof CarRemote){
        device.switchCaroff();
    }
}

console.log(switchedoff(tv));
console.log(switchedoff(car));