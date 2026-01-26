import { calcValue } from "../utils.js";
import {latinTable} from '../table.js'
import { CipherFn } from "../types/cipherFn.js";

export const latin:CipherFn=(text:string)=>calcValue(text, latinTable)