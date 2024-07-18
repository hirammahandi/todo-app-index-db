export type Todo = {
  id: number;
  title: string;
  isCompleted?: boolean;
};

export type NewTodo = Required<Omit<Todo, "id">>;
