// objects ko do tarike se construct kar skte hain
// 1st is by construvctor and 2nd by literals 

// for constructor
Object.create

// from literals 

const jsUsers={
    name:"niraj kumar",
    age:20,
    email:"niraj.anish2002@gmail.com",
    
}

console.log(jsUsers.name)
console.log(jsUsers["email"])


//  this is used to change objects
jsUsers.name="anishkumargupta";
console.log(jsUsers.name);

// freeze karne ka tarika 
// Object.freeze(jsUsers);
jsUsers.name="anish";
console.log(jsUsers.name);

// create an symbol and initialise it as key in object and print it

const mySymb=Symbol("key1");
const user={
    [mySymb]:"mysymbol",
}
// it print undefined
// console.log(user.mySymb);
// better idea 
// console.log(user[mySymb]);

// using a symbol in object 
jsUsers.greeting =function(){
    console.log("hello niraj")
}
console.log(jsUsers.greeting());

jsUsers.greetingtwo=function(){
    console.log(`hello user ${jsUsers.name}`);
}
console.log(jsUsers.greetingtwo());


