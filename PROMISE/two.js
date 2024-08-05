let goTobankcock =(success,failure)=>{
    acc_bal = 50000;
    if(acc_bal>15000){
        success("go and enjoy")
    }else{
        failure("cancel your plan")
    }

}
goTobankcock((msg)=>{console.log(msg)},(error)=>{console.log(error);
})