// rest and spread operator in js
//  ye sabko mila ke ek bag me dal deta hain as an array 

function calprice(...num){
    return num;
}
console.log(calprice(200,3000,40,4,40));

const user={
    username: "Niraj kumar",
    price:90
}

function handleobject(anyuser){
    console.log(`usename is ${anyuser.username} and price is   ${anyuser.price}`);
}

// iski madad se hm object ke anadar ke values ko change kar skte hian 
handleobject({
    username:"sam",
    price:90888,
})
handleobject(user);

const array=[80,3,4];
function returnsecond(getarray){
    return getarray[1];
}

console.log(returnsecond([200,300,40,50,34]));
console.log(returnsecond(array));

