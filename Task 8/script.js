/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator(a, b) {
  this.a = a;
  this.b = b;
  this.sum = (a, b) => this.a + this.b;
  this.subtraction = (a, b) => this.a - this.b;
  this.multiplication = (a, b) => this.a * this.b;
  this.division = (a, b) => this.a / this.b;
}

const numbersInput = new Calculator(25, 5);

console.log(numbersInput.sum());
console.log(numbersInput.subtraction());
console.log(numbersInput.multiplication());
console.log(numbersInput.division());
