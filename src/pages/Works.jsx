// src\pages\Works.jsx
import { todoList } from "../static/todo";

export function Works() {
  return (
    <div>
      works
      <div>
        {todoList.map((list) => {
          return (
            <div key={list.id}>
              id: {list.id} todo: {list.todo}
            </div>
          );
        })}
      </div>
    </div>
  );
}