//conditional statements
var a=5;
if(a%2===0){
    console.log("Even Number");
}
//if..else
    if(a%2===0){
        console.log("Even Number");
    }else{
        console.log("Odd Number");
    }
 //else if
 var mark=90;
 if(mark>=90) console.log("O Grade");   
 else if(mark>=70) console.log("A Grade");
 else if(mark>=50) console.log("B Grade");
 else console.log("Fail");

 //switch
 var day=1;
 switch (day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid Day"); 
 }

//ternary operator
 a=10;
var result = (a%2===0) ? "Even Number" : "Odd Number";
console.log(result);

// DATA TYPES CHECK
var big = 9007199254740991;
var sym = Symbol("li");

console.log(typeof a);
console.log(typeof result);
console.log(typeof q);
console.log(typeof p);
console.log(typeof bool);
console.log(typeof r);
console.log(typeof s);
console.log(typeof big);
console.log(typeof sym);

// ARROW FUNCTION
var add = (x, y) => x + y;
console.log(add(5, 10));

// SPREAD OPERATOR
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [...arr1, 20, 10];
console.log(arr1);
console.log(arr2);

/*DESTRUCTURING OBJECT (Corrected)
const { name, age, mark } = {
    name: "Nethra",
    age: 19,
    mark: 95
};
console.log(name);
console.log(age);
console.log(mark);*/

// for...in loop
var arr = [10, 20, 30, 40, 50];
for (let i in arr) {
    console.log(i);    // prints index
}

// for...of loop
for (let j of arr) {
    console.log(j);    // prints value
}
//for...each loop
arr.forEach((value, index) => {
    console.log(value, index);
});

// class and object
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    display() {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
    }
}
    var p1=new Person("Deechanya",19);
    p1.display();


//prime number check
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}   

//palindrome number check
function isPalindrome(num) {
    const str = num.toString();
    return str === str.split('').reverse().join('');
}


//functions
add();
function add(){
    console.log(10+20);
}
//for in(object)
var obj={
    name:"Deechanya",
    age:19,
    mark:95
};
for(let i in obj){
    console.log(i,obj[i]);
}   

//callback function
var demo=()=>{
    console.log("Hello world!")
}
var main=(callback)=>{
    console.log("Main called");
    callback();
}
//main(demo);
var main=(callback)=>{
    console.log("Main called");
    callback();
}
main(()=>{
    console.log("Hello World");
});

var Demo=()=>{
    setTimeout(()=>{
        console.log("Processing")
        },2000)
    }
    Demo();