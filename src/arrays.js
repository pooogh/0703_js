// обработка строк через внутренние методы или массив
// через регулярные выржание

// механика работы со строками
// 1. нормализация
// 2. преобразование в массив
// 3. агрегация, мутация массива

// примитивные типы - числа, строки, булевые значения
// структуры данных - пачка примитивов - массивы, кортежи, 
// const array = ['superSasha', '1234sash@'] - массив
// array[0]
// const tuple = ('superSasha', '1234sash@') - кортеж
// tuple[0]
// const object = {
//   'userName': 'superSasha',
//   'password': '1234sash@'
// } - объект
// object['userName']

// 2. преобразование в массив
const str = 'seperSasha';
const array = str.split('');
console.log(array)
const array2 = Array.from(str);
console.log(array2);

// 3. обработка массива - циклы (заменяем ф-ции высшего порядка)
// ф-ции высшего порядка - не знаем внутренности, но знаем вход и выход
// .forEach, .map, .filter, .reduce

// .forEach - перебор массива
const array3 = [];
array3.push(1);
console.log(array3)
// данные в памяти хранятся явно или ссылочно
// ВСЕ СТРУКТУРЫ ХРАНЯТСЯ ССЫЛКАМИ!
console.log(1 === 2, 'a' === 'b', true !== false);
console.log(array3[0] == [1][0]);
// const array4 = new Array();
