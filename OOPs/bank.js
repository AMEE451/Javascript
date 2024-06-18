
class bankaccount {
    #username
    #accno
    #branch
    #amount
    constructor(username, accno, branch) {
        this.#username = username;
        this.#accno = accno;
        this.#branch = branch;
        this.#amount = 100000;
    }
    getusername() {
        return this.#username;
    }
    setusername() {
        this.#username = username;
    }
    getacc() {
        return this.#accno;
    }
    setacc() {
        this.#accno = accno;
    }
    getbranch() {
        return this.#branch;
    }
    setbranch() {
        this.#accno = branch;
    }
    deposit(amount) {
        if (amount > 0) {
            this.#amount += amount;
        }
        else {
            console.log("amount must be greater than zero");
        }
    }
    getamount() {
        return this.#amount;
    }
    #isWalletAvailable(reqamount) {
        if (reqamount > 0) {
            if (reqamount <= this.#amount) {
                return true;
            }
            else {
                console.log(" please deposit money before");
                return false;
            }
        }
        else {
            console.log("amount must be greater than zero");
            return false;
        }
    }
    withdraw(reqamount) {
        if (this.#isWalletAvailable(reqamount)) {
            this.#amount -= reqamount;
            console.log("Pelase collect your money");
        }
    }
}
let ac = new bankaccount("abcd", 654623, "surat")
ac.deposit(10000);
console.log(ac.getusername(), ac.getacc(), ac.getbranch());
console.log(ac.getamount());
ac.withdraw(5000)
console.log(ac.getamount());


class SalaryAccount extends bankaccount {
    constructor(username, accno, branch) {
        super(username, accno, branch)
        this.creditcard = 50000;
    }
    pay(amount) {
        if (amount <= this.creditcard && amount > 0) {
            this.creditcard -= amount;
            console.log("paid amount");
        }
    }
    billpayment() {
        let usedamount = 50000 - this.creditcard;
        if (amount <= usedamount && amount > 0) {
            this.creditcard += amount
        }
    }
    generatebill() {
        let usedamount = 50000 - this.creditcard;
        return usedamount;
    }
}

let sc = new SalaryAccount("asd", 12345, "surat")

console.log(sc);
sc.deposit(10000)
sc.pay(10000)
sc.billpayment(2000)
console.log(sc.pay());
console.log(sc.generatebill())
