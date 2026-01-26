import { calcValue } from "../utils.js";
import {reductionTable} from '../table.js'
import { CipherFn } from "../types/cipherFn.js";

export const reduction:CipherFn=(text:string)=>calcValue(text, reductionTable)