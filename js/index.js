const resultEl = document.getElementById('result');
const lengthEl2 = document.getElementById('length12');
const lengthE9 = document.getElementById('length9');
const lengthE6 = document.getElementById('length6');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboard = document.getElementById('clipboard');

const randomFunc = {
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol,
    length: getLength
}

clipboard.addEventListener('click', () => {
	const password = resultEl.innerText;
	
    navigator.clipboard.writeText(password)
    alert('Password copied to clipboard');
});

refresh.addEventListener("click", () => {
    const has12lenght = lengthEl2.checked;
    const has9length = lengthE9.checked;
    const has6length = lengthE6.checked;
	const hasLower = lowercaseEl.checked;
	const hasUpper = uppercaseEl.checked;
	const hasNumber = numbersEl.checked;
	const hasSymbol = symbolsEl.checked;

	
	resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, has12lenght, has9length, has6length);
})

generate.addEventListener('click', () => {
    const has12lenght = lengthEl2.checked;
    const has9length = lengthE9.checked;
    const has6length = lengthE6.checked;
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolsEl.checked;

    
    return resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, has12lenght, has9length, has6length);
});


function generatePassword(lower, upper, number, symbol, has12lenght, has9length, has6length, length) {
    if (has12lenght) {
        length = 12;
    } else if (has9length) {
        length = 9;
    } else if (has6length) {
        length = 6;
    }


	let generatedPassword = '';
	const typesCount = lower + upper + number + symbol
	const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);
	
	for(let i=0; i<length; i+=typesCount) {
		typesArr.forEach(type => {
			const funcName = Object.keys(type)[0];
			generatedPassword += randomFunc[funcName]();
		});
	}
	
	const finalPassword = generatedPassword.slice(0, length);
	
	return finalPassword;
}

function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
	return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
	const symbols = '!@#$%^&*(){}[]=<>/,.'
	return symbols[Math.floor(Math.random() * symbols.length)];
}

function getLength() {
   
}