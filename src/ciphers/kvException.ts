import { calcValue } from "../utils.js";
import {kvExceptionTable} from '../table.js'
import { CipherFn } from "../types/cipherFn.js";

export const kvException:CipherFn=(text:string)=>calcValue(text, kvExceptionTable)