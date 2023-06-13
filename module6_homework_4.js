function printNumbers(num1, num2) {
  let currentNum = num1;

  let intervalId = setInterval(function() {
    console.log(currentNum);
    currentNum++;

    if (currentNum > num2) {
      clearInterval(intervalId);
    }
  }, 1000);
}
  
  // Пример использования функции
  printNumbers(5, 25);