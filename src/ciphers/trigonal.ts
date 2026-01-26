import { calcValue } from "../utils.js";
import {trigonalTable} from '../table.js'
import { CipherFn } from "../types/cipherFn.js";

export const trigonal:CipherFn = (text:string) => calcValue(text, trigonalTable);