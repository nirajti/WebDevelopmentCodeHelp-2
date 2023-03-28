// console.log('Jai Mata Di');
// //adding 100para
// const t1 = performance.now();
// for(let i=1; i<=100; i++) {
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is para'+ i;

//     document.body.appendChild(newElement);
// }
// const t2 = performance.now();
// console.log("this took" + (t2-t1) + "ms");


// //optimzing a bit
// const t3 = performance.now();
// let myDiv = document.createElement('div');

// for(let i=1; i<=100; i++) {
//     let element = document.createElement('p');
//     element.textContent = 'This is para'+ i;

//     myDiv.appendChild(element);
// } 
//     document.body.appendChild(myDiv);
//     const t4 = performance.now();
//     console.log("this Niraj" + (t4-t3) + "ms");


function addPara() {
    let para = document.createElement('p');
    para.textContent = 'js is single';
    document.body.appendChild(para);
}

 function appendNewMessage () {
    let para = document.createElement('p');
    para.textContent = 'Kya hal hai';
    document.body.appendChild(para);
 }
 addPara();
 appendNewMessage();