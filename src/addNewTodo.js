import createTodoLi from "./createTodoLi.js";
const submit = document.querySelector("form");

submit.addEventListener("submit", (e) => {
  e.preventDefault();
  const newTodo = {
    title: e.target[0].value,
    completed: false,
  };
  const opts = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newTodo),
  };
  // post data
  fetch("http://localhost:3000/todos", opts)
    .then((res) => res.json())
    .then((todo) => {
      createTodoLi(todo);
    });
  e.target.reset();
});
