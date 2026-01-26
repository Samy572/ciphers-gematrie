import { calcValue } from "../utils.js";
import {sumerianTable} from '../table.js'
import { CipherFn } from "../types/cipherFn.js";

export const sumerian:CipherFn = (text:string) => calcValue(text, sumerianTable);