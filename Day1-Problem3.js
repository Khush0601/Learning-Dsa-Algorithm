// Convert a Positive Integer N to Octal

 
//1st method:built-in javascript method
function toBinary(n){
    return n.toString(8)
}
console.log(toBinary(124))

//2nd method:

function toBinaryy(n){
    let result=""
   while(n>0){
    result=n%8+result
    n=Math.floor(n/8)
   }
   return result || 0
}
console.log(toBinaryy(124))
