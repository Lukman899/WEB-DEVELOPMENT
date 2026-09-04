// // let proName = "tshirt";
// // let proPrice = 5234;

// // let pro2Name = "lower";
// // let pro2Price = 532;

// // let pro3Name = "cap";
// // let pro3Price = 54;

// let Products = [["tshirt = ", 5234], ["lower = ", 532], ["cap = ",54], ["shoes = ", 54645]]


// // console.log(Products[2]);
// // console.log(Products.length);
// // console.log(Products[Products.length - 1]);

// // console.log((Products.at(-1)));

// for(let i = 0; i < Products.length; i++){
//     console.log(
//         Products[i][0],
//         Products[i][1]);
//         // WRONG WAY {RIGHT WAY IN LECTURE - 33}
// }
let products = ["tshirt", "lower", "cap", "shoes"]
products.push("hello"); // LAST MAI ADD;

products.pop(); // LAST SE DELETE;

products.unshift("hello"); // START MAI ADD;
products.shift(); // START SE DELETE;

console.log(products);