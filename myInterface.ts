interface User {
    readonly id : number,
    email: string,
    name: string,
    googleId ?: string,
    dummyFunction : ()=> string,   // method declaration 1 with return type
    dummyFunction2() : string,       // method declaration 2 with return type
    getCoupon(couponName: string) : number   // method declaration with parameter and return type
}


const Aman: User = {
    id: 1,
    email: "aman@gmail.com",
    name: "Aman",
    dummyFunction : ()=>{
        return "dummyFunction"
    },
    dummyFunction2 : ()=>{
        return "dummyFunction2"
    },
    getCoupon(name: "ASJHG345"): number{   // we can change parameter name (couponName -> name)
        return 10;
    }
}


console.log(Aman)







//--------------------------------------------------------------------------------------------------------------------------------

                          /*              Re-opening of interface           */


/*
    It states that if someone is created an interface and we do not have access to modification in the original
    interface then in that case, we can again create another Interface with the same name
    and we can add our features and those features appended on the original interface too.
    and if it is not optional then every object of that interface must need to fill this detail too
*/



   interface User {
      githubId ?: string
   }




//--------------------------------------------------------------------------------------------------------------------------------

                          /*             Inheritance of interface           */


    /*            this below interface access all the properties of User interface and also we can define
                                     some addition properties too inside Admin
    */

                interface admin extends User {  
                    role : "admin" | "cto" | "ceo"
                }


                
            const Aman2: admin = {
                id: 1,
                role : "admin",
                email: "aman@gmail.com",
                name: "Aman",
                dummyFunction : ()=>{
                    return "dummyFunction"
                },
                dummyFunction2 : ()=>{
                    return "dummyFunction2"
                },
                getCoupon(name: "ASJHG345"): number{   // we can change parameter name (couponName -> name)
                    return 10;
                }
            } 


             console.log(Aman2);

    export{}