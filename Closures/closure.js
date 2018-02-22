function calculator() {
  let value = null;
  function calculate(num) {
      let args = [...arguments];
      args.forEach((arg) => {
        value += arg;
      })
      return value;
  }

  return calculate;
}
let sum = calculator();
let result;
result = sum(1);
console.log(result)
result = sum(2);
console.log(result);
result = sum(3,4);
console.log(result);
result = sum(5,6,7);
console.log(result);