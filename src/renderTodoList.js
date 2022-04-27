import createTodoLi from "./createTodoLi.js";

// get data
fetch("http://localhost:3000/todos")
  .then((res) => res.json())
  .then((todos) => {
    todos.forEach((todo) => {
      createTodoLi(todo);
    });
  });
