class Account {

    constructor(name, bank, number, balance) {
        this.name = name;
        this.bank = bank;
        this.number = number;
        this.balance = balance;
    }

    get name() {
        return this.name;
    }

    set name(value) {
        this.name = value;
    }

    get bank() {
        return this.bank;
    }

    set bank(value) {
        this.bank = value;
    }

    get number() {
        return this.number;
    }

    set number(value) {
        this.number = value;
    }

    get balance() {
        return this.balance;
    }

    set balance(value) {
        this.balance = value;
    }
}

class CurrentAccount extends Account {

    constructor(name, bank, number, balance, specialBalance) {
        super(name, bank, number, balance);

        this.specialBalance = specialBalance;
    }

    get specialBalance() {
        return this.specialBalance;
    }

    set specialBalance(value) {
        this.specialBalance = value;
    }
}

class SavingsAccount extends Account {

    constructor(name, bank, number, balance, interest, dueDate) {
        super(name, bank, number, balance);

        this.interest = interest;
        this.dueDate = dueDate;
    }

    get interest() {
        return this.interest;
    }

    set interest(value) {
        this.interest = value;
    }

    get dueDate() {
        return this.dueDate;
    }

    set dueDate(value) {
        this.dueDate = value;
    }
}

function createAccounts() {

    let name = document.getElementById("name").value;
    let bank = document.getElementById("bank").value;
    let number = document.getElementById("number").value;
    let balance = document.getElementById("balance").value;
    let specialBalance = document.getElementById("specialBalance").value;
    let interest = document.getElementById("interest").value;
    let dueDate = document.getElementById("dueDate").value;

    if (!name || !bank || !number || !balance || !specialBalance || !interest || !dueDate) {
        invalidInput();
        return;
    } else if (isNaN(balance) || isNaN(specialBalance) || isNaN(interest)) {
        invalidInput();
        return;
    }

    let current = new CurrentAccount(
        name,
        bank,
        number,
        balance,
        specialBalance
    );

    let savings = new SavingsAccount(
        name,
        bank,
        number,
        balance,
        interest,
        dueDate
    );

    document.getElementById("currentResult").innerHTML =
        "Nome: " + current.name + "<br>" +
        "Banco: " + current.bank + "<br>" +
        "Número: " + current.number + "<br>" +
        "Saldo: " + parseFloat(current.balance).toFixed(2) + "<br>" +
        "Saldo Especial: " + parseFloat(current.specialBalance).toFixed(2);

    document.getElementById("savingsResult").innerHTML =
        "Nome: " + savings.name + "<br>" +
        "Banco: " + savings.bank + "<br>" +
        "Número: " + savings.number + "<br>" +
        "Saldo: " + parseFloat(savings.balance).toFixed(2) + "<br>" +
        "Juros: " + parseFloat(savings.interest).toFixed(2) + "<br>" +
        "Data de Vencimento: " + savings.dueDate;
}

function invalidInput() {
    document.getElementById("currentResult").innerHTML = "Entrada inválida";
    document.getElementById("savingsResult").innerHTML = "Entrada inválida";
}