function power(base, exponent){
    if(exponent === 1) {
        return base
    } else if (exponent === 0){
        return 1
    }

    return base * power(base, exponent - 1)
}

// inputs:
// power(2,2) // 4
// power(2,4) // 16
console.log(power(2,4)) // 16