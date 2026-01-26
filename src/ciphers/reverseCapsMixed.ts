import { calcCapitals } from "../utils.js";
import {reverseCapitalsMixedTable} from '../table.js'
import { CipherFn } from "../types/cipherFn.js";

export const reverseCapsMixed:CipherFn=(text:string)=>calcCapitals(text, reverseCapitalsMixedTable)