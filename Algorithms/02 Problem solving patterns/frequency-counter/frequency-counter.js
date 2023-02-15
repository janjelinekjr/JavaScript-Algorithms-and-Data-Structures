// function validAnagram(str1, str2) {
//     // add whatever parameters you deem necessary - good luck!
//     if (str1.length !== str2.length) return false
//
//     let stringSameLetters1 = {}
//     let stringSameLetters2 = {}
//
//     for (const val of str1) {
//         stringSameLetters1[val] = (stringSameLetters1[val] || 0) + 1
//     }
//
//     for (const val of str2) {
//         stringSameLetters2[val] = (stringSameLetters2[val] || 0) + 1
//     }
//
//     const arrOfTruth = []
//
//     for (const key in stringSameLetters1) {
//         arrOfTruth.push(stringSameLetters1[key] === stringSameLetters2[key])
//     }
//     return !arrOfTruth.includes(false);
//
// }
//
// console.log(validAnagram('undefined', 'edfinuned'))

function validAnagram(str1, str2) {
    // add whatever parameters you deem necessary - good luck!
    if (str1.length !== str2.length) return false

    const obj = {}

    for (let i = 0; i < str1.length; i++){
        let letter = str1[i]
        obj[letter] ? obj[letter] += 1 : obj[letter] = 1
    }

    for (let i = 0; i < str2.length; i++) {
        let letter = str2[i]
        if(!obj[letter]){
            return false
        } else {
            obj[letter] -= 1
        }
    }

    return true

}

console.log(validAnagram('undefined', 'edfinuned'))