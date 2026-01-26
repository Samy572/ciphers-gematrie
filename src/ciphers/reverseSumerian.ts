import { calcValue } from "../utils.js";
import {reverseSumerianTable} from '../table.js'
import { CipherFn } from "../types/cipherFn.js";

export const reverseSumerian: CipherFn = (text:string) => calcValue(text, reverseSumerianTable);