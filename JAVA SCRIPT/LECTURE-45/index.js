// function fun1(callback){
//     console.log("Hii");
//     callback()
// }

// function cb(){
//     console.log("This is callback function");
// }

// fun1(cb);



// let arr = ["a", "b", "c", "d"];
// arr.forEach() 
// arr.map()   // #PROBLEM [SOLUTION IN LECTURE-36]; {SYNCHRONUS}


// HIGH ORDER FUNCTION  -->  // {ANY FUNCTION THAT TAKES A FUNCTIONS AS AN ARGUMENT OR ANY FUNCTION THAT  RETURN AS AND ARGUMENT};


//OR 

// ANY FUNCTION THAT RETURNS A FUNCTION {AGAR KOI BHI FUNCTION FUNCTION KO RETURN KARTA HAI TO USSE HIGH ORDER FUNCTION KEHTE HAI}


// FOR EXAMPLE:- {FUNCTION RETURNS AN FUNCTION} {NOT CALLBACK}
// function a(){
//     function b(){

//     }
//     return b;

// }



// function searchPizza(cb1) {
//     console.log("Pizza searching...");
//     setTimeout(function () {
//         console.log("Here is the pizza menu!");
//         let price = 500;
//         cb1(price)
//     }, 2000)
// }

// function addToCart(cb2){
//     console.log("Pizza adding to cart....");
//     setTimeout(function(){
//     console.log("Pizza added to cart");
//     cb2();
//     }, 3000)
// }

// function payment (price, cb3){
//     console.log(`Payment Initiated, Amount : ${price}`);
//     setTimeout(function(){
//         console.log(`Payment Completed, Amount : ${price}`);
//         cb3();
//     }, 5000)
// }

// searchPizza(function (price) {
//     addToCart(function(){
//         payment(price, function(){
//             console.log("Pizza Is On The Way");
//         })
//     })
// })



// INVERSION OF CONTROL {WE GIVE CONTROL TO SOMEONE ELSE};

