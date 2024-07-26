let numbers = [1,2,3,4,5,6,7,8,9,10]
// create new array with even num

// without filter

let EVEN_no = []
for( num of numbers){
    if(num%2===0){
        EVEN_no.push(num);
    }
}

console.log(EVEN_no);

