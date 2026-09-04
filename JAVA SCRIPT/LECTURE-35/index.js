//         // SCOPES

// let username = "LukmanShaikh";

// // GLOBAL SCOPE


// if (true) {
//     // console.log("hello");
// }

// // BLOCK SCOPE


// // if (true) console.log("HELLO"); // BRACKETS ONLY REQUIRED WHEN MULTIPLE LINES...

// // FOR EXAMPLE {BLOCK}
// {
//     let city = "Khambhat";
//     // console.log(username);
//     // console.log(city);
//     var country = "India";
// }


// console.log(country); // {VAR DOGLA HOTA HAI, BLOCK KE BAHAAR BHI CHALTA HAI}


// // console.log(city); //{ERROR BECAUSE OUT OF SCOPE (BRACES)}


// for(let i = 0; i < 5; i++){

// }

// // if(true){

// // }

// function hello() {
//     let state = "Gujarat";
//     console.log(state);
//     var productName = "Iphone 18 pro max"
//     console.log(productName);
// }
//     // console.log(productName); // BUT VAR BECOMES GOOD IN FUNCTION... IT GIVES ERROR


// function counter() {
//     let count = 0;
//     count = count + 1
//     console.log(count);
// }
// counter()
// counter() // INDEPENDENT (FARQ NAHI PADTA KI PEHLE CALL KIYA THA KI NAHI AGAR 100 BAAR CALL KIYA TO 100 BAAR SAME ANSWER PRINT HOGA KYUKI COUNT BLOCK ME DECLARE KIYA HAI TO FUNCTION YAAD RAKHKE HAR CALL KE BAAD VALUE KO 0 PE RESET KARDEGA)

// let count2 = 0;
// function counter2() {
//     count2 = count2 + 1;
//     console.log(count2);
// }
// counter2()
// counter2() // AGAR COUNT KO BAHAR RAKHOGE TO VALUE WAAPAS 0 PE RESET NAHI HOGI KYUKI FUNCTION KO YAAD NAHI RAHEGA KI USNE CALL KIYA KI NAHI ISILIYE HAR CALL KE BAAD RESET NAHI HOGA



// let count3 = 2 //count3 = 2

// function counter3() {
//     let count3 = 0; // count3 = 0 {reset}
//     count3 = count3 + 2; // count3 = {0 + 2}
//     console.log(count3);
// }
// counter3() // 2;
// counter3() // 2;