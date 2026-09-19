function fun1(){
    return Promise.resolve("fun1")
}
function fun2(){
    return Promise.resolve("fun2")
}
function fun3(){
    return Promise.resolve("fun3")
}
let result = Promise.all([fun1(), fun2(), fun3()]);
result.then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
})