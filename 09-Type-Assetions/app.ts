// Type assertion
// Typecasting
// Non-null assertion operator
// Type assertion is used when you know more about the variable or the value as compare to typescript. 

// let a:any =12;
// (a as number).

// (<number>a). 

// Typecasting
let a=Number("12");
console.log(a);
console.log(typeof a);

// Non-null assertion operator
// Used rarely
// let b:null | undefined | string;
// b="hey";
// b!. //comes all string methods
// using ! it is garantied that it won't be null or undefined.
// b. //comes all string methods

