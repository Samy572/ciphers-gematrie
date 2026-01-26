import { describe, it, expect } from 'vitest';
import {capitalAddedTable,capitalsMixedTable,reverseCapitalsMixedTable,reverseCapsAddedTable} from '../table.js'
import { calcCapitals } from '../utils.js';

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