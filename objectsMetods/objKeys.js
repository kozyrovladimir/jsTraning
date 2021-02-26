const myObj = {
    name: 'Vladimir',
    age: 25,
    job: {
        first: 'builder',
        second: 'programmer',
    },
    isMarried: true,
};

const keysOfMyObj =Object.keys(myObj);

console.log(keysOfMyObj);

/*
Выше привден пример работы метода Object.keys(). Метод возврашает массив
содержащий ключи ольекта. Агрументом метода является обьект.
*/