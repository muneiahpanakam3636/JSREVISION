class Parent{
    constructor()
{
    console.log('p_constructor');
}
m1(){
    console.log('p_m1_method');
}
}
class Child extends Parent{
    
    constructor(){
        super();// involking parent class member

        console.log('child_constructor');
    }
    m2(){
        console.log('child_m2_method');
    }

}
let c1 = new Child();
c1.m1()
c1.m2()