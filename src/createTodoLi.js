import patchRequest from "./patchRequest.js";
import deleteRequest from "./deleteRequest.js";

const createTodoLi = (todo) => {
  const todoUl = document.querySelector("#todo-list");
  const todoLi = document.createElement("li");
  const btnContainer = document.createElement("div");
  const completeBtn = document.createElement("button");
  const deleteBtn = document.createElement("button");

  todoLi.innerText = todo.title;
  completeBtn.innerText = "✔︎";
  deleteBtn.innerText = "×";
  btnContainer.setAttribute("class", "btnContainer");
  btnContainer.append(completeBtn, deleteBtn);
  todoLi.append(btnContainer);
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
