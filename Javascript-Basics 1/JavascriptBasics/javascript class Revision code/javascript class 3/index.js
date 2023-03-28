console.log('bageshwar dham ki jai');
//string object create (cheack mathod typeof lastName)
// touppercase, tolowercase, trimand search google string mdn )
let lastName = 'Niraj';

let firstName = new String ('tiwari');
let message = `Hello $(Niraj),

Thanks for the opportunity 

Regards,
Niraj kumar Tiwari`;

let words = message.split('');

console.log(message);

// Date and Times
// method 1
let date = new Date()
// Method 2
let date2 = new Date('june 20 1998 ');
// Method 3
let date3 = new Date(1998,1,005,7 );

date2.getDate(05);
console.log(date3);

// Array - object,type 
// Object/ refrance type collection of item .
let number = [1,2,3,4,5];
console.log(number);

// end - path
// beginning - unshift

//middle - splice
//searching
console.log(number);

// we want to cheak a if number in array 
if(number.index(4) != -1);
console.log("present");

let course = [
    {no:1, name:'Niraj'},
    {no:2, name:'tiwari'},
    
];
console.log(course);

 console.log(course.indexOf{no:1, name:'Niraj'});

 let course = courses.find(function(course) {
    return course.name == 'Niraj';
 })
 console.log(course);

course.find(function(course){
    return course.name === 'Niraj';
});
console.log(course);

let numbers = [1,7,8,6,9,10];
// End
number.pop();
//beginning
numbers.shift();
//middle
numbers.splice(2,1);

// console.log(numbers);

// Emptying an Array
 let numbers = [1,2,3,4,5,6];
//numbers = [];
//numbers.length = 0; ye pratoces best hai
//numbers.splice(0,numbers,length);
console.log(numbers);

combining and slicing array
let first = [1,2,3];
let second = [4,5,6];
let combind = first.concat(second);
console.log(combind);

let splice = combind.slice(2,3,);
console.log(slice); 

// Spead operator
let first = [1,2,3];
let second = [4,5,6];

let combined = [...first, 'a',...second, 'b', 'true'];
console.log(combined);
// copy kese create kru
let another = [...combined];

// Iterating an Array:
let arr = [40,50,60];
for(let value of arr) {
    console.log(arr);
}

arr.forEach(function(number){
    console.log(number);
})

// Joining Arrays;

let numbers = [10,2,45,30];
const joined = numbers.join(',');
console.log(joined);

let massage = 'This is my first code';
let parts = massage.split('');
console.log(parts);
// join method 2
let joined = parts.join('_');
console.log(joined);

let numbers = [40,60,84,0];
numbers.sort();
console.log(numbers);

// Filtering Arrays
let numbers = [1,2,-5,-6,9];

 let filter =  numbers.filter(function(value){
    return value <=0; // yha value change kr sakte hai
  })
  console.log(filter);

// Mapping Arrays
let numbers = [5,6,9,7,8];

let items = numbers.map(function(value){
    return "student_no" + value;
})
console.log(items);

let numbers = [1,2,-3,-4];
let filtered = numbers.filter(value => value =>0);

let items = filtered.map(function(num){
    return {value:num};
})
console.log(items);
