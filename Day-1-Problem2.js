// Convert a Positive Integer N to Binary
// Input:  N = 10
// Output: "1010"

// Input: N = 7
// Output: "111"
 
//1st method:built-in javascript method
function toBinary(n){
    return n.toString(2)
}
console.log(toBinary(7))

//2nd method:

function toBinaryy(n){
    let result=""
   while(n>0){
    result=n%2+result
    n=Math.floor(n/2)
   }
   return result || 0
}
console.log(toBinaryy(7))
