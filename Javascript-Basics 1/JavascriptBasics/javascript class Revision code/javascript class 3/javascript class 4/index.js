// console.log('Jai maa');

// let a = 4;
// let b = 'Niraj';
// console.log(a,b);

maa();
function maa() {
  console.log('Niraj');
}
run();
// function declaration
function run() {
    console.log('running');
}
// function call or invoke

//Named function assigmnet
let stand = function walk() {
    console.log('walking');
};
stand();
let jump = stand;
jump;

//Anoymouns function


// let x =1;
// x = 'a';
// console.log(x);

// function sum(a,b) {
// return a+b;
// }
// // console.log(sum(3,2));
// console.log(sum(3,10,5));

// function sum(a,b) {
//     let total = 0;
//      for(let value of arguments)
//        total = total + value;
//        return total;
// }
// let ans = sum(1,2,3,4,5,10);
// console.log(ans);

//rest parameter
// function sum(num,value,...args) {
//     console.log(args);
// }
// sum(1,2,3,4,5);

// default parametrs
// function intereset(p,r=2,q=5) {
//     return p*r*q/100;
// }
// console.log(intereset(100,10,));

//Getter Setter
//getter -> access properties
//setter -> change or mutate properties

// let person ={
//     fName: 'Niraj',
//     lName: 'Tiwari'
// };

// function fullName() {
//     return `${person.fName} ${person.lName}`;
// }
// console.log(fullName);

// let person = {
//     firstName = 'Niraj'
//     lastName = 'babu',
//     get fullName() {
//         return `${person.firstName} ${person.lastName}`;
//     };
//     set fullName(value) {
//         let parts = value.split('');
//         this.firstName = parts(0);
//         this.lastName = parts(1);
//     }
// };

// person.fullName = 'Rahul kumar';
// console.log(person.fullName);