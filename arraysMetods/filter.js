const myArr = [5, 6, 58, 41, 12, 94]; // Массив чисел

let newArr = myArr.filter((item) => (item % 2) == 0); 

/* 
Выше приведен пример работы метода массива filter. Этот метод принимает
в себя callback функцию с агрументом item, в котором хранитья значение элемента массива.
Метод возвращает item, если callbak переданный в качесве агрумента вернет true.
*/

console.log(newArr); // Выводим наш Arr в консоль