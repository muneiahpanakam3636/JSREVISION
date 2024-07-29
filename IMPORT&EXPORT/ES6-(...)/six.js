let emp = {
    id :101,
    name:"rahul",
    email:'rahul@gmail.com'
}

let details ={
    email:'rahul@ibm.com',
    sal:45000
}

let emp_details = {...emp,...details}
console.log(emp_details);