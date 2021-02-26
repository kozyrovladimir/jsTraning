const myObj = {
    name: 'Vladimir',
    age: 25,
    job: {
        first: 'builder',
        second: 'programmer',
    },
    isMarried: true,
};

const keysOfMyObj =Object.values(myObj);

console.log(keysOfMyObj);

/*
Выше привден пример работы метода Object.values(). Метод возврашает массив
содержащий значения объекта. Агрументом метода является обьект.
*/