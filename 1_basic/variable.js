const accountId="12527879"
var accountEmail="niraj.anisg@gmail.com"
let accountpass="125278"
accountCity="khaira"
console.table([accountEmail,accountCity,accountId,accountpass])

// object ---------------------->
// object intializers 

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
 
const  myCar=new Car("lamborghini","svj aventador","2024");

  console.log(myCar);

//   another 
const vehicle={
    type:"suv",
    model:{year:2025,check:"electric", name:"svian"},
};

console.log(vehicle);
console.log(vehicle.type);
console.log(myCar.make);