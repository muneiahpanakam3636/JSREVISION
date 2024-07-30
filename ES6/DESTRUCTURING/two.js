let state ={
    prod_Id : 'p101',
    p_name:'Iphone 5S',
    user:{
       uid:101,
       uName:'rahul'
    },
    emp:{
       

    },
    
    loc:['WND','BNG']
}
let {p_name}= state;
console.log(p_name);
let {user} = state;
console.log(user);
let{uName}=user;
console.log(uName);
