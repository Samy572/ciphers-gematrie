import { calcValue } from "../utils.js";
import {reverseSatanicTable} from '../table.js'
import { CipherFn } from "../types/cipherFn.js";

export const reverseSatanic: CipherFn = (text:string) => calcValue(text, reverseSatanicTable);