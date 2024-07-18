"use client";

import { IndexedDBProvider } from "@unrulyeon/react-indexeddb";
import { type FC, type PropsWithChildren } from "react";
import { indexedDBConfig } from "../config";

export const TodoProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <IndexedDBProvider config={indexedDBConfig}>{children}</IndexedDBProvider>
  );
};
