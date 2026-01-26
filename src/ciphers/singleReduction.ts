import { calcValue } from "../utils.js";
import {singleReductionTable} from '../table.js'
import { CipherFn } from "../types/cipherFn.js";

export const singleReduction:CipherFn = (text:string) =>
  calcValue(text, singleReductionTable);