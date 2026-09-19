// async function fun2(){
//     // console.log("Hii");
//     return 11;
// }

// function fun1(){
//     // console.log("Hello");
//     // return promise.resolve(10)
//     return 10
// }

// // console.log(fun2());
// fun2().then((data) => {
//     console.log(data);
// })
// console.log(fun1());


// console.log("a");

// async function fun3(){
//     console.log("b");
// }
// console.log("c");
// fun3();


async function fun3(){
    return "hiiiiiii";
}
// fun3().then(data => {
//     console.log(data);
// });

async function fun4(){
    // fun3().then(data => {
    // console.log(data);
    // })

    let data = await fun3()
    console.log(data);
}
fun4()

// async function fun3(){
//     return "hiiiiiii";
// }
// // fun3().then(data => {
// //     console.log(data);
// // });

// async function fun4(){
//     fun3().then(data => {
//     console.log(data);
//     })

//     let data = await fun3()
//     console.log(data);
// }
// fun4()