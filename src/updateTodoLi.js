const updateTodoLi = (todo, todoLi) => {
  if (todo.completed) {
    todoLi.classList.add("completed");
  } else {
    todoLi.classList.remove("completed");
  }
  console.log("in updateTodoLi: ", todoLi);
};

export default updateTodoLi;
