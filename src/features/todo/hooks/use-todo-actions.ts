import { useMutateIndexedDB } from "@unrulyeon/react-indexeddb";
import { useTransition, type FormEventHandler } from "react";
import { toast } from "sonner";
import { INDEX_OBJECT_STORE } from "../config";
import { type NewTodo, type Todo } from "../types";

export const useTodoActions = () => {
  const [isPending, startTransition] = useTransition();
  const {
    invalidate,
    add: addTodo,
    put: updateTodo,
    remove: remoteTodo,
  } = useMutateIndexedDB<NewTodo, Todo>({
    name: INDEX_OBJECT_STORE,
  });

  const handleAddTodo: FormEventHandler<HTMLFormElement> = (e) => {
    startTransition(async () => {
      e.preventDefault();

      const formData = new FormData(e.currentTarget);

      const title = formData.get("title")?.toString();

      if (!title) {
        toast.error("Title is required");
        return;
      }

      const todo: NewTodo = {
        title,
        isCompleted: false,
      };

      await addTodo(todo);
      invalidate([INDEX_OBJECT_STORE]);

      (e.target as HTMLFormElement).reset();
    });
  };

  const handleCompleteTodo = async (todoToUpdate: Todo) => {
    await updateTodo({
      ...todoToUpdate,
      isCompleted: !todoToUpdate.isCompleted,
    });
    invalidate([INDEX_OBJECT_STORE]);
  };

  const handleDeleteTodo = async (id: number) => {
    await remoteTodo(id);
    invalidate([INDEX_OBJECT_STORE]);
  };

  return {
    states: {
      isPending,
    },
    actions: {
      handleAddTodo,
      handleCompleteTodo,
      handleDeleteTodo,
    },
  };
};
