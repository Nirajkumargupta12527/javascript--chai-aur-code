/// this contains numbers and math function 

const num=500
console.log(num);
const score =new Number(400);
console.log(score)

console.log(score.toString());
console.log(score.toString().length);
console.log(score.toFixed(2));   //  it gives us the precision required that is nuber of zeroes after the number 

const number=23.8966;
console.log(number.toPrecision(2));

const numb=123.8966;
console.log(numb.toPrecision(3));
const hundred=1000000;
console.log(hundred.toLocaleString());  // used for comma in numnbers in us format 
console.log(hundred.toLocaleString(`en-IN`));  // used for seperator in indian format 


///*************  math  __________*/
//isme bhut  sare function hote hain 
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.abs(-4.5));
console.log(Math.round(4.6));
console.log(Math.floor(4.3));
console.log(Math.ceil(4.7));

console.log(Math.min(4,5,2,4,4,5,7,0));
console.log(Math.max(4,5,67,76,7,4,42));

console.log(Math.random());
console.log((Math.random()*10) +1);
const min=10;
const max=20;

console.log((Math.random()*(max-min+1)) +min); 

//the above formula is used for the ranging it in between the min and the max 