// Convert a Positive Integer N to Hexadecimal:

//1st:
function toBinaryy(n){
   if(n===0){
    return "0"
   }
  let hexDigits="0123456789ABCDEF";
  let result=""
   while(n>0){
    let remainder=n%16;
    result=hexDigits[remainder]+result;
    n=Math.floor(n/16)
   }
   return result
}
console.log(toBinaryy(480))

//2nd method:
function toHex(n){
    return n.toString(16)
}
console.log(toHex(480).toUpperCase())