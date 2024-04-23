const myArr=[1,3,6,8,95,78];
console.log(myArr);

// we can take as many data types as we want for example this 
const unique=[1,4,7,"niraj",false,"c"];
console.log(unique);
console.log(unique[1]);

const myheroes=new Array("shatiman", "hulk","thor",0,89);
console.log(myheroes);
myArr.push(9845);
console.log(myArr);
myArr.pop();

console.log(myArr);
// it is used for thie opertaion to add a elemnt in starting of the array 
myArr.unshift(100);
console.log(myArr);
// this  function is used to delete the first elemnt of the given array 
myArr.shift();
console.log(myArr);

// it is used to check if the given arr contains the element or not 
console.log(myArr.includes(9));
// it f=gives the index of that element
console.log(myArr.indexOf(9));

const newarr=myArr.join()
console.log(myArr);
// it converts the arr into the string format 
console.log(newarr);

// seprate and importamt concept 
//  it is used for the getting a slice of the given array from index start to the ending index ...not includedd 
// it doesnt changes the main array 
 const myn1=myArr.slice(0,2);
 console.log(myn1);
 console.log("A",myArr);

//  splec wala bich ke utne elents ko udda deta hain main array se bhi aur ye last index ko include bhi krta hain 

 const myn2=myArr.splice(1,4);
 console.log(myn2);

 console.log("B",myArr);