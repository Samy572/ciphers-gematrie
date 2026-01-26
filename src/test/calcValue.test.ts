import {describe, it, expect} from 'vitest'
import { calcValue, calcCapitals } from '../utils.js'
import { sumerianTable, chaldeanTable, trigonalTable, ehpExceptionTable, fibonacciTable, latinTable, primesTable, kvExceptionTable,reverseSatanicTable,reductionTable, satanicTable,reversePrimesTable,septenaryTable, squaresTable, reverseSumerianTable, standardTable, standardExtendedTable, skvExceptionTable, reverseSingleReductionTable, keypadTable, reverseReductionTable,reverseTable, reverseTrigonalTable, reverseStandardExtendedTable, singleReductionTable, reverseSquaresTable, epExceptionTable, capitalAddedTable,capitalsMixedTable,reverseCapitalsMixedTable,reverseCapsAddedTable   } from '../table.js'


describe('CalcValue', () => {
  
  it('calculate the value using sumerian table', () => {
    const input = 'hello';
    expect(calcValue(input, sumerianTable)).toBe(48 + 30 + 72 +72 + 90);
  })

  it('calculate the value using chaldean table', () => {
    const input = 'hello';
    expect(calcValue(input, chaldeanTable)).toBe(5 + 5 + 3 + 3 + 7);
  })

    it('calculate the value using trigonal table', () => {
    const input = 'hello';
    expect(calcValue(input, trigonalTable)).toBe(36 + 15 + 78 + 78 + 120);
  })

    it('calculate the value using ehp table', () => {
    const input = 'hello';
    expect(calcValue(input, ehpExceptionTable)).toBe(10 + 22 + 6 + 6 + 3);
  })
    it('calculate the value using fibonacci table', () => {
    const input = 'hello';
    expect(calcValue(input, fibonacciTable)).toBe(21 + 5 + 144 + 144 + 144);
  })
    it('calculate the value using latin table', () => {
    const input = 'hello';
    expect(calcValue(input, latinTable)).toBe(8 + 5 + 20 + 20 + 50);
  })
    it('calculate the value using primes table', () => {
    const input = 'hello';
    expect(calcValue(input, primesTable)).toBe(19 + 11 + 37 + 37 + 47);
  })

    it('calculate the value using kvException table', () => {
    const input = 'hello';
    expect(calcValue(input, kvExceptionTable)).toBe(8+ 5 + 3 + 3 + 6);
  })
    it('calculate the value using reverseSatanic table', () => {
    const input = 'hello';
    expect(calcValue(input, reverseSatanicTable)).toBe(54 + 57 + 50 + 50 + 47);
  })
    it('calculate the value using reduction table', () => {
    const input = 'hello';
    expect(calcValue(input, reductionTable)).toBe(8 + 5 + 3 + 3 + 6);
  })

    it('calculate the value using satanic table', () => {
    const input = 'hello';
    expect(calcValue(input, satanicTable)).toBe(43 + 40 + 47 + 47 + 50);
  })

    it('calculate the value using reverse Primes table', () => {
    const input = 'hello';
    expect(calcValue(input, reversePrimesTable)).toBe(67 + 79 + 47 + 47 + 37);
  })

    it('calculate the value using septenary table', () => {
    const input = 'hello';
    expect(calcValue(input, septenaryTable)).toBe(6 + 5 + 2 + 2 + 2);
  })
    it('calculate the value using squares table', () => {
    const input = 'hello';
    expect(calcValue(input, squaresTable)).toBe(64 + 25 + 144 + 144 + 225);
  })
    it('calculate the value using reverse Sumerian table', () => {
    const input = 'hello';
    expect(calcValue(input, reverseSumerianTable)).toBe(114 + 132 + 90 + 90 + 72);
  })
    it('calculate the value using standard table', () => {
    const input = 'hello';
    expect(calcValue(input, standardTable)).toBe(8 + 5 + 12 + 12 + 15);
  })

    it('calculate the value using standard Extended table', () => {
    const input = 'hello';
    expect(calcValue(input, standardExtendedTable)).toBe(8 + 5 + 30 + 30 + 60);
  })

    it('calculate the value using skv Exception table', () => {
    const input = 'hello';
    expect(calcValue(input, skvExceptionTable)).toBe(8 + 5 + 3 + 3 + 6);
  })

    it('calculate the value using reverse Single Reduction table', () => {
    const input = 'hello';
    expect(calcValue(input, reverseSingleReductionTable)).toBe(10 + 4 + 6 + 6 + 3);
  })

    it('calculate the value using keypad table', () => {
    const input = 'hello';
    expect(calcValue(input, keypadTable)).toBe(4 + 3 + 5 + 5 + 6);
  })
    it('calculate the value using chaldean table', () => {
    const input = 'hello';
    expect(calcValue(input, chaldeanTable)).toBe(5 + 5 + 3 + 3 + 7);
  })

    it('calculate the value using reverse reduction table', () => {
    const input = 'hello';
    expect(calcValue(input, reverseReductionTable)).toBe(1 + 4 + 6 + 6 + 3);
  })
  
    it('calculate the value using reverse table', () => {
    const input = 'hello';
    expect(calcValue(input, reverseTable)).toBe(19 + 22 + 15 + 15 + 12);
  })

    it('calculate the value using reverese trigonal table', () => {
    const input = 'hello';
    expect(calcValue(input, reverseTrigonalTable)).toBe(190 + 253 + 120 + 120 + 78);
  })

   it('calculate the value using reverese standard extended table', () => {
    const input = 'hello';
    expect(calcValue(input, reverseStandardExtendedTable)).toBe(100 + 400 + 60 + 60 + 30);
  })

   it('calculate the value using single reduction table', () => {
    const input = 'hello';
    expect(calcValue(input, singleReductionTable)).toBe(8 + 5 + 3 + 3 + 6);
  })

   it('calculate the value using reverese squares table', () => {
    const input = 'hello';
    expect(calcValue(input, reverseSquaresTable)).toBe(361 + 484 + 225 + 225 + 144);
  })

   it('calculate the value using ep exception table', () => {
    const input = 'hello';
    expect(calcValue(input, epExceptionTable)).toBe(1 + 22 + 6 + 6 + 3);
  })
   it('calculate the value using reverese trigonal table', () => {
    const input = 'hello';
    expect(calcValue(input, reverseTrigonalTable)).toBe(190 + 253 + 120 + 120 + 78);
  })
})

describe("calcCapitals", () => {
   it('calculate the value using capital added table', () => {
    const input = 'Hello';
    expect(calcCapitals(input, capitalAddedTable)).toBe(34 + 5 + 12 + 12 + 15);
  })
     it('calculate the value using capital mixed table', () => {
    const input = 'Hello';
    expect(calcCapitals(input, capitalsMixedTable)).toBe(15 + 10 + 24 + 24 + 30);
  })
     it('calculate the value using reverse capital mixed table', () => {
    const input = 'Hello';
    expect(calcCapitals(input, reverseCapitalsMixedTable)).toBe(37 + 44 + 30 + 30 + 24);
  })
     it('calculate the value using capital added table', () => {
    const input = 'Hello';
    expect(calcCapitals(input, reverseCapsAddedTable)).toBe(45 + 22 + 15 + 15 + 12);
  })
}) 
