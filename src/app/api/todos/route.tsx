import { NextResponse } from "next/server";

type Todo = {
  title: string;
};

const todos: Todo[] = [
  { title: 'Todo1' },
  { title: 'Todo2' },
  { title: 'Todo3' },
  { title: 'Todo4' },
  { title: 'Todo5' },
  { title: 'Todo6' },
];

export async function GET() {
  return NextResponse.json(todos);
}