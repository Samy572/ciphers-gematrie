import { calcCapitals } from "../utils.js";
import {capitalAddedTable} from '../table.js'
import { CipherFn } from "../types/cipherFn.js";

export const capitalsAdd:CipherFn=(text:string) => calcCapitals(text, capitalAddedTable)