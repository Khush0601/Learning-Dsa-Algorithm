// togetBinaryAnd1sCount

function getBinaryAndCount(N) {
    if (N === 0) return { binary: "0", count: 0 };

    let binary="";
    let count=0;
    while(N>0){
        let bit=N%2;
        if(bit===1) count++;
        binary=bit+binary;
        N=Math.floor(N/2)
    }
    return {binary,count}


}
console.log(getBinaryAndCount(13))