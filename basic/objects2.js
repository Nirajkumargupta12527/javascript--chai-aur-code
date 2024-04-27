const tinderuser=new Object();
tinderuser.email="niausb@gmail.com";
tinderuser.isloggedin=false;
tinderuser.id="123abc"
console.log(tinderuser);

const regularuser={
    email:"bkcbskj@hmnmmd",
    fullname:{
        userfullname:{
            firstname:"niraj",
            lastname:"kumar",
        }
    }
}
console.log(regularuser);
console.log(regularuser.fullname?.userfullname.firstname);

//  ? tell about if it is present then only do the following operation

// combining two objects
const obj1={1:"q",2:"o"};
const obj2={3:"a",4:"r"};
const obj3=Object.assign({},obj1,obj2);
console.log(obj3);

// this is not done , this puts obbjects in  objets as an element
// const obj3={obj1,obj2};
// console.log(obj3);
const obj4={...obj1,...obj2};
console.log(obj4);

//  data from database 
const userdata=[{},{},{}]
// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));

console.log(Object.entries(tinderuser));