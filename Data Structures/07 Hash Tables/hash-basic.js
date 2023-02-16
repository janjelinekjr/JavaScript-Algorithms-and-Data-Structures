function hashBasic(key, arrLength) {
    let total = 0
    for (let char of key) {
        let value = char.charCodeAt(0) - 96
        total = (total + value) % arrLength
    }
    return total
}

console.log(hashBasic('black', 13))

function hashBasicImprove(key, arrLength) {
    let total = 0
    let WIERD_PRIME = 31
    for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i]
        let value = char.charCodeAt(0) - 96
        total = (total * WIERD_PRIME + value) % arrLength
    }
    return total
}

console.log(hashBasicImprove('black', 13))
// collision
console.log(hashBasicImprove('cyan', 13))
console.log(hashBasicImprove('pink', 13))
