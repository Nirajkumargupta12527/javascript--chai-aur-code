/*****...............string    ............... */
// string have many more functions in tis like converting it to lower case or upper case.... and we can also eliminte spces using trim funtion which elimintes spaces from bothe ends but there  is also function which elimintes only from last or from start ...also.... string is an object we do more strig check in inspect  of any web page  ... there we can see the prootypes which are basically the functions of strings ....we can also convert string into an array and also store string as key value pair 
//   to add two string ` we use this as ${name }`like this is called as the string interpolation which basically acts on place holder in an string 
//   we can also use char at and index of specific functoin in string to find out whether it is present in the string or not .

const str1="this is cable ";
const str2="iphone andriod "

console.log(str1+str2);  //wrong way to write 

console.log(`this is the example of cable ${str1} and thi easo ${str2}`)
// above is called string interpolation in string which woks on place holdrer  algo .
const gamename=new String ("niraj kumar " )
const repocount=90;

console.log(`this is also an example ${gamename} also this repocount is  ${repocount}`);

console.log(gamename.toUpperCase());
console.log(gamename);
const length=gamename.length;
console.log(length);

// after trimming 
console.log(gamename.trim())  //ye wala kewal end aur start ka hatata hain na ki bich ka 
//after trimming both the start and end
console.log(gamename.trim().length);

console.log(gamename.__proto__); // it shows bject associated with this 
console.log(gamename.charAt(4));
console.log(gamename.indexOf('r')); // it is based on 0 base indexing 

// some differnet prpoperties
const obj = {};

obj.x = 3;
console.log(obj.x); // Prints 3.
console.log(obj); // Prints { x: 3 }.

const key = "y";
obj[key] = 5;
console.log(obj[key]); // Prints 5.
console.log(obj); // Prints { x: 3, y: 5 }.

