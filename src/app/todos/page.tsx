import { Suspense } from "react";

type Todo = {
  title: string;
};

async function getTodos() {
  const res = await fetch('http://localhost:3000/api/todos',
  { cache: 'no-store' });
  const data = await res.json();
  return data;
}

export default async function Page() {
  const todos: Todo[] = await getTodos();
  console.log(todos);

  return (
    <>
      <h1 className="font-bold text-3xl">Todos</h1>
      <Suspense fallback={
        <div className="flex justify-center items-center h-screen">
          <div className="text-3xl font-bold">Loading...</div>
        </div>
      }>
        {todos.map((todo) => (
          <div key={todo.title} className="my-3">{todo.title}</div>
        ))}
      </Suspense>
    </>
  )
}