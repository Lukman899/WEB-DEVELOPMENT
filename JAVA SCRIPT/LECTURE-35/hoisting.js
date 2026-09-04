// // console.log(a);
// // let a = 6; // {ERROR}
// // const a = 6; // {ERROR}
// // var a = 6; // {UNDEFINED}

//         // HOISTING {FUNCTIONS & DECLARATION TOP PE CHALE JAATE HAI AUR ISE INITIALIZATION SE PEHLE USE KAR SAKTE HAI};

// addNum()

// function addNum(){
//     console.log("Hello");
// } // {IT WORKS!!! 😎 BECAUSE DUE TO HOISTING, IT GONE ON TOP AND CAN BE USED BEFORE INITIALIZATION}


// addTwoNum()
// var addTwoNum = function(){
//     console.log("function expression");
// }


// var a = 5;
// function addNum() {
//     let a = 6;
//     let b = 7;
//     let c = 7;
//     let d = 7;
//     console.log(a);
// }
// addNum();

let city = "Delhi";
function printCity(){
    console.log(city);
}
function random(fn){
    let city = "Varanasi";
    fn();
}
random(printCity);