const createTodoLi = (todo) => {
  const todoUl = document.querySelector("#todo-list");
  const todoLi = document.createElement("li");
  const completeBtn = document.createElement("button");
  const deleteBtn = document.createElement("button");

  todoLi.innerText = todo.title;
  completeBtn.innerText = "✔︎";
  todoLi.append(completeBtn);
  todoUl.append(todoLi);

  completeBtn.addEventListener("click", () => {
    const opts = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: true }),
    };

    // post data (update)
    fetch("http://localhost:3000/todos/1", opts)
      .then((res) => res.json())
      .then((todo) => {
        todoLi.innerHTML = `<s>${todo.title}</s>`;
      });
  });
};

export default createTodoLi;
