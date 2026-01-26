import { calcValue } from "../utils.js";
import {satanicTable} from '../table.js'
import { CipherFn } from "../types/cipherFn.js";

export const satanic: CipherFn = (text:string) => {
  return calcValue(text, satanicTable);
};