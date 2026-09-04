// let student = {
//     name: "Lukman Shaikh",
//     rollNo: 42,
//     subjects: ["maths", "english", "hindi"],
// }
// let { subjects: vishay, name, rollNo } = student; // ORDER DOESN'T MATTER;

// // console.log(subjects);

// // let { ...justVariable} = student;
// // console.log(justVariable);


// // HOW TO RENAME KEYS?
// // FIRST WAY 

// // let vishay = subjects // ONE VARIABLE WASTED FOR RENAMING;
// // console.log(vishay);

// //SECOND WAY;

// // let{subjects : vishay} (WHERE DECLARED)

// // console.log(subjects); // {ERROR : NOT DEFINED}
// // console.log(vishay);

// let obj1 = {
//     name: "Lukman",
//     phone: 8000398022
// }

// let obj2 = {
//     adress: "india",
//     aadhaarcard: 46542524524,
//     name: "LUKMAN"
// }

// let obj3 = { ...obj1, ...obj2 }
// console.log(obj3);



// let arr = [1,2,3,4];
// arr = ["lukman", "shaikh"]
// console.log(arr); //CAN UPDATE;


// const brr = [1,2,3,4];
// brr = ["lukman", "shaikh"]
// console.log(arr); //CAN'T UPDATE;


//  ARRAY AND OBJECT UPDATION;
// SO, HOW TO UPDATE IT?????

// const arr = [1,2,3,4];
// arr[0] = "updated"
// arr[1] = "updated"
// arr[2] = "updated"
// arr[3] = "updated"
// // console.log(arr);

//         // OBJECT;
// const obj = {
//     name : "Kasturi",
//     rollNo : 23,
//     address : null
// }
// obj["name"] = "Lukman";
// obj.name = "Shaikh";
// console.log(obj);


        // DELETES PROPERTY;
// delete obj.rollNo;
// console.log(obj);


// console.log(obj);
// console.log(obj.address?.street);

        // SPLICE
let arr1 = [1,2,3,4,5,6];
// arr1.splice(3,2) 

// 3rd index se start karo aur 2 values ko delete kardo;

// arr1.splice(3,0,2) 

// 3rd index pe bina kuch delete kare add kardo

// arr1.splice(3,1, ["replace"]) 

// 3rd index pe jaao 1 value to delete kardo and replace kardo


// console.log(arr1);


        // SLICE

// let trimArr = arr1.slice(1,3);
// console.log(trimArr);


// console.log(arr1.indexOf(5));
let res = arr1.find((value) => {
    return value === 3 // CHECKS WHETHER THE DIGIT IS AVAILABLE IN ARRAY OR NOT... 
})
// console.log(res);


let resIndex = arr1.findIndex((value) => {

    if(value === 3){
        return value;
    }
    // return value === 3;
})
// console.log(resIndex);


//FLAT

let arr3 = [1,2,3,4,5,[6,7,8], [9,10,11,12],[13,14,15]];
// console.log(arr3.flat(Infinity));

// REMOVES NESTED ARRAY (MERGES ARRAY AND NESTED ARRAY)

// console.log(arr3);


// MUTABILITY

// let arr4 = [4,5,6,62,213,13]
// let arrCopy = arr4;
// arrCopy.pop() // ALSO CHANGES ARR4 {SASTA COPY} [SOLUTION --> SPREAD OPERATOR];
// console.log("arr4", arr4);
// console.log("arrCopy", arrCopy);

// JABARDASTI {FORCEFULLY} SOLUTION

let arr4 = [4,5,6,62,213,13]
arrCopy2 = [...arr4] // SPREAD OPERATOR

arrCopy2.pop()

console.log("arr4", arr4);
console.log("arrCopy", arrCopy2);