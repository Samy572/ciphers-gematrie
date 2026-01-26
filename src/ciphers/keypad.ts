import { calcValue } from "../utils.js";
import {keypadTable} from '../table.js'
import { CipherFn } from "../types/cipherFn.js";

export const keypad:CipherFn=(text:string) => calcValue(text, keypadTable)