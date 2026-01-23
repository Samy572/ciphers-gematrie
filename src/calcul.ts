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
} from './ciphers';
import { Table } from './types/table';
import { CipherFn } from './types/cipherFn';

// Reverse Standard
const reverseTable: Table = {};
for (const [letter, value] of Object.entries(standardTable)) {
	reverseTable[letter] = 27 - value;
}

// Sumerian (Ordinal * 6)
const sumerianTable: Table = {};
for (const [letter, value] of Object.entries(standardTable)) {
	sumerianTable[letter] = value * 6;
}

// Reverse Sumerian (Reverse * 6)
const reverseSumerianTable: Table = {};
for (const [letter, value] of Object.entries(reverseTable)) {
	reverseSumerianTable[letter] = value * 6;
}

// Helper to clean text
function cleanText(text: string) {
	return text.toUpperCase().replace(/[^A-Z]/g, '');
}

// Reduce number
function reduceNumber(n: number) {
	return ((n - 1) % 9) + 1;
}

// Calculate value
function calcValue(text: string, table: Table, reduce: boolean = false) {
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
function capitalsAdded(text: string) {
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

export const ordinal: CipherFn = (text) => calcValue(text, standardTable);
export const reduction: CipherFn = (text) =>
	calcValue(text, standardTable, true);

export const reverseOrdinal: CipherFn = (text) => calcValue(text, reverseTable);

export const reverseReduction: CipherFn = (text) =>
	calcValue(text, reverseTable, true);

export const standard: CipherFn = (text) =>
	calcValue(text, standardExtendedTable);
export const latin: CipherFn = (text) => calcValue(text, latinTable);
export const sumerian: CipherFn = (text) => calcValue(text, sumerianTable);
export const reverseSumerian: CipherFn = (text) =>
	calcValue(text, reverseSumerianTable);

export const capitalsMixed: CipherFn = (text) =>
	calcValue(text, capitalsMixedTable);
export const capitalsAdd: CipherFn = (text) => capitalsAdded(text);
export const reverseCapsMixed: CipherFn = (text) =>
	calcValue(text, reverseCapitalsMixedTable);
export const reverseCapsAdded: CipherFn = (text) =>
	calcValue(text, reverseTable);

export const reverseStandard: CipherFn = (text) =>
	calcValue(text, reverseStandardExtendedTable);
export const satanic: CipherFn = (text) => calcValue(text, satanicTable);
export const reverseSatanic: CipherFn = (text) =>
	calcValue(text, reverseSatanicTable);
export const singleReduction: CipherFn = (text) =>
	calcValue(text, singleReductionTable);

export const kvException: CipherFn = (text) =>
	calcValue(text, kvExceptionTable);
export const skvException: CipherFn = (text) =>
	calcValue(text, skvExceptionTable);
export const reverseSingleReduction: CipherFn = (text) =>
	calcValue(text, reverseSingleReductionTable);
export const epException: CipherFn = (text) =>
	calcValue(text, epExceptionTable);
export const ehpException: CipherFn = (text) =>
	calcValue(text, ehpExceptionTable);
export const primes: CipherFn = (text) => calcValue(text, primesTable);
export const trigonal: CipherFn = (text) => calcValue(text, trigonalTable);
export const squares: CipherFn = (text) => calcValue(text, squaresTable);
export const fibonacci: CipherFn = (text) => calcValue(text, fibonacciTable);
export const reversePrimes: CipherFn = (text) =>
	calcValue(text, reversePrimesTable);
export const reverseTrigonal: CipherFn = (text) =>
	calcValue(text, reverseTrigonalTable);
export const septenary: CipherFn = (text) => calcValue(text, septenaryTable);
export const reverseSquares: CipherFn = (text) =>
	calcValue(text, reverseSquaresTable);
export const chaldean: CipherFn = (text) => calcValue(text, chaldeanTable);
export const keypad: CipherFn = (text) => calcValue(text, keypadTable);

export function ciphers(text: string) {
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
