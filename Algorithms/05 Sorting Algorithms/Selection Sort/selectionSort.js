// function selectionSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let min = i
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[min] > arr[j]) {
//                 let temp = arr[min]
//                 arr[min] = arr[j]
//                 arr[j] = temp
//             }
//         }
//     }
//     return arr
// }
//
// console.log(selectionSort([5, 3, 15, 9, 1, 6]))

// OPTIMIZATION
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[min] > arr[j]) {
                min = j
            }
        }
        if (i !== min) {
            let temp = arr[min]
            arr[min] = arr[i]
            arr[i] = temp
        }
    }
    return arr
}

console.log(selectionSort([5, 3, 15, 9, 1, 6]))