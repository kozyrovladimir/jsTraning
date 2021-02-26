const myObj = {
    name: 'Vladimir',
    age: 25,
    job: {
        first: 'builder',
        second: 'programmer',
    },
    isMarried: true,
};

const a = JSON.stringify(myObj);

const newObj = JSON.parse(a);

console.log(newObj);

/*
Выше приведен пример глубокого комирования обьекта (т.е. не по ссылке).
*/