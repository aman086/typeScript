// type MyString = string   // (we can change the name of string with the help of this code)
function createUser(user) {
    console.log("Name of the user is ", user.name);
    console.log("Email of the user is ", user.email);
    console.log("Activeness of the user is ", user.isActive);
}
createUser({ name: "Aman", email: "aman@75way", isActive: true });
// create a user of type User1
var firstUser = {
    _id: "12",
    name: "Aman",
    email: "aman@75way.in",
    isActive: true, // (but , we can not leave any other property other than optional , otherwise it gives error)
    // creditCardDeatails : 1234  // (optional) -> I can either pass it or leave it 
};
// modify the details of the firstUser
// firstUser._id = "123"  // (gives error, because it is read-type only , we can't modify this)
firstUser.name = "Mohit";
firstUser.email = "mohit@123";
firstUser.creditCardDeatails = 5432;
/* now, if anyone is creating object of this (cardDetails) type then he/she has to fill all the details of both user-defined
    types (cardId , cardDate) and also fill another defined type also (cvv)
*/
var firstCard = {
    id: 1,
    cardDate: "2024-01-24",
    cvv: 1234
};
console.log(firstCard);
