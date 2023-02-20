function fib_recursive(n) {
    if (n === 0) return undefined
    if (n === 1 || n === 2) return 1
    return fib_recursive(n - 1) + fib_recursive(n - 2)
}

console.log(fib_recursive(6))

function fib_memo(n, memo = []) {
    if (memo[n] !== undefined) return memo[n]
    if (n === 0) return undefined
    if (n === 1 || n === 2) return 1

    let res = fib_memo(n - 1, memo) + fib_memo(n - 2, memo)
    memo[n] = res
    return res
}

console.log(fib_memo(6))

function fib_tabulation(n) {
    if (n === 0) return undefined
    if (n === 1 || n === 2) return 1

    let fibNums = [0, 1, 1]
    for (let i = 3; i <= n; i++) {
        fibNums[i] = fibNums[i - 1] + fibNums[i - 2]
    }
    return fibNums[n]
}

console.log(fib_tabulation(6))