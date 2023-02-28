let arrayOfTodos = [
  {
    userId: 14,
    id: 1,
    title: "delectus aut autem",
    completed: false
  },
  {
    userId: 20,
    id: 2,
    title: "delectus aut autem",
    completed: false
  }
]

const fetchTodos = () => {
  fetch('https://jsonplaceholder.typicode.com/todos')
  .then((response) => response.json())
  .then((json) => arrayOfTodos =json)
  console.log('Fetched Todos')
}

const logTodos = () => {
  console.log(arrayOfTodos)
}

const populateTodos = () =>{
 const todoList = document.getElementById("todo-list")

 for(i = 0; i < arrayOfTodos.length; i++){
  const todoItem = arrayOfTodos[i]
  const todoLi = document.createElement('LI')
  const todoItemTitle = document.createTextNode(todoItem.title)
  todoLi.appendChild(todoItemTitle)
  todoList.appendChild(todoLi)
 }
}