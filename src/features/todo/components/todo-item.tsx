import { TrashIcon } from "lucide-react";
import { type FC } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { type Todo } from "../types";

type TodoItemProps = {
  onDelete: (id: number) => Promise<void>;
  onCompleted: (id: Todo) => Promise<void>;
} & {
  todo: Todo;
};

export const TodoItem: FC<TodoItemProps> = ({
  todo,
  onCompleted,
  onDelete,
}) => {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <Checkbox
          checked={todo.isCompleted}
          onClick={() => void onCompleted(todo)}
        />
        <p
          className={cn("text-sm font-medium", {
            "line-through": todo.isCompleted,
          })}
        >
          {todo.title}
        </p>
      </div>
      <Button
        variant="ghost"
        onClick={() => void onDelete(todo.id)}
        size="icon"
        className="text-muted-foreground"
      >
        <TrashIcon className="w-5 h-5" />
        <span className="sr-only">Delete</span>
      </Button>
    </div>
  );
};
