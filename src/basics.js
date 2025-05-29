
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
// классическое условие
if (check1 % 2 === 0) {
    console.log('even');
}
// тернарный оператор
console.log(`ternary: ${check1 % 2 === 0 ? 'even' : 'odd'}`);
console.log('after if')

// классическое условие
if (check1 >= 10 && check1 <= 99) {
    console.log(true);
} else {
    console.log(false);
}
// тернарный оператор
const checkDouble = check1 >= 10 && check1 <= 99 ? true : false;
// интерполяция - выражение на основе строки и переменных
// console.log('ternary:', checkDouble)
console.log(`ternarny: ${checkDouble}`)

// классическое условие
if (check1 % 3 === 0) {
    console.log('kratnoye');
} else if (check1 % 4 === 0) {
    console.log('kraten 4');
} else {
    console.log('not of all');
}

// тернарник вложенный (можно, но не нужно)
const ternaryStack = check1 % 3 === 0 ? 'kratnoye'
    : check1 % 4 === 0 ? 'kraten 4' 
    : 'not of all';

const value = 'Answer';
switch (value) {
    case 'answer':
        console.log('correct');
        break;
    case 'Answer':
        console.log('Correct');
        break;
    case 'aNSwer':
        console.log('not correct');
        break;
    default:
        break;
}

// циклы
// ориентируется на кол-во повторов - for
// ориентируется на маркер, кол-во повторов неизвестно - while

// 5! = 1 * 2 * 3 * 4 * 5
// повторы: умножение, увеличение на 1

let fact = 1;
// for (нач; конец; шаг)
// итерация - повтор тела цикла
for (let i = 2; i <= 5; i += 1) {
    // i здесь видна и существует только в цикле
    fact *= i; // тело цикла
    console.log(i, fact); // тело цикла
}

let i = 2; // другая i, не связана с локальной i для цикла
let factWhile = 1;
while (i <= 5) {
    factWhile *= i;
    i += 1;
    console.log(i, factWhile);
}

// функции
// объявили функцию
function sum(a, b) {
    console.log(a + b);
};

function power(a = 1, b = 2) {
    console.log(a ** b);
};

// вызов функции
sum(2, 3);
power();

// анонимные
console.log((a = 5, b = 2) => a * b);
(a, b) => {
    return a * b;
}

const sumAnon = (a = 5, b = 2) => a * b;
console.log(sumAnon())