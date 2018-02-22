function calculateSum() {
  let value = 0;

  //Первый раз тоже можно передавать несколько значений
  function calculate(num) {
      let args = [...arguments];
      args.forEach((arg) => {
        value += arg;
      })
    return value;
  }

  return calculate;
}
let sum = calculateSum();


let result;
result = sum(1);
console.log(result)
result = sum(2);
console.log(result);
result = sum(3,4);
console.log(result);
result = sum(5,6,7);
console.log(result);