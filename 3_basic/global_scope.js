//interseting chizzz :)
if(1){
    let a=1;
    var b=90;
    const v=09;
}
// ye dono erroe denge jabki last me var wala nhi dega ye global ban jata hia sab jgh hi 

// console.log(a);
// console.log(c);
console.log(b);

//scope level and mini hoisting
function one(){
    const username="Niraj kumar"
    function two(){
        const website="pornhub"
        console.log(username);
    }
    // this throws error in the code as it is not global for the main function
    // console.log(website);
    two();
}
one();


// INTERSTING :)
//  ye bhi kam krega khi bhi call kr skte hian isse 
console.log(addone(9));

function addone(num){
    return num+1;
}
console.log(addone(6));

//  but the catch in that function and intersetiing 

//  this throws error 
// console.log(addtwo(00));
const addtwo=function(num){
    return num+2;
}
console.log(addtwo(90));

// the above thing is called hoisting

