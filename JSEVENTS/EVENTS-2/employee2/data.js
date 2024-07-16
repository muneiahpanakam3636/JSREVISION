let employees = [
    {eid:101,ename:'rahul',esal:45000},
    {eid:102,ename:'priyanka',esal:55000},
    {eid:103,ename:'sonia',esal:65000},
    {eid:104,ename:'rajiv',esal:75000},
    {eid:105,ename:'rajini',esal:85000},
    {eid:106,ename:'raji',esal:95000},
    {eid:107,ename:'raghu',esal:35000}
]

function Displaydata(){
    let rows =" "
    for(  emp of employees){
        rows = rows+`<tr>
        <td>${emp.eidid}</td>
          <td>${emp.ename}</td>
            <td>${emp.esal}</td>
        <tr/>`
    }
    // document.getElementsByTagName('tbody')[0].innerHTML=rows
    document.getElementById('abc').innerHTML=rows
}