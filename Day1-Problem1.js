
//Given an array, move all zeros to its end while maintaining the order of non-zero elements.

// Example: arr = [4,5,0,1,9,0,5,0] → output: 4 5 1 9 5 0 0 

//1st method
function moveAllzeros(arr){
    let result=[]
 //step1:filter nonzero
 let nonZero=arr.filter((el)=>el !==0)
 let zero=arr.filter((el)=>el===0)
 result=[...nonZero,...zero]
 return result
}
console.log(moveAllzeros([4,5,0,1,9,0,5,0]))


//2nd method:

function moveAllz(arr){
    let result=[]
    let j=0
for(let i=0;i<arr.length;i++){
    if(arr[i]!==0){
    result[j]=arr[i];
    j++
    }
}
for(let i=0;i<arr.length;i++){
     if(arr[i]===0){
    result[j]=arr[i];
    j++
    }
}
return result
}
console.log(moveAllz([4,5,0,1,9,0,5,0]))

//3rd:Two-Pointer Approach
function moveAllNonZeros(arr) {
 let j=0  //pointer to place non-zero
 for(let i=0;i<arr.length;i++){
    if(arr[i]!==0){
        arr[j]=arr[i]
        j++
    }
 }

 while(j<arr.length){
    arr[j]=0;
    j++
 }
 return arr
}
console.log(moveAllNonZeros([4,5,0,1,9,0,5,0]))