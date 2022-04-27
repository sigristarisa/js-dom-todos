const createTodoLi = (todo) => {
  const todoUl = document.querySelector("#todo-list");
  const todoLi = document.createElement("li");
  const completeBtn = document.createElement("button");
  const deleteBtn = document.createElement("button");

  todoLi.innerText = todo.title;
  completeBtn.innerText = "✔︎";
  deleteBtn.innerText = "delete";
  todoLi.append(completeBtn, deleteBtn);
  todoUl.append(todoLi);

  completeBtn.addEventListener("click", () => {
    const opts = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: true }),
    };

    // update data (patch)
    fetch(`http://localhost:3000/todos/${todo.id}`, opts)
      .then((res) => res.json())
      .then((todo) => {
        todoLi.innerHTML = `<s>${todo.title}</s>`;
      });
  });

  deleteBtn.addEventListener("click", () => {
    fetch(`http://localhost:3000/todos/${todo.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((todo) => {
        todoLi.remove();
      });
  });
};

export default createTodoLi;
