// 10. Skip a Number
// Print numbers from 1 to 10, but skip the number 5 using the continue statement.

let i = 0;
while(i < 10){
    i++;
    if(i === 5){
        continue;
    }
    console.log(i);
}