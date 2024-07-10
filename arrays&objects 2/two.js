let users = [
    {id:101,name:"rahul",gender:"male"},
    {id:102,name:"priyanka",gender:"female"},
    {id:103,name:"sonia",gender:"female"},
    {id:104,name:"modi",gender:"male"}
]
for( user of  users){
    if(user.gender==='male'){
        console.log(user);
    }
}