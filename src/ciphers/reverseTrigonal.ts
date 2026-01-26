import { calcValue } from "../utils.js";
import {reverseTrigonalTable} from '../table.js'
import { CipherFn } from "../types/cipherFn.js";

export const reverseTrigonal:CipherFn = (text:string) => calcValue(text, reverseTrigonalTable);