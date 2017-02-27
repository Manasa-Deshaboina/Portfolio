function Car( model, year, miles ) {
  this.model = model;
  this.year = year;
  this.miles = miles;
 
  this.toString = function () {
    return this.model + " has done " + this.miles + " miles";
  };
}
 
// Usage:
// We can create new instances of the car
var civic = new Car( "Honda Civic", 2009, 20000 );
var mondeo = new Car( "Ford Mondeo", 2010, 5000 );
 
// and then open our browser console to view the
// output of the toString() method being called on
// these objects

console.log( civic.toString() );
console.log( mondeo.toString() );

//CONS:
// 1. it makes inheritance difficult 
//2. functions such as toString() are redefined for each of the new objects created using the Car constructor. 