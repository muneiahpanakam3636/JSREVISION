

class Account {
    acc_bal = 0;
    min_bal =500;
    
    deposite_amount(amount){
        this.acc_bal =  this.acc_bal + amount;
    }
}
let a1 =new Account()

a1.deposite_amount(15000)
a1.deposite_amount(15)
console.log(a1);
let a2 =new Account()
a2.deposite_amount(50)
console.log(a2)