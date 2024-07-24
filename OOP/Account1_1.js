class Account {
    acc_bal = 0;
    min_bal =500;
    deposite_amount(Amount){
        this.acc_bal = this.acc_bal+Amount
    }
    get_bal(){
        return this.acc_bal-this.min_bal
    }
   
}

let rg = new Account()
rg.deposite_amount(15000)
console.log(rg);
let sg = new Account()
sg.deposite_amount(50000)

console.log(sg);

let bal1 = rg.get_bal()
console.log(bal1);
let bal2 = sg.get_bal()
console.log(bal2);

