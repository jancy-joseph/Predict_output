var num2 = 10;
if(num2 % 2 == 0){
    console.log("Divisible by 2");
    num2 = num2 * 3;
}
if(num2 % 3 == 0){
    console.log("Divisible by 3");
    num2 = num2 / 2;   
}
else if(num2 % 5 == 0){
    console.log("Divisible by 5");
    num2 = num2 * 7;
}
if(num2 % 7 == 0){
    console.log("Divisible by 7");
    num2 = num2 - 10;
}
else{
    console.log("Almost there!")
    num2 = num2 / 2;
}
console.log(num2);
/*
Output:

 Divisible by 2 gets logged in console and num2 becomes 30. 
30 is divisble by 3 so message "Divisble by 3" gets logged and num2 becomes 15.
15 is not divible by 7 so "Almost there!" gets logged and num2 becomes 7.5
7.5 gets logged

Divisible by 2
Divisible by 3
Almost there!
7.5


*/
