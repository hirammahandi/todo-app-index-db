"use client";

import { Loader2 } from "lucide-react";
import dynamic from "next/dynamic";

export const DynamicTodoList = dynamic(
  () => import("./todo-list").then((comp) => comp.TodoList),
  {
    ssr: false,
    loading: () => <Loader2 className="w-10 h-10 mx-auto animate-spin" />,
  }
);
