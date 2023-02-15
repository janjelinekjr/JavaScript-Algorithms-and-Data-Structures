function factorial(num){
    if(num === 1 || num === 0) return 1

    return num * factorial(num - 1)
}

// inputs:
// factorial(1) // 1
// factorial(2) // 2
console.log(factorial(4)) // 24
// factorial(7) // 5040