const deleteRequest = (todo, todoLi) => {
  fetch(`http://localhost:3000/todos/${todo.id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then(() => {
      todoLi.remove();
    });
};

export default deleteRequest;
