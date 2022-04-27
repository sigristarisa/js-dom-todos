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
      if (todo.completed) todoLi.setAttribute("class", "completed");
    });
};

export default patchRequest;
