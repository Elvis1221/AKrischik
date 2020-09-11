const person = (firstName, lastName, secondName, age) => ({
  firstName,
  lastName,
  secondName,
  age
});
const personArray = [
  person("Крищик", "Андрей", "Михайлович", 28),
  person("Степанов", "Антон", "Иванович", 23),
  person("Петров", "Петр", "Петрович", 42),
  person("Иванов", "Иван", "Иванович", 43),
  person("Орлов", "Игорь", "Валерьевич", 27),
  person("Крищик", "Виктория", "Михайловна", 20),
  person("Пушкин", "Александр", "Сергеевич", 36),
  person("Антонов", "Евгений", "Михайлович", 40),
  person("Лясецкий", "Евгений", "Францович", 30),
  person("Китурко", "Сергей", "Андреевич", 26)
];
console.table(personArray);



const sortAgeMax = (array) => {
  let age = 0;
  for (let i = 0; i < array.length; i++) {

    if (age < array[i].age) {
      age = array[i].age;
    }
  }
  return age;
};

const sortAgeMin = (array) => {
  let age = 43;
  for (let i = 0; i < array.length; i++) {
    if (age > array[i].age) {
      age = array[i].age;
    }
  }
  return age;
};
// //
console.log(`Самому страшему пользоватею: ${sortAgeMax(personArray)} года`);
console.log(`Самому младшему пользоватею: ${sortAgeMin(personArray)} лет`);
// //
// //
//









