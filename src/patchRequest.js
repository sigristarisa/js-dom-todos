import updateTodoLi from "./updateTodoLi.js";

const patchRequest = (todo, todoLi) => {
  const opts = {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ completed: true }),
  };

  // update data (patch)
  fetch(`http://localhost:3000/todos/${todo.id}`, opts)
    .then((res) => res.json())
    .then((todo) => {
      updateTodoLi(todo, todoLi);
    });
};

export default patchRequest;
