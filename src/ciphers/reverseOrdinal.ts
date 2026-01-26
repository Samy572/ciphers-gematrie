import { calcValue } from "../utils.js";
import {reverseTable} from '../table.js'
import { CipherFn } from "../types/cipherFn.js";

export const reverseOrdinal: CipherFn = (text:string) => calcValue(text, reverseTable);