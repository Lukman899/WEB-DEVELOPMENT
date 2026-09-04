// //REPITITION (NOT GOOD.... TO AVOID WE USE, FUNCTIONS)


// // let ProductPrice = 3000;
// // let DiscountAmount = 3000 * 10 / 100;
// // let Shipping = 50;
// // let TotalAmount = ProductPrice - DiscountAmount + Shipping;

// // console.log(TotalAmount);

// // let ProductPrice = 3000;
// // let DiscountAmount = 3000 * 10 / 100;
// // let Shipping = 50;
// // let TotalAmount = ProductPrice - DiscountAmount + Shipping;

// // console.log(TotalAmount);

// // let ProductPrice = 3000;
// // let DiscountAmount = 3000 * 10 / 100;
// // let Shipping = 50;
// // let TotalAmount = ProductPrice - DiscountAmount + Shipping;

// // console.log(TotalAmount);

// // let ProductPrice = 3000;
// // let DiscountAmount = 3000 * 10 / 100;
// // let Shipping = 50;
// // let TotalAmount = ProductPrice - DiscountAmount + Shipping;

// // console.log(TotalAmount);


// //FUNCTIONS

// // function totalMarks(){ // FUNCTION DECLARATION (DEFINITION)
// //     console.log("Hiii");
// // }

// // totalMarks(); // CALL;
// // totalMarks(); // PRINTS MULTIPLE TIMES


// // ARGUMENTS & PARAMETERS

// // function totalMarks( StudentName, MathsMarks, ScienceMarks, HindiMarks, GujaratiMarks, SSMarks, EnglishMarks) {

// //     console.log( `${StudentName}`, MathsMarks + ScienceMarks + HindiMarks + GujaratiMarks  + SSMarks + EnglishMarks);
// // }

// // totalMarks("Alok Total Marks", 77, 78, 68, 65, 65, 65);
// // totalMarks("Adi Total Marks", 75, 74, 60, 62, 61, 66);
// // totalMarks("Karan Total Marks", 57, 88, 78, 69, 65, 62);
// // totalMarks("Anu Total Marks", 72, 69, 52, 35, 58, 55);


// // function greetingMSG(userName = "Guest", greetings = "Hi") {
// //     console.log(`${greetings}, ${userName}`);
// // }


// // greetingMSG("Lukman", "Assalamualaikum") // Assalamualaikum, Lukman
// // greetingMSG("Priyanshu") // Hii, Priyanshu
// // greetingMSG("Satyam") // Hii, Satyam
// // greetingMSG() // Hii, Guest

// // function calculator(num1, num2, operator) {
// //     switch (operator) {
// //         case "+":
// //             console.log(`${num1} ${operator} ${num2}  = `, num1 + num2);
// //             break;
// //         case "-":
// //             console.log(`${num1} ${operator} ${num2}  = `, num1 - num2);
// //             break;
// //         case "*":
// //             console.log(`${num1} ${operator} ${num2} = `, num1 * num2);
// //             break;
// //         case "/":
// //             console.log(`${num1} ${operator} ${num2}  = `, num1 / num2);
// //             break;
// //         case "%":
// //             console.log(`${num1} ${operator} ${num2} = `, num1 % num2);
// //             break;
// //     }
// // }
// // calculator(4, 59, "*");


// function totalMarks(MathsMarks, ScienceMarks, HindiMarks, GujaratiMarks, SSMarks, EnglishMarks) {
//     return MathsMarks + ScienceMarks + HindiMarks + GujaratiMarks  + SSMarks + EnglishMarks;
// }

// function calPercentage(StudentName, MathsMarks, ScienceMarks, HindiMarks, GujaratiMarks, SSMarks, EnglishMarks) {
//             let total = totalMarks(MathsMarks, ScienceMarks, HindiMarks, GujaratiMarks, SSMarks, EnglishMarks);
//             let percentage = (total / 600) * 100;
//             console.log(`${StudentName} percentage = `, percentage);
// }

// // calPercentage("Alok", 77, 78, 68, 65, 65, 65);
// // totalMarks("Adi", 75, 74, 60, 62, 61, 66);
// // totalMarks("Karan", 57, 88, 78, 69, 65, 62);
// // totalMarks("Anu", 72, 69, 52, 35, 58, 55);


// // AFTER ARRAY CLASS;

// let students = [
//     ["Alok", 77, 78, 68, 65, 65, 65],
//     ["Adi", 75, 74, 60, 62, 61, 66],
//     ["Karan", 57, 88, 78, 69, 65, 62],
//     ["Anu", 72, 69, 52, 35, 58, 55],
// ]
// for (let i = 0; i < students.length; i++) {
//     calPercentage(
//         students[i][0],
//         students[i][1],
//         students[i][2],
//         students[i][3],
//         students[i][4],
//         students[i][5],
//         students[i][6],)
// }

// // FUNCTION DECLARATION;
// // fun1(); // CAN BE USED BEFORE DECLARATION {HOISTING..... VERY IMPORTANT FOR INTERVIEW!!!!!!!!};
// // function fun1(){
// //     console.log("FUNCTION DECLARATION");
// // }


// //             // FUNCTION EXPRESSION
// // console.log(add(5,7)); // CANNOT USE BEFORE INITIALIZATION (UNLIKE FUNCTION DECLARATION);
// // let add = function(num1, num2) {
// //     return num1 + num2;
// // }
// // console.log("FUNCTION EXPRESSION");



// //             //ARROW FUNCTION;

// // let add = (num1, num2) => { // CANNOT USE BEFORE INITIALIZATION (LIKELY FUNCTION EXPRESSION);
// //     return num1 + num2;
// // }
// // console.log("ARROW FUNCTION");


// //SYNTAX --> 1

// // let add = num1 => num1 + 4;  // ONLY IF ONE PARAMETER

// //SYNTAX --> 2

// // let add = (num1, num2) => num1 + num2;

// //SYNTAX --> 3

// // let add = (num1, num2) => {
// //     // SOMETHING
// //     // SOMETHING
// //     // SOMETHING

// //         return num1 + num2;
// // }