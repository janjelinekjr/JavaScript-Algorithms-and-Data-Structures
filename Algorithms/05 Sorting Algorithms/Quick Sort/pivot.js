// swap() can be used
const swap = (arr, index1, index2) => {
    let temp = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = temp
}

function pivot(arr) {
    let pivotIndex = 0

    for (let i = 1; i < arr.length; i++) {
        if (arr[0] > arr[i]) {
            pivotIndex++
            let temp = arr[i]
            arr[i] = arr[pivotIndex]
            arr[pivotIndex] = temp
        }
    }
    swap(arr, 0, pivotIndex)

    return pivotIndex
}

console.log(pivot([26, 23, 27, 44, 17, 47, 39, 42, 43, 1]))