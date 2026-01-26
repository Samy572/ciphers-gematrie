import { calcValue } from "../utils.js";
import {standardTable} from '../table.js'
import { CipherFn } from "../types/cipherFn.js";

export const standard:CipherFn=(text: string) => calcValue(text, standardTable);