// найти расстояние между двумя точками c помощью функции
const distance = (object) =>
  Math.sqrt((object.x1 - object.x2) ** 2 + (object.y1 - object.y2) ** 2);
const coordinates = { x1: 31, x2: 20, y1: 13, y2: 38 };
console.log(
  `Расстояние между точками x1,y1 и x2,y2 равное: ${distance(coordinates)}`
);
//
// // // пусть у нас есть три числа, надо убедиться что они удовлетворяют теореме Пифагора
//
const pifagor = ({ a, b, c }) =>
  a ** 2 + b ** 2 > c ** 2 &&
  b ** 2 + c ** 2 > a ** 2 &&
  a ** 2 + c ** 2 > b ** 2;

const number = { a: 10, b: 9, c: 8 };
console.log(
  `Удовлетваряют ли числа a=10,b=9,c=8 теореме пифагора? ${pifagor(number)}`
);
//
// // даны три числа, убедиться что они могут являться сторонами треугольника
//
const sideTriangle = ({ a, b, c }) => a + b > c && b + c > a && c + a > b;

console.log(sideTriangle({ a: 10, b: 13, c: 15 }));

function filledArray(arrayLengths) {
  const array = [];
  for (let i = 1; i <= arrayLengths; i++) {
    array.push(i);
  }

  return array;
}

const arrayNumbers = filledArray(50);

function filteredArray(array) {
  const filteredArray = [];

  for (let i = 0; i <= array.length; i++) {
    if (array[i] % 3 === 0 || array[i] % 5 === 0 || array[i] % 15 === 0) {
      filteredArray.push(array[i]);
    }
    if (filteredArray.length === 20) {
      return filteredArray;
    }
  }
  return filteredArray;
}

const filtered = filteredArray(arrayNumbers);
console.log(filtered);
//
// // для (1) посчитать произведение всех элементов находящихся в каждой третьей позиции
function calcComposition({ filtered, step }) {
  let getNumber = 1;
  for (let i = 0; i < filtered.length; i += step) {
    getNumber *= filtered[i];
  }
  return getNumber;
}

console.log(
  calcComposition({
    filtered,
    step: 3,
  })
);
//