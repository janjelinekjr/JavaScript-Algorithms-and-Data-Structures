// solution MUST have the following complexities: Time: O(N)

function sameFrequency(num1, num2){
    if(num1.length !== num2.length) return false

    let numFreq1 = {}
    let numFreq2 = {}

    for (const val of num1.toString()){
        numFreq1[val] = (numFreq1[val] || 0) + 1
    }

    for (const val of num2.toString()){
        numFreq2[val] = numFreq2[val] ? numFreq2[val] + 1 : 1
    }

    // console.log(numFreq1)
    // console.log(numFreq2)

    for (let key in numFreq1){
        if(numFreq1[key] !== numFreq2[key]) return false
    }

    return true
}


// inputs:
console.log(sameFrequency(182,281)) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

// -------------------------------------------------------------------------------------------------------
// SOLUTIONS:
// sameFrequency Solution

// function sameFrequency(num1, num2){
//     let strNum1 = num1.toString();
//     let strNum2 = num2.toString();
//     if(strNum1.length !== strNum2.length) return false;
//
//     let countNum1 = {};
//     let countNum2 = {};
//
//     for(let i = 0; i < strNum1.length; i++){
//         countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
//     }
//
//     for(let j = 0; j < strNum1.length; j++){
//         countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
//     }
//
//     for(let key in countNum1){
//         if(countNum1[key] !== countNum2[key]) return false;
//     }
//
//     return true;
// }