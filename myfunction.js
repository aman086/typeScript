"use strict";
// If we made any function with an argument like  - (num) and without specifying it's data type
//  then, in that case datatype of num is (any - type)
// so, we can perform any operation related to number/string/boolen 
// which is not good for ur code 
Object.defineProperty(exports, "__esModule", { value: true });
// way 1 - (if we not specify data type in function argument......)
// function addTwo(num){
//     num.toUpper();  // (it doesn't give any error)
//     return num+2
// }
// addTwo(5)      // (works fine)
// addTwo("5")   // (works fine)
// right way to do so .....
function addTwo(num) {
    return num + 2;
}
// way 2 - (if we not specify data type in function argument......)
// function addTwo(num){
//     num.toUpperCase();  // (it doesn't give any error)
//     return num+2
// }
// addTwo(5)      // (works fine)
// addTwo("5")   // (works fine)
// console.log(addTwo(5));
// ----------------------------    TypeScript with Arrow function --------------------
var myfun = function (num, name) {
    num = num + 1;
    name = name + " tiwari";
    return { num: num, name: name };
};
var _a = myfun(1, "Aman"), num = _a.num, name = _a.name;
console.log(num);
console.log(name);
// -------------------------------------------------------------------------------------------------
// ----------------------------    TypeScript (specifying function return type) --------------------
// otherwise same issue again come with return type that any value could be return
// we have to specify the data type for return type too...
// Issue that occurs when we not specify the return type
//  function substract(num1 , num2){
//     let num3 = num1 - num2;
//     return "Hello"   // (does not give any error.....)
//  }
// specifying the data type for return type too...........
//  function substract1(num1 , num2) : number{
//     let num3 = num1 - num2;
//     return "Hello"   // (gives error because it only supposed to return number)
//  }
// specifying the data type for return type too for arrow function ......'
// const arrowfun = (name) : string=>{
//     return name + "Tiwari"
// }
// console.log(arrowfun("Aman"));
// return type could be -- (number , boolean , ...any other data type , any , void , never)
// If I want to pass default values to some parameter then 
function mixOperation(num1, num2, num3) {
    if (num3 === void 0) { num3 = 5; }
    var num4 = num1 - num2 + num3;
    return num4;
}
console.log(mixOperation(1, 2));
console.log(mixOperation(10, 2, 1));
