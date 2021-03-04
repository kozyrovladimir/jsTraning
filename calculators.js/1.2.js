/**
 * 
 * Функция находит площадь круга и длинну окружности
 * 
 * @param {number} radius - радиус окружности (круга)
 * @returns {string} - возвращается ответ в виде строки вида: `Area: ${площадь прямоугольника} ; Perimetr ${периметр прямоугольника}`
 */

function cricleFunc(radius) {
    return `Area: ${(areaCricleFunc(radius).toFixed(2))}; Lenght: ${(lenghtCricleFunc(radius)).toFixed(2)}`;
}

function areaCricleFunc(radius) {
    return (radius ** 2) * Math.PI;
};

function lenghtCricleFunc(radius) {
   return 2 * radius * Math.PI;
};

console.log(cricleFunc(10));