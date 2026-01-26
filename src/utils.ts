import { Table } from "./types/table.js";

// Helper to clean text
function cleanText(text: string) {
	return text.toUpperCase().replace(/[^A-Z]/g, '');
}

// Calculate value
export function calcValue(text: string, table: Table): number {
  return cleanText(text)
	.split('')
	.reduce((sum, char) => sum + (table[char] || 0), 0);
}

// Capital added, mixed
export function calcCapitals(text: string, table: Table): number {
	let sum = 0;
	for (const char of text) {
		let val = table[char];
		if (val) sum += val;
	}
	return sum;
}