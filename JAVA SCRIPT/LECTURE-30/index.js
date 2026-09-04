// Arithmetic Operators

// let num1 = 2;
// let num2 = 4;
// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num2 / num1);
// console.log(num2 % num2);
// console.log(num1 ** num2);


// //Case Sensitive

// let NAME = "Lukman";
// let Name = "Ikram";
// let name = "Maruf";

// console.log(NAME);
// console.log(Name);
// console.log(name);


// let num = 45;
// num++;
// num+=2;
// ++num;
// console.log(num++); // --> post increment
// console.log(++num); // --> post increment
// console.log(num);


// console.log(--num);
// console.log(num--);
// console.log(num);

// Assignment


// let num = 2;
// num += 5;
// console.log(num);
// num -= 5;
// console.log(num);
// num *= 5;
// console.log(num);
// num /= 5;
// console.log(num);
// num %= 5;
// console.log(num);
// num **= 5;
// console.log(num);


//cOMPARISON oPERATOR


// const num1 = 3;
// const num2 = 6;

// console.log(3 > 6);
// console.log(3 < 6);
// console.log(3 >= 6);
// console.log(3 <= 6);
// console.log(3 == 6);
// console.log(3 != 6);


// Loose Equality

// console.log("5" == 5);


// //Strict Equality

// console.log("5" === 5);


// console.log(true && false);
// console.log(true || false);

//const age = 16; // false
// const age = 18; // true
// const hasId = true;

// const canEnterClub = age>=18 && hasId === true;
// console.log(canEnterClub);

// console.log(!true);
// console.log(!false);
// console.log(!56);
// console.log(!0);

// const isLoggedIn = true;
// // const isLoggedIn = false;
// if (isLoggedIn) {
//     console.log("You can like, comment, subscribe");

// } else {
//     console.log("Please Login First");

// }

// let temp = 24;

// if(temp >= 25){
//     console.log("AC Chala le");

// }
// else{
//     console.log("AC Mat Chala");

// }

// let day = "Friday";

// if(day === "Monday"){
//     console.log("First day of the week.");
// }
// else if(day === "Tuesday"){
//     console.log("Second day of the week.");
// }
// else if(day === "Wednesday"){
//     console.log("Third day of the week.");
// }
// else if(day === "Thursday"){
//     console.log("Fourth day of the week.");
// }
// else if(day === "Friday"){
//     console.log("Fifth day of the week.");
// }
// else if(day === "Saturday"){
//     console.log("Sixth day of the week.");
// }
// else if(day === "Sunday"){
//     console.log("Seventh day of the week.");
// }
// else{
//     console.log("Incorrect Day, Please RE-CHECK it.");

// }

// score to grade convert;








//nested if-else;


// const isLoggedIn = true;
// const subscribed = false;

// if(isLoggedIn){
//     if(subscribed){
//         console.log("You Can Access Premium Content.");
//     }
//     else{
//         console.log("You Doesn't Have Any Premium Plan To Access This Content.");

//     }
// }
// else{
//         console.log("Please Log In To Content.");

//     }

const day = "fri";

switch (day) {
    case ("mon"):
        console.log("1st day of the week");
        break;
    case ("tues"):
        console.log("2nd day of the week");
        break;
    case ("wed"):
        console.log("3rd day of the week");
        break;
    case ("thurs"):
        console.log("4th day of the week");
        break;
    case ("fri"):
        console.log("5th day of the week");
        break;
    case ("sat"):
        console.log("6th day of the week");
        break;
    case ("sun"):
        console.log("7th day of the week");
        break;
    default:
        "Incorrect Day, Please recheck it";
}