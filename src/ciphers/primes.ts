import { calcValue } from "../utils.js";
import {primesTable} from '../table.js'
import { CipherFn } from "../types/cipherFn.js";

export const primes:CipherFn=(text:string)=>calcValue(text, primesTable)