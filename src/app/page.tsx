import { TodoCardContent, TodoProvider } from "@/features/todo";

const HomePage = () => {
  return (
    <TodoProvider>
      <TodoCardContent />
    </TodoProvider>
  );
};

export default HomePage;
