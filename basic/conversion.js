let score="33"
let scoreinnumber=Number(score)
console.log(scoreinnumber)
console.log(typeof scoreinnumber);
 
// 33abc -> val=NaN,number ; 33 ->number ; null-> val=0 ,number ; undefined ->NaN , undefined

let bool=""
let conv=Boolean(bool)
console.log(conv);
console.log(typeof conv);

// ""->false ; ggvkjk->true ;1->true ;0->false

let num=879789
let str=String(num)
console.log(str);
console.log(typeof str);
  
//  Conversions
console.log("1"+2+2);
console.log(1+1+"2");
console.log(1+"2");
console.log(+true);
console.log(+"");
// console.log(true+);  wrong way to writre -