import { CipherFn } from "../types/cipherFn.js";
import { Table } from "../types/table.js";
import { calcValue } from "../utils.js";


export function createCipher(table: Table): CipherFn {
  return (text: string) => calcValue(text, table);
}