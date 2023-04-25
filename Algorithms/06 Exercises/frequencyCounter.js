function same(arr1, arr2) {
    if (arr1.length !== arr2.length) return false

    let fCounter1 = {}
    let fCounter2 = {}

    for (let val of arr1) {
        fCounter1[val] = (fCounter1[val] || 0) + 1
    }
    for (let val of arr2) {
        fCounter2[val] = (fCounter2[val] || 0) + 1
    }

    // console.log(fCounter1, fCounter2)
    for (let key in fCounter1) {
        if (!(key ** 2 in fCounter2)) return false
        if (fCounter1[key] !== fCounter2[key ** 2]) return false
    }
    return true
}

// console.log(same([1,2,3,2], [4,9,1,4]))

function constructNote(message, letters) {
    if (letters.length < message.length) return false

    let msgCounter = {}
    let lettersCounter = {}

    for (let val of message) {
        msgCounter[val] = (msgCounter[val] || 0) + 1
    }
    for (let val of letters) {
        lettersCounter[val] = (lettersCounter[val] || 0) + 1
    }

    for (let key in msgCounter) {
        if (!(key in lettersCounter)) return false
        if (msgCounter[key] !== lettersCounter[key]) return false
    }

    return true
}

// console.log(constructNote('aabc', 'adcba'))
// console.log(constructNote('aabc', 'adcba'))
// console.log(constructNote('aabbcc', 'bcabcaddff'))

function findAllDuplicates(arr) {
    if (arr.length <= 1) return []

    const result = []
    let duplicityCounter = {}

    for (let val of arr) {
        duplicityCounter[val] = (duplicityCounter[val] || 0) + 1
    }

    for (const key in duplicityCounter) {
        if (duplicityCounter[key] > 1) {
            result.push(+key)
        }
    }

    return result
}

// console.log(findAllDuplicates([4, 3, 2, 7, 8, 2, 3, 1]))
// console.log(findAllDuplicates([4, 3, 2, 1, 0]))
// console.log(findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3]))

function findPair(arr, difNum) {
    if (arr.length === 0) return false

    // O(n2)
    // for(let i = 0; i < arr.length; i++) {
    //     for( let j = i + 1; j < arr.length; j++) {
    //         if((arr[i] - arr[j]) === difNum) return true
    //     }
    // }

    // o(n)
    if (arr.length === 0) return false;

    const seen = new Set();

    for (let i = 0; i < arr.length; i++) {
        const target1 = arr[i] - difNum;
        const target2 = arr[i] + difNum;

        if (seen.has(target1) || seen.has(target2)) {
            return true;
        }
        seen.add(arr[i]);
    }

    return false
}

// console.log(findPair([6, 1, 4, 10, 2, 4], 2))
// console.log(findPair([8, 6, 2, 4, 1, 0, 2, 5, 13], 1))
// console.log(findPair([6, 1, 4, 10, 2, 4], 22))