// -------------------------------------------------------------------------------------------------
// ------------------------------------------ Object -------------------------------------------
// -------------------------------------------------------------------------------------------------


function myObj(name: string): {str: string}{
    return {str: name}
}

console.log(myObj("Aman"))




// function myObj(name): {}{
    //     return {name}
    // }
    
    // console.log(myObj("Aman"))
    
    
    


// -------------------------------------------------------------------------------------------------
    
    // Bad behaviour of objects 

         function myFunction({name,price}:{name: string, price: number}){
            console.log(name);
            console.log(price);
         }

         myFunction({name: "Aman",price: 2});
    
    
    
export{}