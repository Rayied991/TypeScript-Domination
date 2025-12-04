// Type aliases
//types: make own user defined types
type value = string | number | null;
let a: value;

function abcd(obj: value) {}

// abcd(true);//not allowed
abcd("rayied"); //allowed
