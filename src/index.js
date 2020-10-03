const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arrayOfNumbers = [];
    // split the string by 10 chars
    for (let i = 0; i < expr.length; i += 10) {
        arrayOfNumbers.push(expr.slice(i, i + 10).split(''));
    }

    let arrayOfMorse = [];

    // convert decimal code into Morse code
    arrayOfNumbers.forEach(decimalCodeOfLetter => {
        // check space letter (**********)
        if (decimalCodeOfLetter == '**********') {
            arrayOfMorse.push('');
            return;
        }

        let oneLetter = '';
        for (let i = 0; i < decimalCodeOfLetter.length; i += 2) {
            switch (decimalCodeOfLetter[i]+decimalCodeOfLetter[i+1]) {
                case '11':
                    oneLetter += '-';
                    break;
                case '10':
                    oneLetter += '.';
                    break;
            }
        }
        arrayOfMorse.push(oneLetter);
    });

    // convert to ordinary letters
    let resultString = '';
    arrayOfMorse.forEach(element => {
        // if we have space letter, add it
        if (element == '') {
            resultString += ' ';
            return;
        }
        resultString += MORSE_TABLE[element];
    });

    return resultString;
}

module.exports = {
    decode
}