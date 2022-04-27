const todoUl = document.querySelector("#todo-list");
const submit = document.querySelector("form");

// get data
fetch("http://localhost:3000/todos")
  .then((res) => res.json())
  .then((todos) => {
    todos.forEach((todo) => {
      const todoLi = document.createElement("li");
      todoLi.innerText = todo.title;
      todoUl.append(todoLi);
    });
  });

submit.addEventListener("submit", (e) => {
  e.preventDefault();
  const newTodo = e.target[0].value;
  const opts = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: newTodo }),
  };
  fetch("http://localhost:3000/todos", opts)
    .then((res) => res.json())
    .then((todos) => {
      const todoLi = document.createElement("li");
      todoLi.innerText = todos.title;
      todoUl.append(todoLi);
    });
});
