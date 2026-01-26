import { calcCapitals } from "../utils.js";
import {reverseCapsAddedTable} from '../table.js'
import { CipherFn } from "../types/cipherFn.js";

export const reverseCapsAdded:CipherFn=(text:string)=>calcCapitals(text, reverseCapsAddedTable)