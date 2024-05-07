const id=Symbol('123')
const anotherid=Symbol('123')
console.log(id==anotherid)
console.log(id);

/***********************************************************/

// stacks and heap
// stack[primitive datatype , pass by value ya phir assan sabdo me ye copy bna ke bhejta hain ]
//  heap ek non primitive datatype hain jisme ki reference se pass hota hain ...... so agr hm refernce me change kremnge to wo sab jgh reflect hoga 

// let name="niraj kumar gupta"

//  anoter =name
// another="anish"
// console.log(name);
// console.log(another);

//object bna lete hian 
// isme refernce me change kiya to sabme change visible hoga 
let user={
    email:"niraj.2003@hotmail.com",
    pass:"123456",
}
let user2=user;
user2.email="anish.98765@hotmail.com";  //aise bhi access kiya ja skta hian isme 

console.log(user.email);
console.log(user2.email);