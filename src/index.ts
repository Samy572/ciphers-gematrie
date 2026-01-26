export { ordinal } from './ciphers/ordinal.js';
export { reduction } from './ciphers/reduction.js';
export { reverseOrdinal } from './ciphers/reverseOrdinal.js';
export { reverseReduction } from './ciphers/reverseReduction.js';
export { standard } from './ciphers/standard.js';
export { latin } from './ciphers/latin.js';
export { sumerian } from './ciphers/sumerian.js';
export { reverseSumerian } from './ciphers/reverseSumerian.js';
export { capitalsMixed } from './ciphers/capitalsMixed.js';
export { capitalsAdd } from './ciphers/capitalsAdd.js';
export { reverseCapsMixed } from './ciphers/reverseCapsMixed.js';
export { reverseCapsAdded } from './ciphers/reverseCapsAdded.js';
export { reverseStandard } from './ciphers/reverseStandard.js';
export { satanic } from './ciphers/satanic.js';
export { reverseSatanic } from './ciphers/reverseSatanic.js';
export { singleReduction } from './ciphers/singleReduction.js';
export { kvException } from './ciphers/kvException.js';
export { skvException } from './ciphers/skvException.js';
export { reverseSingleReduction } from './ciphers/reverseSingleReduction.js';
export { epException } from './ciphers/epException.js';
export { ehpException } from './ciphers/ehpException.js';
export { primes } from './ciphers/primes.js';
export { trigonal } from './ciphers/trigonal.js';
export { squares } from './ciphers/squares.js';
export { fibonacci } from './ciphers/fibonacci.js';
export { reversePrimes } from './ciphers/reversePrimes.js';
export { reverseTrigonal } from './ciphers/reverseTrigonal.js';
export { septenary } from './ciphers/septenary.js';
export { reverseSquares } from './ciphers/reverseSquares.js';
export { chaldean } from './ciphers/chaldean.js';
export { keypad } from './ciphers/keypad.js';
export { createCipher } from './ciphers/custom.js';

import * as allCiphers from './index.js';


const orderedCiphers: [string, (text: string) => number][] = [
  ['Ordinal', allCiphers.ordinal],
  ['Reduction', allCiphers.reduction],
  ['ReverseOrdinal', allCiphers.reverseOrdinal],
  ['ReverseReduction', allCiphers.reverseReduction],
  ['Standard', allCiphers.standard],
  ['Latin', allCiphers.latin],
  ['Sumerian', allCiphers.sumerian],
  ['ReverseSumerian', allCiphers.reverseSumerian],
  ['CapitalsMixed', allCiphers.capitalsMixed],
  ['CapitalsAdded', allCiphers.capitalsAdd],
  ['ReverseCapsMixed', allCiphers.reverseCapsMixed],
  ['ReverseCapsAdded', allCiphers.reverseCapsAdded],
  ['ReverseStandard', allCiphers.reverseStandard],
  ['Satanic', allCiphers.satanic],
  ['ReverseSatanic', allCiphers.reverseSatanic],
  ['SingleReduction', allCiphers.singleReduction],
  ['KvException', allCiphers.kvException],
  ['SkvException', allCiphers.skvException],
  ['ReverseSingleReduction', allCiphers.reverseSingleReduction],
  ['EpException', allCiphers.epException],
  ['EhpException', allCiphers.ehpException],
  ['Primes', allCiphers.primes],
  ['Trigonal', allCiphers.trigonal],
  ['Squares', allCiphers.squares],
  ['Fibonacci', allCiphers.fibonacci],
  ['ReversePrimes', allCiphers.reversePrimes],
  ['ReverseTrigonal', allCiphers.reverseTrigonal],
  ['Septenary', allCiphers.septenary],
  ['ReverseSquares', allCiphers.reverseSquares],
  ['Chaldean', allCiphers.chaldean],
  ['Keypad', allCiphers.keypad],
];

export function ciphers(text: string) {
  const result: Record<string, number> = {};
  for (const [name, fn] of orderedCiphers) {
    result[name] = fn(text);
  }
  return result;
}

