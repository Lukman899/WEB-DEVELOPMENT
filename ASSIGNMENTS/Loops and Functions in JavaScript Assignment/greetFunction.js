// 11. Function with a Parameter
// Create a function named greetUser(name) that takes a name as a parameter and displays a greeting
// message.

function greetUser(name = "Lukman", greetings = "Hello"){
    console.log(`${greetings}, ${name}`);
}
greetUser("Lukman");