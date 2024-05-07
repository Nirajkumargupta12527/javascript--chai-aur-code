function saymyname(){
    console.log("N");
    console.log("i");
    console.log("r");
    console.log("a");
    console.log("j");
}
saymyname();

function addition(num1,num2){
   console.log(num1+num2);
}

const res=addition(9,8);

//  this gives undefinded as the value


console.log(res);

function add(num1,num2){
    let result=num1+num2;
    return result;
}
const result=add(5,3);
console.log(result);
console.log("result:",result);

function addnum(num1,num2){
    return num1+num2;
}
console.log(addnum(78,8));