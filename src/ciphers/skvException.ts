import { calcValue } from "../utils.js";
import {skvExceptionTable} from '../table.js'
import { CipherFn } from "../types/cipherFn.js";

export const skvException: CipherFn = (text:string) => calcValue(text, skvExceptionTable);