import { calcValue } from "../utils.js";
import {fibonacciTable} from '../table.js'
import { CipherFn } from "../types/cipherFn.js";

export const fibonacci:CipherFn=(text:string)=>calcValue(text, fibonacciTable)