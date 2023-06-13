function countEvenOddZero(array) {
  let evenCount = 0;
  let oddCount = 0;
  let zeroCount = 0;

  for (let i = 0; i < array.length; i++) {
    const element = array[i];

    if (typeof element === 'number' && !isNaN(element)) {
      if (element === 0) {
        zeroCount++;
      } else if (element % 2 === 0) {
        evenCount++;
      } else {
        oddCount++;
      }
    }
  }

  console.log('Количество чётных элементов:', evenCount);
  console.log('Количество нечётных элементов:', oddCount);
  console.log('Количество нулевых элементов:', zeroCount);
}

// Пример использования функции
const array = [1, 2, 0, 'a', null, 5, 8, 0, 'b', undefined, 4];
countEvenOddZero(array);