//Убираем у строки лишние пробелы.

function strTrim(str) {
    return str.replace(/\s+/g, ' ').trim();
}

//Преобразует строку в массив строк.

function strToArr(str) {
    return str.split(' ');
};

//Проверяет, состоит ли массив из трех элементов.

function arrStrLength3(arrStr) {
    return arrStr.length === 3 ? true : false; 
};

//Проверяет, является ли второй элемент массива строк математическим оператором.

function isMathOper(strArr) {
    return ['-', '+', '*', '/'].includes(strArr[1]);
};

//Проверяет, является 1 и 3 элемент массива из 3 элементов целым числом больше 0, но меньше 10.
function isNum(arr){
    return Number.isInteger(+arr[0]) && Number.isInteger(+arr[2]) && 0 < +arr[0] && +arr[0] < 10 && 0 < +arr[2]&& +arr[2] < 10 ;
};

//Проверяет, является 1 и 3 элемент массива из 3 элементов целым римским числом больше 0, но меньше 10.
function isRoomNum(arr){
    const roomeNumbers = ['I','II','III','IV','V','VI','VII','VIII','IX'];
    return roomeNumbers.includes(arr[0]) && roomeNumbers.includes(arr[2]);
};

//Возвращает массив чисел-аргументов, преобразовав их из массива строк арабских чисел.

function strArrToNums(arr) {
    let num1, num2;
    num1 = parseInt(arr[0]);
    num2 = parseInt(arr[2]);
    return [num1, num2];
};

//Возвращает массив чисел-аргументов, преобразовав их из массива строк римских чисел.

// function strArrToNums1(arr) {
//     let num1, num2;
//     const roomeNumbers = ['I','II','III','IV','V','VI','VII','VIII','IX'];
//     num1 = roomeNumbers.indexOf(arr[0]) + 1;
//     num2 = roomeNumbers.indexOf(arr[2]) + 1;
//     return [num1, num2];
// };

function strArrToNums1(arr) {
    const roomeNumbers = ['I','II','III','IV','V','VI','VII','VIII','IX'];
    arr[0] = roomeNumbers.indexOf(arr[0]) + 1;
    arr[2] = roomeNumbers.indexOf(arr[2]) + 1;
    return arr;
};

//Производит математические операции.

function calc(strArr){
    let a;
    switch(strArr[1]) {
        case '-': a = strArr[0] - strArr[2];
        break; 
        case '*': a = strArr[0] * strArr[2];
        break; 
        case '/': a = strArr[0] / strArr[2];
        break;
        case '+': a = strArr[0] + strArr[2];
        break;  
    }
    return a;
};

//Производит переработку и валидацию строки;

function validate(str) {
    let newStr = strTrim(str);
    arr = strToArr(newStr);
    return [arrStrLength3(arr) && isMathOper(arr), isNum(arr), isRoomNum(arr), arr];
}

//Финальная функция

function calculate(str) {
    let ansver = validate(str);
    if (ansver[0] && ansver[1]) {
        alert(calc(ansver[3]));
    } else if (ansver[0] && ansver[2]) {
        alert(calc(strArrToNums1(ansver[3])));
    } else {
        alert('Не корректные данные');
    }
}

//Проверки.

calculate(prompt('Введите математическое выражение', ''));