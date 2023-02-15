// Restrictions: Time - O(n), Space - O(n)

function areThereDuplicates(...args){
    let objArg = {}

   for (const val of args) {
       objArg[val] = objArg[val] ? objArg[val] + 1 : 1
   }

   for (const [key, value] of Object.entries(objArg)){
       if(value > 1) return true
   }

   return false
}

// inputs:
// areThereDuplicates(1, 2, 3) // false
console.log(areThereDuplicates(1, 2, 2)) // true
// areThereDuplicates('a', 'b', 'c', 'a') // true

// -------------------------------------------------------------------------------------------------------
// SOLUTIONS:
// areThereDuplicates Solution (Frequency Counter)

// function areThereDuplicates() {
//     let collection = {}
//     for(let val in arguments){
//         collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
//     }
//     for(let key in collection){
//         if(collection[key] > 1) return true
//     }
//     return false;
// }

// areThereDuplicates Solution (Multiple Pointers)

// function areThereDuplicates(...args) {
//     // Two pointers
//     args.sort((a,b) => a > b);
//     let start = 0;
//     let next = 1;
//     while(next < args.length){
//         if(args[start] === args[next]){
//             return true
//         }
//         start++
//         next++
//     }
//     return false
// }

// areThereDuplicates One Liner Solution

// function areThereDuplicates() {
//     return new Set(arguments).size !== arguments.length;
// }