/**
 * 
 * Функция возвращает площадь круга и длинну окружности.
 * 
 * @param {number} radius - радиус окружности (круга).
 * @returns {string} - строка вида: `Area: ${площадь круга}; Lenght ${длинна окружности}`.
 */

function cricleFunc(radius) {
    return `Area: ${(areaCricleFunc(radius).toFixed(2))}; Lenght: ${(lenghtCricleFunc(radius)).toFixed(2)}`;
};

/**
 * 
 * Функция находит площадь круга.
 * 
 * @param {number} radius - радиус круга.
 * @returns {number} - площадь круга.
 */

function areaCricleFunc(radius) {
    return (radius ** 2) * Math.PI;
};

/**
 * 
 * Функция находит длинну окружности.
 * 
 * @param {number} radius - радиус круга.
 * @returns {number} - длинна окружности.
 */

function lenghtCricleFunc(radius) {
   return 2 * radius * Math.PI;
};

console.log(cricleFunc(10));