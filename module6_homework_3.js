function addNum(num1) {
  return function(num2) {
    return num1 + num2;
  }
}

let sum = addNum(5)(10);
console.log(sum); // 15