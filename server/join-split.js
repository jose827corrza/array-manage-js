const elements = ['fire','air','water']


function convertToUrl(phrase) {
    return phrase.split(' ').join('-').toLowerCase()
}

function convertArrayToUrl(array) {
    return array.join('-')
}

console.log(convertToUrl('esta es mi url bien bella'));
console.log(convertArrayToUrl(elements));