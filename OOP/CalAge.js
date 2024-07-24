class user{
    current_year=2024;

    Cal_Age(Year){
        return this.current_year - Year
    }
}
let u1 = new user()
let u2  = new user()
let age1 = u1.Cal_Age(1983)
console.log(age1);




