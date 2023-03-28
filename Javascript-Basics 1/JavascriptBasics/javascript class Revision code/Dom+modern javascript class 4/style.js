console.log('Hello ji');

// Timeout function

setTimeout(function(){
    console.log('Niraj Kumar Tiwari');
},10000)
 function sync() {
    console.log('first');

 }
 sync();
    
console.log('second');

let meraPromise = new Promise(function(resolve,reject){
 setTimeout(function() {
    console.log('I am inside Promise ok');
 }, 5000);
  resolve(2236);
// reject(new Error('Bhai saheb aap error aaye hai'));
// promise function ke help se ham ek isko copy paste kr skate hai
})
  console.log('pehla');

 let async =  function abcd() {
    return (abcd);
    console.log(async);
}
console.log('ji');

 async function utility() {
    let DelhiMausam = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('Bihar me koun sa mausam h');
        },1000);
    });
    
    let PuneMausam = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('pune me koun sa mausam h');
        },5000);
    });
    let dm = DelhiMausam;
    let pn = PuneMausam;

    return(dm,pn);
}
utility();
// ap pahle apna code run kro then uske bad inspect pr click 
// kro or console ko slect kro phir ap typ kro utility(); phir apko result show ho jayega.
// or bhi statement hai ap cheak kar skate hai yha se
