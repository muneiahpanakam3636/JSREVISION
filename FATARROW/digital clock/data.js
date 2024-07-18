// let pTag_Ref = document.getElementsByTagName('p')[0]
// console.log(pTag_Ref);
// pTag_Ref.innerHTML = new Date().toLocaleTimeString()

setInterval(()=>{
 document.getElementById('abc').innerHTML = new Date().toLocaleTimeString()


},1000)