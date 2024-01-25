/*
union is used when we are in confusion with the datatype of variable/function/type anything
so, In such cases we can use (|) to give more than one data types
and It took appropriate data type according to the value.
*/




/*   Make a function which either returns number or string   */


           function checkPurpose(isActive): number | string{
                 if(isActive){
                    return 1;
                 }else{
                    return "404 Error"
                 }
           }

           console.log(checkPurpose(true))
           console.log(checkPurpose(false))




           function inuptValue(num: number | string){
                 /*
                 now ,if I want to perform any string or number type operation on num.
                 then we can not able to do so because there are more than one data type
                 we can do so by applying if condition 
                 */

                 if(typeof num === "number"){
                    return num.toString() + " number";
                 }else{
                    return num.toUpperCase()
                 }              
           }

           console.log(inuptValue(3));
           console.log(inuptValue("Aman Tiwari"));
           



// Now , let's create arrays of different and mix type


const array1 : number[] = [1,2,3,4]   // all values must be of type number
const array2 : string[] = ["1","2","3","4"]     // all values must be of type string

// all values must be of either number or all values of type string .
// (no mix is allowed ,it must have to be either - number/string)

const array3 : number[] | string[] = [1,2,3]    
const array4 : number[] | string[] = ["1","2","3"] 



/* In below code ,
           It allows us to contain values of number and string
*/
// const array5 : (number| string)[] = ["1","2","3",4,5]   

const array5 : any[] = ["1","2","3",4,5]  // (it also possible but it is not a good practice to do so..)




// we can make any variable to have some fixed values
// like value of pi

let pi:3.14 = 3.14;
// pi = 3.146  ( it won't run because value is fixed)


let seat: "aisle" | "middle" | "side"
// seat = "aisle" 
// seat = "upper"   // (gives us error)



export{}