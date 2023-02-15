function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(arr){
    let resultArr = []
  for(let i = 0; i < arr.length; i++){
     resultArr.push(digitCount(arr[i]))
  }
  return Math.max(...resultArr)
}

console.log(mostDigits([23,567,89,12234324,90]))