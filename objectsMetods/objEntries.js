const myObj = {
    name: 'Vladimir',
    age: 25,
    job: {
        first: 'builder',
        second: 'programmer',
    },
    isMarried: true,
};

const newA = Object.entries(myObj);

console.log(newA);

/*
Метод Object.entries принимает в себя обьект. Возвращает массив массивов [[ключ, значение],[ключ, значение]].
*/