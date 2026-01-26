import { calcValue } from "../utils.js";
import {reverseReductionTable} from '../table.js'
import { CipherFn } from "../types/cipherFn.js";

export const reverseReduction: CipherFn = (text:string) => calcValue(text, reverseReductionTable);