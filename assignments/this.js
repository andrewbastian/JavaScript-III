/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window binding "this" will be the window or console object.
* 2.Implicit binding a method is called with a dot after. The object to the left of that dot is "this"
* 3. New Binding uses the 'keyword' "new". "this" will be the new constructor funciton.
* 4.Explicit Binding also uses new constructor, but changes the objects that "this" points to object.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function adds(num) {
  console.log(this);
  return num;
}
adds(1+2);

console.log(adds(1+4));

// Principle 2

// code example for Implicit Binding

const object = {
  statmet1: 'No experienced person is incompetent.',
  statment2: function(s2) {
    console.log(`${this.statment1} Jenkins is always blundering. ${s2}`);
    console.log(this);
  }
};
object.statment2('No competent person is always blundering.');

console.log(object);


// Principle 3

// code example for New Binding
function colorNum(number) {
  this.color = 'red';
  this.number = number;
  this.read = function() {
    console.log(this.color + this.number);
    console.log(this);
  };
}

const num1 = new colorNum('1');
const num2 = new colorNum('2');

num1.read();
num2.read();


// Principle 4

// code example for Explicit Binding
function colorNum(number) {
  this.color = 'blue';
  this.number = number;
  this.read = function() {
    console.log(this.color + this.number);
    console.log(this);
  };
}
num1.read.call("3"); num2.read.apply("4");
