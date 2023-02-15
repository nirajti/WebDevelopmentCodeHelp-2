//console.log('Niraj');

//Function
console.log("function")


run(); // this will also look
function run() {
    console.log("Running");
}

// function assigment

let stand = function walk() {
    console.log("walking")
}

stand();
let jump = stand;

jump();

// Anonymous

let stand2 = function() {
    console.log("walking")
}

stand();

// Js is dynamic language

let a = 1;
a = 'a'
console.log(a);

// Dynamic function ()
function sum(a,b){
    return a+a;
}

// console.log(sum(1)) //will give Nan (underfined for b)
// console.log(sum()) // will give Nan (underfined for a and b)
//console.log(sum(1, 2, 3, 4)) // only 1 and 2 will be taken rest is waste now
console.log(sum(1,2));

// Argument 
function sum1(a,b) {
    console.log(arguments);
    return a+b;
}

let ans = sum1(1,2,3,4,5,6)
console.log(ans)

// pass number as much as u want (fdynamic function will multiple parameters)
function sum2(a,b){
    let total = 0
    for(let value of arguments)
    total = total+value;
    return total;
}
let ans1 = sum2(2,3,50,5,6)
console.log(ans1)

// Rest opertor
function sum(...args) {
    console.log(args)

}
sum(1,2,3,4,5,6);

// Also (and no parameter is allowed after args it is a last paramer)
function sum1(num , value, ...args){
    console.log(args)
}

sum(1,2,3,4,5,6);
sum(7,8,9,4,56,8);

// default parameters 
function interest(p , r=5, t=2){ // if ser input any value of r then it will be of user's value of no value is entered it will be as default 5
    return p*r*t/100; 
}
console.log(interest(10000,10,5))
console.log(interest(1000,5)) // Non without default paramter, if any of the value is removed it will show Nan
// for default value (fixed)
console.log(interest(10000,5))

//  let person = {
//       fname : 'Niraj'
//       iname : 'tiwari'
// };

// function fullname (){ // this is only a read only function 
// return '${person.fname} ${person.iname}
//}

// console.log(fullname());

//// for getter and setter
// // for getter use get keyword

// let person} = {
    //fname: 'love',
    //iname: 'babbar',

    // get fullName() {
        // return '$(person.frame) ${person.lanme}';
// }

// in call 
// console.log(person.fullName); //getter
// person1.fullname = 'Niraj kumar'; //setter
// console.log(person1.fullName)


// try catch to throw error
// try {
    //person1.fullname = true;

// }
// catch (e) {
    // alert(e)
//}

//Scope

// for(var i=0; i<10; i++){

//}

// console.log(i);
// // 
// if(true){
    // var a= 5;
 // }
 //console.log(a)
 ////
 // function a(){
    // const ab=5;
 // }

 // // 
 // const ab=5;
 // fuction b)(){
    // const ab=5;
  // }

  // reducing an array
  let arr = [1,2,3,4,5,6];
  let total = 0;


  for (let value in arr)
  total = total + value;
  console.log(total);

  // to reduce

  let totalSum = arr.reduce((accumulator , currntvalue)=> accumulator + currntvalue, 0);
  console.log("printing the sum of ")
  console.log(totalSum)


