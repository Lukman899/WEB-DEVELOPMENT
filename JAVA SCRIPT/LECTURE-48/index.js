// let storage = localStorage.setItem("num", 1) // key and value should be string

let result = localStorage.getItem("num") // 1
console.log(result);
// let result = localStorage.getItem("lukman") // null
// console.log(result); null


let result2 = localStorage.key(0) // takes idx like array, if exist then return its key name on particular idx otherwise null
console.log(result2);


// localStorage.removeItem("num")

localStorage.clear