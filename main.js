function sumDigPow(a, b) {
    let array = [a]
    while(a < b){
        a+=1
        array.push(a)
    }
    let result = [];
    for(let i = 0; i < array.length; i++){
        let sum = 0;
        let arrString = array[i].toString();
        for(let j = 0; j < arrString.length; j++){
            sum = sum + Math.pow(parseInt(arrString[j]),j+1)
        }
        if(array[i] === sum){
            result.push(sum);
        }
    }
    return result;
}
console.log(sumDigPow(50, 159));