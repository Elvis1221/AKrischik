// // заполнить массив 20 числами которые делятся на 3, или на 5, или на 15 и вывести его на экран (цикл for) (1)
const array = [];
const filteredArray = [];

for (let i = 1; i <= 50; i++) {
  array.push(i);
}

for (let i = 0; i < array.length; i++) {
  if (!(array[i] % 3) || !(array[i] % 5) || !(array[i] % 15)) {
    filteredArray.push(array[i]);
  }
}

console.log(filteredArray);

//
//
// //для (1) посчитать произведение всех элементов находящихся в каждой третьей позиции
let averagePoz = 1;

for (let i = 2; i < filteredArray.length; i += 3) {
  averagePoz *= filteredArray[i]
}
console.log(averagePoz);


// //для (1) посчитать среднее арифметическое всех чисел
//
let average = 0;

for (let i = 0; i < filteredArray.length; i++){
    average += filteredArray[i] / filteredArray.length;
}
console.log(average);

//
// // для (1) найти максимальное и минимальное число
let max = 0;

for (let i = 0; i < filteredArray.length; i++) {
  if (filteredArray[i] > max)
    max = filteredArray[i];
}

console.log(max);

let min = max;

for (let i = 0; i < filteredArray.length; i++) {
  if (filteredArray[i] < min)
    min = filteredArray[i];
}

console.log(min);

// //вывести матрицу таблицы умножения (2)
//
const table = [];

for (let i = 1; i <= 10; i++) {
  const row = [];

  for (let k = 1; k <= 10; k++) {
    row.push(i * k)
  }

  table.push(row)
}

console.table(table);
//

// //для (2) посчитать сумму чисел находящихся на главной диагонали
let sum = 1;

for (let i = 0; i < table.length; i++) {
  sum *= table[i][i]
}

console.log(sum)

// //для (2) посчитать среднее геометрическое чисел находящихся на вспомогательной диагонали
let sum2 = 1;

for (let i = 9; i > 0; i--) {
  sum2 += table[i][i] / 9;
}

console.log(sum2)


// // для (2) посчитать сумму всех элементов для каждого чётного столбца
// //
let sum3 = 0

for (let i = 0; i < table.length; i++) {
  for (let k = 1; k < table[i].length; k += 2) {
    sum3 += table[i][k]
  }
}

console.log(sum3)

//
// // для (2) посчитать среднее арифметическое сумм каждой нечётной строки
// //
let sum4 = 0

for (let i = 0; i < table.length; i++) {
  for (let k = 0; k < table[i].length; k += 2) {
    sum4 += table[i][k]
  }
}

console.log(sum4)


//
// // для (2) найти максимальное и минимальное число:
// // 1. для всей матрицы
let sumMax = 0

for (let i = 0; i < table.length; i++) {
  for (let k = 0; k < table[i].length; k++) {
    if (table[i][k] > sumMax) {
      sumMax = table[i][k]
    }
  }
}

console.log(sumMax)
// // 2. для каждого столбца
//
let sumMin = sumMax

for (let i = 0; i < table.length; i++) {
  for (let k = 0; k < table[i].length; k++) {
    if (table[i][k] < sumMin) {
      sumMin = table[i][k]
    }
  }
}

console.log(sumMin)
// // 3. для каждой строки
// //
//
//
// // для (2) найти строку с наибольшим количеством чисел больше 50-ти
// //
//
//
// // для (2) обойти матрицу в шахматном порядке и все чёрные клеточки заменить на 0, а для всех белых найти среднее арифметическое и максимально число
//
















// const arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//
//   for (let j = 0; j < arr[i].length; j++) {
//     sum += arr[i][j];
//   }
// }
// console.log(sum);
// //
// //
//
//
//
