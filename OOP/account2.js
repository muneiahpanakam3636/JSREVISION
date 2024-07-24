class Account {
    acc_bal = 0;
    min_bal =500;
    deposite_amount(Amount){
        this.acc_bal = this.acc_bal+Amount
    }

    with_drawl(cash){
        this.acc_bal=this.acc_bal-cash

    }
    get_bal(){
        return this.acc_bal-this.min_bal
    }

}
let a1 = new Account()
a1.deposite_amount(5000)
a1.with_drawl(15)
console.log(a1);
console.log(a1.get_bal());

let a2 = new Account()
console.log(a2.get_bal());

let a3 = new Account()
a3.deposite_amount(15000)
// a2.with_drawl()
console.log(a3.get_bal());

console.log("******print object******");
console.log(a1);
console.log(a2);
console.log(a3);