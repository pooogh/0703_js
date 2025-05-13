
// что такое программа?
console.log('hi');

// линейка - действия по порядку (синхронный код)
// условия - добавляем опции
// цикл - повторы

// найти сумму двух цифр
// let - изменяемые
let y = 123;
// integer - -32k to 32k
// const - статичные
const pi = 3.14; // 4kb 1110101
const x = 12; // 101010110
// Number, String, Boolean
// Array, Object
// a = a + b;
// a += b; синтаксический сахар
let name = 'Oleg';
let age = 23;
// 23 = 16 + 4 + 2 + 1 = 10111
const user = ['Oleg', 23];
console.log(name);
console.log(user[0]);
console.log(name === 'Oleg');
// == - проверка значения '5' == 5 - true
// === - проветка значения + типа '5' === 5 - false
console.log(user == ['Oleg', 23]);
console.log(user[0] === 'Oleg');

console.log('Oleg  ' === 'OleG');
// 111 = a
// 111 = &
console.log('O'.charCodeAt(), 'o'.charCodeAt());
console.log('Oleg  '.trim().toLowerCase() === 'OleG'.trim().toLowerCase());
// при работе с вводимыми данными необходимо проводить нормализацию

console.log('ифы');
// условия
const check1 = 305;
// +79001234567
// 89001234567
// +7-900-123-45-67
console.log(check1 % 2 === 0);
if (check1 % 2 === 0) {
    console.log('even');
}
console.log('after if')

if (check1 >= 10 && check1 <= 99) {
    console.log(true);
} else {
    console.log(false);
}

if (check1 % 3 === 0) {
    console.log('kratnoye');
} else if (check1 % 4 === 0) {
    console.log('kraten 4');
} else {
    
}