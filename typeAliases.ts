
type User = {
    name : string,
    email : string,
    isActive: boolean
}

// type MyString = string   // (we can change the name of string with the help of this code)


        function createUser(user:User){
            console.log("Name of the user is " , user.name)
            console.log("Email of the user is " , user.email)
            console.log("Activeness of the user is " ,user.isActive)
        }

        createUser({name: "Aman" , email: "aman@75way" , isActive: true})





// ----------------   ReadOnly and Optional keyword ---------------------------------------



type User1 = {
    readonly _id: string,      // (ReadOnly - it can not be modified)
    name : string,
    email : string,
    isActive: boolean
    creditCardDeatails ?: number    // (Optional - you can fill this detail if you want otherwise you can leave it)
}


// create a user of type User1

let firstUser : User1 = {
    _id : "12",
    name : "Aman",
    email: "aman@75way.in",
    isActive: true,  // (but , we can not leave any other property other than optional , otherwise it gives error)
    // creditCardDeatails : 1234  // (optional) -> I can either pass it or leave it 
}


// modify the details of the firstUser

    // firstUser._id = "123"  // (gives error, because it is read-type only , we can't modify this)
       firstUser.name = "Mohit"
       firstUser.email = "mohit@123"
       firstUser.creditCardDeatails = 5432





// we can use other type property also in our type


    type cardId = {
        id : number;
    }

    type cardDate = {
        cardDate : string;
    }


    // now use both above type inside our final user defined type

    type cardDetails = cardId & cardDate & {
        cvv : number
    }

    /* now, if anyone is creating object of this (cardDetails) type then he/she has to fill all the details of both user-defined
        types (cardId , cardDate) and also fill another defined type also (cvv)
    */


    let firstCard : cardDetails = {
        id : 1,
        cardDate: "2024-01-24",
        cvv: 1234
    }

    console.log(firstCard);