const arr = [1, 2, 'abs', false];
// console.log(arr[3]);

const obj = {
    'first': 1,
    'second': 2,
    'seperSasha': 'abs',
    'nikolay': false,
    'brevno': 'Ashim'
}

// объект - ассоциативный массив, состоит из свойств
// св-во состоит из ключа и значения
// console.log(obj['nikolay']);
// console.log(obj.seperSasha);
const seperSasha = 'brevno';
console.log(obj[seperSasha]);
console.log(obj.seperSasha);

// for in
for (const key in obj) {
    console.log(key, obj[key]);
}

// преобразование в массив
const ent = Object.entries(obj);
console.log(ent);

// деструктуризация
const [name, surname, ...tail] = ['Sasha', 'Seper', 17, 'ISIP']; // rest
const newArr = [...[1, 2, 3], ...['seper', 'Sasha']]; // spread
console.log(newArr);
console.log(tail);

for (const [key, value] of ent) {
    console.log(key, value);
}

const keys = Object.keys(obj);
console.log(keys);

const value = Object.values(obj);
console.log(value);

const user = {
    'name': 'oleg',
    'age': '22.09.2010',
    'adress': {
        'city': 'SPB',
        'street': 'Street',
        'house': 123
    }
}
// console.log(user);
// рекурсия
const consoleObject = (obj) => {
    const arr = Object.entries(obj);
    arr.forEach(([key, value]) => typeof value === 'object' 
        ? consoleObject(value) 
        : console.log(`${key} - ${value}`));

}
consoleObject(user);