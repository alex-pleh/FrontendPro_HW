/*
# 1) Создать массив содержащий все типы данных которые мы изучили
# - спрашиваем у пользователя 2 операнда (2 промта).
# - первым будет добавляемый тип, вторым экшен для преобразования соответствующего типа.
# - добавляем готовый результат в массив.
# - в конце всех операций выводим получившийся массив в консоль.
# - массив должен содержать все 8 типов данных JavaScript.
#
# 2) Написать скрипт который будет выполнять математические операции
# - спрашиваем у пользователя 3 операнда (3 промта).
# - написать функции для всех операций (сложение, вычитание, умножение, деление, деление по модулю).
#   Каждая функция считает результат и выводит в консоль "Результат [название операции]: 2+3 = 5",
#   где 2 и 3 то что ввел пользователь в первых двух промтах, а "+" это операция для которой написана функция,
#   это не обязательно должен быть символ операции (+, -, *, /, %) может быть и текст. 
# - использовать if else или switch case для вызова необходимой функции. 
*/
//1)
let arr =[];
let x;
arr.push(alert(x));
arr.push(null);
arr.push(prompt("String", 'Hello'));
arr.push(+prompt("Number", 100));
arr.push(confirm("True(OK) or false(Отмена)"));
arr.push(Symbol(prompt("Symbol", 'Id')));
arr.push(BigInt(prompt("BigInt", 100000000000000000000000n)));
arr.push({position: prompt("Position", "Manager") , salary: +prompt("Salary", 1000), remotely: Boolean(confirm("Remotely True(OK) or false(Отмена)"))});

console.log(arr);

// 2)
//
// let firstNum;
// let secondNum;
// do {
//     firstNum = +prompt("Please enter first number");
//     console.log(firstNum);
//     if(isNaN(firstNum)){
//         alert("You enter not a number, please try again");
//         console.log("You enter not a number, please try again");
//     }
// }
// while (isNaN(firstNum));
//
// const typeOperation = prompt("Please enter which operation do you want");
// console.log(typeOperation);
//
// do {
//     secondNum = +prompt("Please enter second number");
//     console.log(secondNum);
//     if(isNaN(secondNum)){
//         alert("You enter not a number, please try again");
//         console.log("You enter not a number, please try again");
//     }
// }
// while (isNaN(secondNum));
//
// function calc(firstNum, secondNum, typeOperation) {
//     switch (typeOperation) {
//         case '+':
//             return firstNum + secondNum;
//             break;
//         case '-':
//             return firstNum - secondNum;
//             break;
//         case '*':
//             return firstNum * secondNum;
//             break;
//         case '/':
//             return firstNum / secondNum;
//             break;
//         case '%':
//             return firstNum % secondNum;
//             break;
//         default:
//             return "You enter incorrect operation"
//     }
// }
//
// alert("Result: " + calc(firstNum, secondNum, typeOperation));
// console.log(("Result: "  + calc(firstNum, secondNum, typeOperation)));
