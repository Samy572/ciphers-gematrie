import {
	standardTable,
	standardExtendedTable,
	latinTable,
	capitalsMixedTable,
	reverseCapitalsMixedTable,
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
	sumerianTable,
	reverseSumerianTable,
	reverseTable,
	reverseReductionTable,
	reductionTable,
	capitalAddedTable,
	reverseCapsAddedTable,
} from './table.js';
import { Table } from './types/table.js';
import { CipherFn } from './types/cipherFn.js';

// Helper to clean text
function cleanText(text: string) {
	return text.toUpperCase().replace(/[^A-Z]/g, '');
}

// Calculate value
function calcValue(text: string, table: Table): number {
  return cleanText(text)
	.split('')
	.reduce((sum, char) => sum + (table[char] || 0), 0);
}

// Capital added, mixed
function calcCapitals(text: string, table: Table): number {
	let sum = 0;
	for (const char of text) {
		let val = table[char];
		if (val) sum += val;
	}
	return sum;
}

export const ordinal: CipherFn = (text) => calcValue(text, standardTable);
export const reduction: CipherFn = (text) => calcValue(text, reductionTable);

export const reverseOrdinal: CipherFn = (text) => calcValue(text, reverseTable);

export const reverseReduction: CipherFn = (text) =>
	calcValue(text, reverseReductionTable);

export const standard: CipherFn = (text) =>
	calcValue(text, standardExtendedTable);
export const latin: CipherFn = (text) => calcValue(text, latinTable);
export const sumerian: CipherFn = (text) => calcValue(text, sumerianTable);
export const reverseSumerian: CipherFn = (text) =>
	calcValue(text, reverseSumerianTable);

export const capitalsMixed: CipherFn = (text) =>
	calcCapitals(text, capitalsMixedTable);
export const capitalsAdd: CipherFn = (text) =>
	calcCapitals(text, capitalAddedTable);
export const reverseCapsMixed: CipherFn = (text) =>
	calcCapitals(text, reverseCapitalsMixedTable);
export const reverseCapsAdded: CipherFn = (text) =>
	calcCapitals(text, reverseCapsAddedTable);

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
