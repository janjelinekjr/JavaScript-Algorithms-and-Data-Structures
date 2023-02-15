function reverseStr(str){
    let reversed = ''

    if(!str){
    return reversed
    } else {
        reversed += str.slice(-1)
    }

    reversed = reversed.concat(reverseStr(str.slice(0, -1)))
    return reversed
}

// inputs:
console.log(reverseStr('awesome')) // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'