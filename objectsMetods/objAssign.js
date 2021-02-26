const myObj = {
    name: 'Vladimir',
    age: 25,
    job: 'programmer',
    isMarried: true,
};

const newObj = myObj;

/*
Выше приведено копирование олбьекта по ссылке.
*/

const myObj1 = {
    name: 'Vladimir',
    age: 25,
    job: 'programmer',
    isMarried: true,
};

const newObj1 = Object.assign({}, myObj1);

console.log (newObj1);

/*
Выше приведен пример копирования не по ссылке.
Метод Object.assign проводит не глубокое копирование обьекта.
*/