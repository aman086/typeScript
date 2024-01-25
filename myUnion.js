"use strict";
/*
union is used when we are in confusion with the datatype of variable/function/type anything
so, In such cases we can use (|) to give more than one data types
and It took appropriate data type according to the value.
*/
Object.defineProperty(exports, "__esModule", { value: true });
/*   Make a function which either returns number or string   */
function checkPurpose(isActive) {
    if (isActive) {
        return 1;
    }
    else {
        return "404 Error";
    }
}
console.log(checkPurpose(true));
console.log(checkPurpose(false));
function inuptValue(num) {
    /*
    now ,if I want to perform any string or number type operation on num.
    then we can not able to do so because there are more than one data type
    we can do so by applying if condition
    */
    if (typeof num === "number") {
        return num.toString() + " number";
    }
    else {
        return num.toUpperCase();
    }
}
console.log(inuptValue(3));
console.log(inuptValue("Aman Tiwari"));
// Now , let's create arrays of different and mix type
var array1 = [1, 2, 3, 4]; // all values must be of type number
var array2 = ["1", "2", "3", "4"]; // all values must be of type string
// all values must be of either number or all values of type string .
// (no mix is allowed ,it must have to be either - number/string)
var array3 = [1, 2, 3];
var array4 = ["1", "2", "3"];
/* In below code ,
           It allows us to contain values of number and string
*/
// const array5 : (number| string)[] = ["1","2","3",4,5]   
var array5 = ["1", "2", "3", 4, 5];
