"use client";

import { useTodoActions } from "../../hooks/use-todo-actions";
import { useTodoList } from "../../hooks/use-todo-list";
import { TodoItem } from "../todo-item";

export const TodoList = () => {
  const {
    states: { todos },
  } = useTodoList();
  const {
    actions: { handleCompleteTodo, handleDeleteTodo },
  } = useTodoActions();

  if (!todos) return null;

  return (
    <div className="space-y-2">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onCompleted={handleCompleteTodo}
          onDelete={handleDeleteTodo}
        />
      ))}
    </div>
  );
};
