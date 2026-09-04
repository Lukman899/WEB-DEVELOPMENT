// 8. Sum of Even Numbers
// Write a program to calculate the sum of all even numbers from 1 to 20
let i = 1;
let n = 0;
while (i <= 20) {
    if (i % 2 === 0) {
         n = i + n;
    }
    i++;
}
    console.log(n);
