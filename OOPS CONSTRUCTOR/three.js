class Account{
    acc_Id;
    acc_Name;
    acc_bal;
    min_bal = 500;
    constructor(id,name,amount){
        this.acc_Id=id;
        this.acc_Name=name;
        this.acc_bal=amount;
    }
    deposite_amount(Amount){
        this.acc_bal=this.acc_bal+Amount
    }
    with_drawl(Amount){
        this.acc_bal=this.acc_bal -Amount
    }
get_bal(){
    return this.acc_bal- this.min_bal
}

}

let a1 = new Account(101,"rahul",5000)
let a2 = new Account(102,"sonia",15000)

a1.deposite_amount(150)
a1.with_drawl(50)
console.log(a1.get_bal());

a2.deposite_amount(4000)
a2.with_drawl(2000)
console.log(a2.get_bal());