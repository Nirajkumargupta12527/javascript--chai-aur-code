// let myDate=new Date();
// console.log(myDate);
// console.log(myDate.toLocaleString());//this is a function 
// console.log(myDate.toLocaleString);// this is not function

// // this shows months name starting with 0 ... 0--->january
// console.log(myDate.getMonth()+1); // +1 for the month to be in normal format

let currdate=Date.now();
console.log(currdate.toLocaleString());
console.log(currdate.to);

let mycreateddate=new Date(2024,6,15);
console.log(mycreateddate.toLocaleString());

// creating time stamp 
//  used for comparing two time stamps in quizes or somrthing else ... or in booking app awhere we need to check the evry seconds and compare them 
let mytimestamp=new Date("01-05-2024")
console.log(mytimestamp);
console.log(mytimestamp.toDateString());
console.log(mytimestamp.toISOString());
console.log(mytimestamp.toLocaleDateString());// it gives date in the mm/dd/yy
console.log(mytimestamp.getMonth()+1);
console.log(mytimestamp.getTimezoneOffset());
console.log(mytimestamp.toLocaleTimeString());
console.log(mytimestamp.getTime());// used to compare two times with some values 


// used to convert milliseconds into seconds 
console.log(Date.now()/1000);
// it is used tio truncate theseconds which are in the decimal format

console.log(Math.floor(Date.now()/1000));

console.log((Date.now()).getMonth());