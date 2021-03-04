/**
 * 
 * Каклькулятор, который находит площадь и периметр прямоугольника
 * 
 * @param{number} a - ширина прямоугольника
 */

 function areaAndPerimetr(a, b) {
     let area = areaFunc(a , b);
     let perimetr = perimetrFunc(a, b);
     return `Area: ${area} ; Perimetr ${perimetr}`;
 };

 function areaFunc(a, b) {
     return a * b;
 };

 function perimetrFunc(a, b) {
     return (a * 2) + (b * 2); 
 };

 console.log(areaAndPerimetr(10, 5));