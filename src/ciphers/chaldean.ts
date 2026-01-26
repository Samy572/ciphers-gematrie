import { calcValue } from "../utils.js";
import {chaldeanTable} from '../table.js'
import { CipherFn } from "../types/cipherFn.js";

export const chaldean:CipherFn=(text:string)=>calcValue(text, chaldeanTable)