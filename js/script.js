/*class Bank {
    static type = "privat";

    constructor(options) {
        this.summ = options.summ;
        this.month = options.month;
        this.p = options.p;
    }

    credit() {
        return console.log("i am privat");
    }
}

const userBank = new Bank({
    summ: 12000,
    month: 5,
    p: 1220,
});

userBank.credit();
console.log(user)


class NewBank extends Bank {
    constructor(options){
        super(options);
        this.card = options.card;
    }

    credit () {
        super.credit();
        return console.log("i am aval");
    }
}

const aval = new NewBank({
    summ: 12000,
    month: 5,
    p: 1220,
    card: true,
})

console.log(aval.credit());
*/


/*
class User {
    constructor(props) {
        this.name = props.name;
    }

    firstName = "";
    lastName = "";
    age = "";
    city = "";

    set name(newName) {
        const nameRow = newName.split(" ");
        this.firstName = nameRow[0];
        this.lastName = nameRow[1];
    }

    get name() {
        return ` First name:  ${this.firstName} Last name: ${this.lastName}`;
    }
}

const kris = new User ({
    name: "Khrystyna Mukha",
})

const mary = new User ({
    name: "Mariia Kit",
})

console.log(kris);
console.log(mary);
*/

/*
const Manager = function (name, sales) {
    this.name = name;
    this.sales = sales;    
}

const ann = new Manager("Anna", 5);
const mary = new Manager("Mariia", 7);

Manager.prototype.sale = function() {
    this.sales += 1;
}

console.dir(Manager);
*/
/*
class CoffeMachine {
    _water = 0;
    #waterLimit = 500;
    constructor(power) {
        this.power = power;
    }

    set waterAmount (value) {
        if (value < 0) {
            value = 0;
        }
        this._water = value;
    }
}

let coffeMachine = new CoffeMachine (100);


coffeMachine.waterAmount = -20;
console.log(coffeMachine);
console.log()*/

class Abonent {
    constructor(name, number) {
        this.name = name;
        this.number = number;
    }

    set (name, number) {
        this.name = name;
        this.number = number;
    }

    get() {
        return `name: ${this.name} number: ${this.number}`;
    }
}

const user1 = new Abonent("kris", "262674");
const user2 = new Abonent("ira", "78664");
const user3 = new Abonent("mary", "79645");

console.log(user1.get());