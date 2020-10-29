interface ToDo {
  title: string;
  text: string;
}

function showTodo (todo: ToDo) {
  console.log(`${todo.title}: ${todo.text}`);
}
