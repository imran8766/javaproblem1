var a = 10;
var b = 25;
console.log("Before swap; a=", a, "b =", b);
var temp = a;
a = b;
b = temp;
console.log("After swap; a=", a, "b =", b);


var p = 10;
var q = 15;
[p, q] = [q, p];
console.log("After swap; p=", p, "q =", q);