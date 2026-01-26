import { calcValue } from "../utils.js";
import {epExceptionTable} from '../table.js'
import { CipherFn } from "../types/cipherFn.js";

export const epException:CipherFn=(text:string)=>calcValue(text, epExceptionTable)