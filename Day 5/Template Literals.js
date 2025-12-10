var age=19;
var name="Deechanya "
var str=`my age is ${age}`
console.log(str);
console.log(name+" age is "+age);

//Map
var arr=[1,2,3,4,5];
var double = arr.map(num=>num*2);
console.log(double);

//Filter 
var even=arr.filter(num=>num%2===0)
console.log(even)

//Reducer
var total = arr.reduce((sum,num)=>(sum+num),0);
console.log(total);

var evencount=arr.map(num=>num**3).filter(num=>num%2===0).reduce((sum,num)=>(sum+1),0);
console.log(evencount);

var student = [
    {name: "Deechanya", mark: 95},
    {name: "Aarav", mark: 85},
    {name: "Aaradhya", mark: 64},
    {name: "Sudeep", mark:75},
]
//filter
var studentRank=student.filter(s=>s.mark>80);
console.log(studentRank);
//map
var studentName=student.map(s=>s.name);
console.log(studentName);
//reduce
var totalMarks=student.reduce((sum,s)=>(sum+s.mark),0);
console.log(totalMarks);
var avg= totalMarks/student.length;
console.log(avg);