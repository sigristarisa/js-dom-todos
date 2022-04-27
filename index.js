const todoUl = document.querySelector("#todo-list");

fetch("http://localhost:3000/todos")
  .then((res) => res.json())
  .then((todos) => {
    todos.forEach((todo) => {
      const todoLi = document.createElement("li");
      todoLi.innerText = todo.title;
      todoUl.append(todoLi);
    });
  });
