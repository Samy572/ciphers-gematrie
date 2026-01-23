import {
	standardTable,
	standardExtendedTable,
	latinTable,
	capitalsMixedTable,
	reverseCapitalsMixedTable,
	lowercaseTable,
	uppercaseTable,
	reverseStandardExtendedTable,
	satanicTable,
	reverseSatanicTable,
	singleReductionTable,
	kvExceptionTable,
	skvExceptionTable,
	reverseSingleReductionTable,
	epExceptionTable,
	ehpExceptionTable,
	primesTable,
	trigonalTable,
	squaresTable,
	fibonacciTable,
	reversePrimesTable,
	reverseTrigonalTable,
	septenaryTable,
	reverseSquaresTable,
	chaldeanTable,
	keypadTable,
} from './ciphers.js';

// Reverse Standard
const reverseTable = {};
for (const [letter, value] of Object.entries(standardTable)) {
	reverseTable[letter] = 27 - value;
}

// Sumerian (Ordinal * 6)
const sumerianTable = {};
for (const [letter, value] of Object.entries(standardTable)) {
	sumerianTable[letter] = value * 6;
}

// Reverse Sumerian (Reverse * 6)
const reverseSumerianTable = {};
for (const [letter, value] of Object.entries(reverseTable)) {
	reverseSumerianTable[letter] = value * 6;
}

// Helper to clean text
function cleanText(text) {
	return text.toUpperCase().replace(/[^A-Z]/g, '');
}

// Reduce number
function reduceNumber(n) {
	return ((n - 1) % 9) + 1;
}

// Calculate value
function calcValue(text, table, reduce = false) {
	const letters = cleanText(text).split('');
	let sum = 0;
	for (const char of letters) {
		let val = table[char] || 0;
		if (reduce) val = reduceNumber(val);
		sum += val;
	}
	return sum;
}

// Capital added
function capitalsAdded(text) {
	let sum = 0;

	for (const char of text) {
		if (lowercaseTable[char]) {
			sum += lowercaseTable[char];
		} else if (uppercaseTable[char]) {
			sum += uppercaseTable[char];
		}
	}
	return sum;
}

export const ordinal = (text) => calcValue(text, standardTable);
export const reduction = (text) => calcValue(text, standardTable, true);

export const reverseOrdinal = (text) => calcValue(text, reverseTable);

export const reverseReduction = (text) => calcValue(text, reverseTable, true);

export const standard = (text) => calcValue(text, standardExtendedTable);
export const latin = (text) => calcValue(text, latinTable);
export const sumerian = (text) => calcValue(text, sumerianTable);
export const reverseSumerian = (text) => calcValue(text, reverseSumerianTable);

export const capitalsMixed = (text) => calcValue(text, capitalsMixedTable);
export const capitalsAdd = (text) => capitalsAdded(text);
export const reverseCapsMixed = (text) =>
	calcValue(text, reverseCapitalsMixedTable);
export const reverseCapsAdded = (text) => calcValue(text, reverseTable);

export const reverseStandard = (text) =>
	calcValue(text, reverseStandardExtendedTable);
export const satanic = (text) => calcValue(text, satanicTable);
export const reverseSatanic = (text) => calcValue(text, reverseSatanicTable);
export const singleReduction = (text) => calcValue(text, singleReductionTable);

export const kvException = (text) => calcValue(text, kvExceptionTable);
export const skvException = (text) => calcValue(text, skvExceptionTable);
export const reverseSingleReduction = (text) =>
	calcValue(text, reverseSingleReductionTable);
export const epException = (text) => calcValue(text, epExceptionTable);
export const ehpException = (text) => calcValue(text, ehpExceptionTable);
export const primes = (text) => calcValue(text, primesTable);
export const trigonal = (text) => calcValue(text, trigonalTable);
export const squares = (text) => calcValue(text, squaresTable);
export const fibonacci = (text) => calcValue(text, fibonacciTable);
export const reversePrimes = (text) => calcValue(text, reversePrimesTable);
export const reverseTrigonal = (text) => calcValue(text, reverseTrigonalTable);
export const septenary = (text) => calcValue(text, septenaryTable);
export const reverseSquares = (text) => calcValue(text, reverseSquaresTable);
export const chaldean = (text) => calcValue(text, chaldeanTable);
export const keypad = (text) => calcValue(text, keypadTable);

export function ciphers(text) {
	return {
		Ordinal: ordinal(text),
		Reduction: reduction(text),
		ReverseOrdinal: reverseOrdinal(text),
		ReverseReduction: reverseReduction(text),

		Standard: standard(text),
		Latin: latin(text),
		Sumerian: sumerian(text),
		ReverseSumerian: reverseSumerian(text),

		CapitalsMixed: capitalsMixed(text),
		CapitalsAdded: capitalsAdd(text),
		ReverseCapsMixed: reverseCapsMixed(text),
		ReverseCapsAdded: reverseCapsAdded(text),

		ReverseStandard: reverseStandard(text),
		Satanic: satanic(text),
		ReverseSatanic: reverseSatanic(text),
		SingleReduction: singleReduction(text),

		KvException: kvException(text),
		SkvException: skvException(text),
		ReverseSingleReduction: reverseSingleReduction(text),
		EpException: epException(text),

		EhpException: ehpException(text),
		Primes: primes(text),
		Trigonal: trigonal(text),
		Squares: squares(text),

		Fibonacci: fibonacci(text),
		ReversePrimes: reversePrimes(text),
		ReverseTrigonal: reverseTrigonal(text),

		ReverseSquares: reverseSquares(text),
		Chaldean: chaldean(text),
		Septenary: septenary(text),
		Keypad: keypad(text),
	};
}
