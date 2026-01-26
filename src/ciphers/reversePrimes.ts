import { calcValue } from "../utils.js";
import {reversePrimesTable} from '../table.js'
import { CipherFn } from "../types/cipherFn.js";

export const reversePrimes:CipherFn = (text:string) => calcValue(text, reversePrimesTable);