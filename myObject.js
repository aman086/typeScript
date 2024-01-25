"use strict";
// -------------------------------------------------------------------------------------------------
// ------------------------------------------ Object -------------------------------------------
// -------------------------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
function myObj(name) {
    return { str: name };
}
console.log(myObj("Aman"));
// function myObj(name): {}{
//     return {name}
// }
// console.log(myObj("Aman"))
// -------------------------------------------------------------------------------------------------
// Bad behaviour of objects 
function myFunction(_a) {
    var name = _a.name, price = _a.price;
    console.log(name);
    console.log(price);
}
myFunction({ name: "Aman", price: 2 });
