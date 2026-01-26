import { calcValue } from "../utils.js";
import {ehpExceptionTable} from '../table.js'
import { CipherFn } from "../types/cipherFn.js";

export const ehpException:CipherFn=(text)=>calcValue(text, ehpExceptionTable)