const marvel_heroes=["hulk","spiderman","thor"]
const dc_heres=["flash","batman"]
// this wil push one array in the another array 
// marvel_heroes.push(dc_heres);
console.log(marvel_heroes);
// this is a good practise
// const new_array=marvel_heroes.concat(dc_heres)
// console.log(new_array);

//  thisis a good practise .. this will addtwo or more arrys in a single arrays
const all_new_array=[...marvel_heroes,...dc_heres]
console.log(all_new_array);

// this is used to flTTEN any arrays 
const new_atta=[1,2,3,4,[2,4,4],[246,6,7,7,[35,6,6,6,7]]]
const real_another=new_atta.flat(Infinity);
console.log(real_another);

//  to convert any string into array format 

console.log(Array.isArray("niraj"));
console.log(Array.from("niraj kumar gupta"));

console.log(Array.from({name:"nirajkumargupta"})); // b\very interesting this will return an empty array 

// to add more than two strings at atime 

let score1=100
let score2=200
let score3=800
console.log(Array.of(score1,score2,score3));