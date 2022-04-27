import patchRequest from "./patchRequest.js";
import deleteRequest from "./deleteRequest.js";

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
    patchRequest(todo, todoLi);
  });

  // delete data
  deleteBtn.addEventListener("click", () => {
    deleteRequest(todo, todoLi);
  });
};

export default createTodoLi;
