let goTogoa =(success,failure)=>{
    let acc_bal=50000;
    if(acc_bal>1500) {
        success("go and  enjoy")
    }else{
        failure("go to PG!-open your and practice")
    }

}
goTogoa((msg)=>{console.log(msg)},(error)=>{console.log(error);
})