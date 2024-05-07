// this and arrow functionin js

const user={
    username:"Niraj kumar gupta",
    roll:12116789,
    price:909097987809,

    welcomemessage:function(){
        console.log(` ${this.username},welcome to the website`);
        // the down code will tell you aboout the function is made 
        // that what is inside it like username password and all

        // console.log(this);
    }
}
user.welcomemessage();
// this will give an empty scope in case of elemnt but in browser it tells about the windows global variable scope
console.log(this);

function chai(){
     username ="niraj",
    //   it gives all the global values 
    console.log(this);
    console.log(this.username);
}
chai();

// Arrow function

const addtwo=(num1,num2)=>{
    return num1+num2;;
}
console.log(addtwo(9,95));