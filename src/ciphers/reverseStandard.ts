import { calcValue } from "../utils.js";
import {reverseStandardExtendedTable} from '../table.js'
import { CipherFn } from "../types/cipherFn.js";

export const reverseStandard: CipherFn = (text:string) => calcValue(text, reverseStandardExtendedTable);