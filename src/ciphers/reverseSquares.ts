import { calcValue } from "../utils.js";
import {reverseSquaresTable} from '../table.js'
import { CipherFn } from "../types/cipherFn.js";

export const reverseSquares: CipherFn = (text:string) => calcValue(text, reverseSquaresTable);