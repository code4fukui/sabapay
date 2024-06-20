import { IndexedStorage } from "https://code4fukui.github.io/IndexedStorage/IndexedStorage.js";
import { IndexedDB } from "https://code4fukui.github.io/IndexedDB/IndexedDB.js";

const name = "sabapay";

const isname = name + "_storage";
const isver = 1;

const dbname = name + "_db";
const dbver = 1;

const dbtrname = name + "_dbtr";
const dbtrver = 1;

export const indexStorage = await IndexedStorage.create(isname, isver);
export const db = await IndexedDB.create(dbname, ["id"], dbver);
export const dbtr = await IndexedDB.create(dbtrname, ["id"], dbtrver);
