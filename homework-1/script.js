// Task 1
// найти расстояние между двумя точками

const x1 = 30;
const y1 = 10;

const x2 = 25;
const y2 = 8;

const a1 = x1 - x2;
const b1 = y1 - y2;

const distance = Math.sqrt(a1**2 + b1**2).toFixed(3);

console.log(distance);

// Task 2
// пусть у нас есть три числа, надо убедиться что они удовлетворяют теореме Пифагора

const a2 = 4;
const b2 = 3;
const c2 = 5;

console.log(`${a2**2} + ${b2**2} = ${c2**2}`,`${a2**2 + b2**2 === c2**2}`);

// Task 3
// даны три числа, убедиться что они могут являться сторонами треугольника


const a3 =10 ;
const b3 =8;
const c3 =15;
const itog = a3 + b3 > c3;
console.log(itog);

//либо так

// console.log(`${a3 + b3 > c3}`);

// либо так

// console.log(a3 + b3 > c3 );











