const toBase = (number, b = 10) => {
    let digits = '012345678abcdefghigklmopqrstuvwxyz'
    let dividend = num
    let divisor = b
    let quotien = 0
    let result = ''

    while (dividend !== 0) {
        result = result + ' ' + (dividend % divisor)
        dividend = Math.floor(dividend / divisor)

    }
    return result.split(' ').reverse().join('');


}
console.log(toBase(10, 8));
