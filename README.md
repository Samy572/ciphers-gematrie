# Ciphers Gematria

**Ciphers Gematria** is a JavaScript package for calculating **gematria values** using multiple systems (Ordinal, Sumerian, Chaldean, Latin, Satanic, Fibonacci, and more).  
It supports **ESM**, is **tree-shakable**, and allows users to import **all ciphers at once** or **just a single cipher**.

---

## 🚀 Installation

```bash
npm install ciphers-gematria
# or with yarn
yarn add ciphers-gematria
```

## Calculate all ciphers

```javascript
import { ciphers } from 'ciphers-gematria';

const result = ciphers("hello");
console.log(result);

// Output:
{
  Ordinal: 52,
  Reduction: 25,
  ReverseOrdinal: 83,
  ReverseReduction: 20,
  Standard: 133,
  Latin: 103,
  Sumerian: 312,
  ReverseSumerian: 498,
  CapitalsMixed: 104,
  CapitalsAdded: 52,
  ReverseCapsMixed: 166,
  ReverseCapsAdded: 83,
  ReverseStandard: 650,
  Satanic: 227,
  ReverseSatanic: 258,
  SingleReduction: 25,
  KvException: 25,
  SkvException: 25,
  ReverseSingleReduction: 29,
  EpException: 38,
  EhpException: 47,
  Primes: 151,
  Trigonal: 327,
  Squares: 602,
  Fibonacci: 458,
  ReversePrimes: 277,
  ReverseTrigonal: 761,
  ReverseSquares: 1439,
  Chaldean: 23,
  Septenary: 17,
  Keypad: 23
}
```

---

## Calculate a single cipher

```javascript
import { sumerian, chaldean } from 'ciphers-gematria';

console.log(sumerian('hello')); // 312
console.log(chaldean('hello')); // 23
```
