let employee = [
    {eid:101,ename:'rahul',esal:45000},
    {eid:102,ename:'priyanka',esal:55000},
    {eid:103,ename:'sonia',esal:65000},
    {eid:104,ename:'rajiv',esal:75000}
]

function  display_empdata(){
     let rows = " "
   for (emp of employee){
     rows = rows +`<tr>
        <td>${emp.eid}</td>
        <td>${emp.ename}</td>
        <td>${emp.esal}</td>
      
     
     </tr>`
    
   }


    // document.getElementById('table_data').innerHTML=rows
    document.getElementsByTagName('tbody')[0].innerHTML=rows
}