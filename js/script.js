// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах  1, 0, -3.
/*
let value = -3;

if (value > 0) {
    console.log("true");
} else if (value < 0) {
    console.log("false");
} else {
    console.log("0");
}*/

// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах  'test', "qwerty", true
/*
let value = "aedea";
value == "test" ? console.log("true") : console.log("false");
*/

// Якщо змінна більше 10 -  відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах  1, 10, 13.
/*
let value = 15;

if (value > 10) {
    value = value - 5;
} else if (value < 5) {
    value = value + 5;
}

console.log(value);
*/

//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу

let num = Number(prompt("enter number"));
let month;

switch(num) {
    case 1:
        month = "january";
        console.log(month);
        break;

    case 2:
        month = "february";
        console.log(month);
        break;

    case 3:
        month = "march";
        console.log(month);
        break;

    case 4:
        month = "april";
        console.log(month);
        break;
    
    case 5:
        month = "may";
        console.log(month);
        break;

    case 6:
        month = "june";
        console.log(month);
        break;

    case 7:
        month = "july";
        console.log(month);
        break;

    case 8:
        month = "august";
        console.log(month);
        break;

    case 9:
        month = "september";
        console.log(month);
        break;

    case 10:
        month = "october";
        console.log(month);
        break;

    case 11:
        month = "november";
        console.log(month);
        break;

    case 12:
        month = "december";
        console.log(month);
        break;

    default:
        console.log("invalid number");
}

//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел