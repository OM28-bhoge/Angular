var sum = 0;
var r, temp;
var num = 454;
temp = num;
while (num > 0) {
    r = num % 10;
    sum = (sum * 10) + r;
    num = num / 10;
}
if (sum == temp) {
    console.log("Number is Palindrome");
}
else {
    console.log("Number is not Palindrome");
}
