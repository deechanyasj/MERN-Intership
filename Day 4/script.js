/* Variable declarations */
var x; 
x = 15;
var x = 25;   // var allows redeclaration
let y; 
y = 12;
y = 22;       // let allows reassignment but not redeclaration
const z = 30; // const cannot be reassigned

var num = 50;        // number
var str = "World";   // string
var flag = false;    // boolean
var undef;           // undefined
var empty = null;    // null

var arr = [10, 20, 30, 40, 50];
console.log(arr);

var person = {       // object
    name: "Arjun",
    age: 21
};
console.log(person);

/* Arithmetic Operators (+,-,*,/,%) */
var m = 8;
var n = 3;
console.log(m + n);  // 11
console.log(m - n);  // 5
console.log(m * n);  // 24
console.log(m / n);  // 2.666...
console.log(m % n);  // 2

/* Relational Operators (>,<,>=,<=,==,!=,===,!==) */
var p = 7;
var q = 7;
console.log(p > q);   // false
console.log(p < q);   // false
console.log(p >= q);  // true
console.log(p <= q);  // true
console.log(p == q);  // true (value only)
console.log(p != q);  // false
console.log(p === q); // true (value + type)
console.log(p !== q); // false

/* Assignment Operators (=,+=,-=,*=,/=,%=) */
var r = 5;
console.log(r);   // 5
r += 3;
console.log(r);   // 8
r -= 2;
console.log(r);   // 6
r *= 4;
console.log(r);   // 24
r /= 6;
console.log(r);   // 4
r %= 3;
console.log(r);   // 1

/* Logical Operators (&&, ||, !) */
var cond1 = true;
var cond2 = false;
console.log(cond1 && cond2); // false
console.log(cond1 || cond2); // true
console.log(!cond1);         // false
console.log(!cond2);         // true

/* For loop */
for (let i = 1; i <= 5; i++) {
    console.log("For loop:", i);
}

/* While loop */
var counter = 0;
while (counter < 5) {
    console.log("While loop:", counter);
    counter++;
}

/* Do-While loop */
var k = 0;
do {
    console.log("Do-While loop:", k);
    k++;
} while (k < 3);