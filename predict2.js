var num1 = 10;
var num2 = 5;
if(num1 % num2 == 0){
    num1 += 3;
    num2 += 4;
}
else if(num1 % 2 == 0){
    num1 = num2 / 3;
}
else{
    num2 = num1 / 2;
}
if(num1 == 13){
    num1 = num1 / 2;
    num2 = Math.trunc(num1);
}
if(num2 % 3 == 0){
    num1 += 4.5;
}
else{
    num1 -= 2;
}
console.log(num1);
console.log(num2);
/*
Num1 =10
Num2 =5

10%5 is 0 so num1 becomes 13
And num2 becomes 9

Num1 == 13
Num1 becomes 13/2 6.5
Num2 = truncated value of num1 so 6

becuase num2 is dvisble by 3 num1 becomes 6.5+4.5 so 11
So the below gets logged


11
6 
*/
