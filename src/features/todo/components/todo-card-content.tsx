import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TodoForm } from "./todo-form";
import { DynamicTodoList } from "./todo-list/dynamic-todo-list";

export const TodoCardContent = () => {
  return (
    <Card className="w-full max-w-md mx-auto mt-4">
      <CardHeader>
        <CardTitle>Todo List</CardTitle>
        <CardDescription>Manage your tasks with ease.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <TodoForm />
        <DynamicTodoList />
      </CardContent>
    </Card>
  );
};
