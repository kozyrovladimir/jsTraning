//Классы в JS

//Наследование в JS

//Конструирование обьектов

class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    };
    validatePassword() {
        if (this.password.lenght > 6) {
            return true;
        } else {
            return false;
        }
    };
};

class Student extends User {
    constructor(username, password, nickname){
        super (username, password);
        this.nickname = nickname;
    };
};

let a = 'Vladimir';
let b = '465225';

const person = new User(a, b);

const personStudent = new Student('Natalia', '463216', 'NatalKa');

console.log(person);

console.log(personStudent);