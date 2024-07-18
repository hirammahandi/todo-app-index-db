import { useIndexedDB } from "@unrulyeon/react-indexeddb";
import { INDEX_OBJECT_STORE } from "../config";
import type { Todo } from "../types";

export const useTodoList = () => {
  const { data: todos } = useIndexedDB<Todo[]>({
    name: INDEX_OBJECT_STORE,
    key: [INDEX_OBJECT_STORE],
    fn: ({ getAll }) =>
      getAll().then((todoList) => todoList.toSorted((a, b) => b.id - a.id)),
  });

  return {
    states: { todos },
  };
};
