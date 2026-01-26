import { calcCapitals } from "../utils.js";
import {capitalsMixedTable} from '../table.js'
import { CipherFn } from "../types/cipherFn.js";

export const capitalsMixed:CipherFn=(text: string) =>calcCapitals(text, capitalsMixedTable)