class User {
  set name(name) {
    this._name = name.trim().toLowerCase();
  }

  get name() {
      return this._name;
  }
}

const student = new User();
student.name = '  VlAdImIr';

console.log(student);