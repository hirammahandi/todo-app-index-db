import { type IndexedDBConfig } from "@unrulyeon/react-indexeddb";

export const INDEX_DB_NAME = "todos-app";
export const INDEX_DB_VERSION = 1;
export const INDEX_OBJECT_STORE = "todos";

export const indexedDBConfig: IndexedDBConfig = {
  name: INDEX_DB_NAME,
  version: INDEX_DB_VERSION,
  objectStores: [
    {
      name: INDEX_OBJECT_STORE,
      options: {
        keyPath: "id",
        autoIncrement: true,
      },
      indices: [
        { name: "title", keyPath: "title", options: { unique: false } },
        {
          name: "isCompleted",
          keyPath: "isCompleted",
          options: { unique: false },
        },
      ],
    },
  ],
};
