//  -- 1 --
// У вас є масив об’єктів fruts, і в кожному з них є name
// Напишіть код, який перетворює їх в масив імен.
/*
const fruts = [
   { id: 0, name: "Apple" },
   { id: 1, name: "Tomat" },
   { id: 2, name: "Cherry" },
   { id: 3, name: "Orange" },
];

let result = fruts.map(fruts => fruts.name);
console.log(result);*/

//  -- 2 --
//Виведіть парні числа від 2 до 10, використовуючи цикл for.
/*
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let num of arr) {
    if (num % 2 == 0) {
        console.log(num);
    }
}*/

//  -- 3 --
//Замініть цикл "for" на "while"
// for (let i = 0; i < 5; i++) {
//     console.lpg( `цифра ${i}!` );
//   }
/*
let i = 0;
while (i < 5) {
    i++;
    console.log(`number ${i}!`);
}
*/

//  -- 4 --
//Напишіть цикл, який пропонує prompt ввести число більше за 100.
//Якщо відвідувач введе менше число – попросити ввести ще раз, і так далі.
//Цикл повинен запитувати число доти, доки відвідувач не введе число,
// більше за 100, або не скасує ввід/введе порожній рядок.
/*
let num;

do {
    num = prompt("enter number greater than 100");
} while(num <= 100 && num !== null)
*/

//  -- 5 --
// Вирахуйте середній вік

 const girls = [
   { age: 23, name: "Оля" },
   { age: 29, name: "Аня" },
   { age: 10, name: "Юля" },
   { age: 20, name: "Катя" },
 ];

 let sum = girls.reduce((summ, item) => summ + item.age, 0) / girls.length;
 console.log(sum);  