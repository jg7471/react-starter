// src\pages\Work.jsx
import { useParams, useSearchParams } from "react-router-dom";
import { todoList } from "../static/todo";

export function Work() {
  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  searchParams.delete("key2");
  console.log(searchParams.has("key2"));
  searchParams.append("key2", 22);
  console.log(searchParams.get("key2"));

  const todoItem = todoList.find((list) => list.id === parseInt(params.id));

  return (
    <div>
      Work
      <div>
        id: {todoItem.id} todo: {todoItem.todo}
      </div>
    </div>
  );
}
