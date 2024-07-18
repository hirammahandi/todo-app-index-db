"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useTodoActions } from "../hooks/use-todo-actions";

export const TodoForm = () => {
  const {
    actions: { handleAddTodo },
    states: { isPending },
  } = useTodoActions();

  return (
    <form className="space-y-4" onSubmit={handleAddTodo}>
      <div className="flex items-center gap-2">
        <Input placeholder="Add a new task" name="title" />
        <Button type="submit" disabled={isPending}>
          Add
        </Button>
      </div>
    </form>
  );
};
