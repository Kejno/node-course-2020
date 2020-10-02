const fs = require('fs');
console.log('a'.charCodeAt(0))
// console.log(String.fromCharCode(94))
const str = 'ArT^^^$emzZ'

function charCode(str, n, action) {

    const arr = [];

    let num;
    let forUpperCase;
    let forLowerCase;

    if (action === 'encode') {
        num = -26;
        forUpperCase = 97;
        forLowerCase = 65;
    } else if (action === 'decode') {
        num = 26;
        forUpperCase = 122;
        forLowerCase = 90;
    } else {
        return true;
    }

    for (let i = 0; i < str.length; i++) {
        const posIndex = str.charCodeAt(i);
        const posValue = str.charAt(i);
        if (posValue.match(/[a-zA-Z]/) && posIndex > 64 && posIndex < 123) {
            let newPos = posIndex + (action === 'encode' ? -n : n);
            const isLower = posIndex > 91 ? forUpperCase : forLowerCase;
            if (action === 'encode' ? (newPos < isLower) : (newPos > isLower)) {
                newPos = newPos - num;
            }
            const newN = String.fromCharCode(newPos)
            arr.push(newN)
        } else {
            arr.push(posValue)
        }
    }
    console.log(arr.join(''))
}
charCode(str, 1, 'encode')