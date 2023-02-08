//console.log is used to print in javascript 

console.log("Hello india....");
console.log("Niraj");
console.log("ji ha");

// (1) variable :

// let b = 8;
//  let a = 'Niraj'
// // let a = true;
// // let a = 12.4
// console.log(a);

// let a = 5; // (Numbers)
// let name="Niraj"; // (string)
// let start=true;   // (Bollean)
// let b= 12.5      // (Float)
console.log(b);  //print in javascript

var a = 5;
var a = 5; //redeclartion in var
console.log(a);

const co = 12;
console.log(co); // fixed const

// (2) Dynamic typing in javascript

let lastName = 'Niraj';
console.log(lastName);
lastName = 5; // data type changed
console.log(lastName);

let num = 4;
let num1 = 2;
console.log(num-num1);
let num2 = 4**4; //4 to the power 4
console.log(num1);
// similaryly for (- , / , % , *)


// Comparison operator
console.log(2>6); // false
console.log(2<6); // True
console.log(3>=3) // True
console.log(2 <5) // True


let number = 5;
let str = '2';
console.log(number == str); // True (loose equality)
console.log(number === str); // True (strict equality)

let x = 6;
console.log(x++); // this will  print 7 

let y = 6;
console.log(y++); // this will print 6 but then pdate the value of y to 7
                 // because the value of y automitically added to next line.
console.log(y); // here its value of 7

// Ternary Opertor
let age =17;
let status = (age >=18); //'can vote' , 'cannot vote'
console.log(status); // no vote

// run in console in browers
// (true || false)= true
// (true || true)= true
// (false || false) = false
// (false || true)= true
// (false || 5 || 6)= 6 condition will cheak the started point and value will declear last

// (5) IF ELSE CONTROL STATMENT
console.log('if else');
let marks=98;
if(marks >= 90) {
    console.log("A grade");
}
 else if (marks >= 80) {
    console.log('B grade');
 }
 else if (marks >=70) {
    console.log('C grade');
 }
 else if (marks >=60) {
    console.log('D grade');
 }
 else if (marks >=50) {
    console.log('E grade');
 }
 else if (marks >=40) {
    console.log('fail');
 }

 // (6) SWITCH CASE CONTROL STATEMENT
 console.log('switch case');
 let numberr =2;
 switch (numberr) {
    case 1 : console.log('A');
    break;
    case 2 : console.log('B');
    break;
    case 3 : console.log('c');
    break;
    default : console.log('D');
 }

 // (7) Looooooooooooooooooooooooooopppppppssssssss

 // for loop:-
 console.log('For Loop');
 for (let i = 0; i<5; i++); {
    console.log(i);
 }

 // while loop
 console.log('while loop');
 let j = 1
 while (j < 4) {
    console.log(j);
    j++
 }
 
 // Do-while loop
 console.log('Do -while loop');
 let k=0;
 do {
    console.log('yes');
    k++;
 } while(k<10)





