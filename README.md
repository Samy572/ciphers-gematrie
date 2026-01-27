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

## ⚡ Quick start

```javascript
import { ciphers } from 'ciphers-gematria'; // ESM
const gematria = require('ciphers-gematria'); // CJS

const result = ciphers("hello"); // ESM
const result = gematria.ciphers("hello"); // CJS

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
### ESM
 ♻️ Only the imported cipher will be included in your final bundle.
```javascript
import { sumerian, latin, chaldean } from 'ciphers-gematria'; 

console.log(sumerian('hello')); // 312
console.log(chaldean('hello')); // 23
```

### CJS
```javascript
const gematria = require('ciphers-gematria');

console.log(gematria.latin('hello')); // 312
console.log(gematria.chaldean('hello')); // 23
```

---
## 🛠️ Create a custom cipher

createCipher is a function:
it returns a new cipher function based on a custom letter-value table.

### ESM
```javascript
import { createCipher } from 'ciphers-gematria';

const mySpecialTable = {
  A: 251, B: 101, C: 45, D:150 ...... Z:42
};
const myCustomCipher = createCipher(mySpecialTable); 
console.log(myCustomCipher('hello')); 

```
### CJS
```javascript
const gematria = require('ciphers-gematria');

const mySpecialTable = {
  A: 251, B: 101, C: 45, D:150 ...... Z:42
};
const myCustomCipher = gematria.createCipher(mySpecialTable); 
console.log(myCustomCipher('hello')); 
```

---
## 📚 Available ciphers

<table style="background-color: #f1f1f1; border-radius: 5px; padding: 5px">
  <tr s>
    <td >Ordinal</td>
    <td >Reduction</td>
     <td >Reverse</td>
      <td >Reverse Reduction</td>
  </tr>
  <tr>
    <td>Standard</td>
    <td >Latin</td>
     <td >Sumerian</td>
      <td >Reverse Sumerian</td>
  </tr>
    <tr>
    <td>Capitals Mixed</td>
    <td >Capitals Added</td>
    <td >Reverse Capitals Mixed</td>
     <td >Reverse Capitals Added</td>
  </tr>
  <tr>
    <td>Reverse Standard</td>
    <td >Satanic</td>
    <td >Reverse Satanic</td>
     <td >Single Reduction</td>
  </tr>
    <tr>
    <td>Kv Exception</td>
    <td >Skv Exception</td>
    <td >Reverse Single Reduction</td>
     <td >Ep Exception</td>
     </tr>
    <tr>
      <td>Ehp Exception</td>
      <td >Primes</td>
      <td >Trigonal</td>
      <td >Squares</td>
    </tr>
     <tr>
      <td>Fibonacci</td>
      <td >Reverse Primes</td>
      <td >Reverse Trigonal</td>
      <td >Reverse Squares</td>
    </tr>
     <tr>
      <td>Chaldean</td>
      <td >Septenary</td>
      <td >Keypad</td>
    </tr>
</table>

---
## 🤝Contribution

Contributions are welcome! If you’d like to add a new cipher.

Fork the repository and create a pull request

