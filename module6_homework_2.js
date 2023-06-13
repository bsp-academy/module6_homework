function isPrime(num) {
    if (num <= 1 || num > 1000) {
      return "Данные неверны";
    }
  
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return "Не простое число";
      }
    }
  
    return "Простое число";
  }
  
  console.log(isPrime(7)); // Простое число
  console.log(isPrime(20)); // Не простое число
  console.log(isPrime(0)); // Данные неверны
  console.log(isPrime(1001)); // Данные неверны