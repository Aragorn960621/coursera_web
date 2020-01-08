function makeMultiplier() {
  this.radius = 20;
  this.myName = "what";
  this.print = 
  function () {
  	console.log(this.radius);
  };
}
makeMultiplier();
console.log(this.radius);
var operation = new makeMultiplier();

operation.print();