// // найти расстояние между двумя точками c помощью функции
// const distance = (x1, x2, y1, y2) => Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
//
// console.log(distance(30,20,13,38));
//
// // // пусть у нас есть три числа, надо убедиться что они удовлетворяют теореме Пифагора
//
// const pifagor = (a, b, c) => (a ** 2 + b ** 2 > c ** 2) && (b ** 2 + c ** 2 > a ** 2) &&
//   (a ** 2 + c ** 2 > b ** 2);
//
// console.log(pifagor(10, 9, 8));
//
// // даны три числа, убедиться что они могут являться сторонами треугольника
//
// const sideTriangle = (a, b, c) => (a + b > c) && (b + c > a) && (c + a > b);
//
// console.log(sideTriangle(10, 13, 15));

// заполнить массив 20 числами которые делятся на 3, или на 5, или на 15 и вывести его на экран функцией (1)

// 1 способ

// function numbers1() {
//   const x = [];
//   let number = 3;
//   while (x.length < 20) {
//     const matched = number % 3 === 0 || number % 5 === 0 || number % 15 === 0;
//     if (matched) {
//       x.push(number);
//     }
//     number += 1;
//   }
//   return x
// }
//
// console.log(numbers1());

// 2 способ.........................................................


// function numbers(arrayLengths) {
//   const array = [];
//   const filteredArray = [];
//
//   for (let i = 1; i <= arrayLengths; i++) {
//     array.push(i);
//   }
//
//   for (let i = 1; i < array.length; i++) {
//
//     if ((array[i] % 3 === 0) || (array[i] % 5 === 0) || (array[i] % 15 === 0)) {
//       filteredArray.push(array[i]);
//     }
//   }
//   return filteredArray;
// }

// console.log(numbers(50));


// 3 cпособ **********************************************************************
//
// function filledArray(arrayLengths) {
//   const array = [];
//   for (let i = 1; i <= arrayLengths; i++) {
//     array.push(i);
//   }
//
//   return array;
// }
//
// const arrayNumbers = filledArray(50);
//
// function filteredArray(array) {
//   const filteredArray = [];
//
//   for (let i = 0; i <= array.length; i++) {
//     if (array[i] % 3 === 0 || array[i] % 5 === 0 || array[i] % 15 === 0) {
//       filteredArray.push(array[i]);
//
//     }
//     if (filteredArray.length === 20) {
//       return filteredArray;
//     }
//   }
//   return filteredArray;
// }
//
// const filtered = filteredArray(arrayNumbers);
// console.log(filtered);
//
// // для (1) посчитать произведение всех элементов находящихся в каждой третьей позиции
// function calcComposition(calc) {
//   let getNumber = 1;
//   for (let i = 0; i < calc.length; i += 3) {
//     getNumber *= calc[i];
//   }
//   return getNumber;
// }
//
// console.log(calcComposition(filtered));
//
// // для (1) посчитать среднее арифметическое всех чисел
// function averageValue(array) {
//   let sum = 0;
//
//   for (let i = 0; i < array.length; i++) {
//     sum += array[i];
//   }
//   return sum / array.length;
// }
//
// console.log(averageValue(filtered));
// ********************************************************************************
//вывести матрицу таблицы умножения (2)

function matrixLine(line,column) {
  const array = [];

  for (let i = 1; i <= line; i++) {
    const table = [];

    for (let j = 1; j <= column; j++) {
      table.push(i * j);
    }
    array.push(table);
  }
  return array;
}

const testLine = matrixLine(9, 9);
console.table(testLine);
