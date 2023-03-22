class commonValue {
    constructor (name, age) {
        this._name = name;
        this._age = age;
        this._incomeTax = 1000;
    }
    get name() {
        return {name : this._name};
    }
    get age() {
        return {age : this._age};
    }
    takeincome(salary) {
        return {salary : salary-this._incomeTax};
    }
}

    class person extends commonValue {
        constructor (name, age, salary) {
        super(name, age);
        this._salary = salary;
        }
        get salary() {
            return this._salary;
        }
    }
    const personTitle = new person('Title', 24)


console.log(personTitle.name)
console.log(personTitle.age)
console.log(personTitle.takeincome(15000))

    const personKirito = new person('Kirito', 124)

console.log(personKirito.name)
console.log(personKirito.age)
console.log(personKirito.takeincome(20000))





