import { calcValue } from "../utils.js";
import {reverseSingleReductionTable} from '../table.js'
import { CipherFn } from "../types/cipherFn.js";

export const reverseSingleReduction: CipherFn = (text:string) =>
  calcValue(text, reverseSingleReductionTable);