function Change_colour1(){
    document.getElementById('abc').innerHTML="Test case"
}

function Change_colour2(){
    document.getElementById('xyz').innerHTML="Login"
}
function Change_colour3(){
    document.getElementById("123").innerHTML="Contact"
}
function Change_colour4(){
    document.getElementById('abc1').style.backgroundColor="green"
}
function Change_colour5(){
    let name =document.getElementById('abc2').value;
    // alert(name.toUppercase())
    document.getElementById('abc2').value = name.toUppercase();
}