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

let todoList = document.getElementById("todo-list")

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
 

 for(i = 0; i < arrayOfTodos.length; i++){
  const todoItem = arrayOfTodos[i]
  const todoLi = document.createElement('LI')
  let todoItemTitle = document.createTextNode(todoItem.title)
    if(todoItem.completed == true){
      todoLi.style.textDecoration = "line-through"
    }
      todoLi.appendChild(todoItemTitle)
      todoList.appendChild(todoLi)
  }
}

const filterTodos = () => {
  removeLi()
  let filteredByUserId = arrayOfTodos.filter(todo => todo.userId == 2)
  console.log(filteredByUserId)
  for(i = 0; i < filteredByUserId.length; i++){
    const todoItem = filteredByUserId[i]
    const todoLi = document.createElement('LI')
    let todoItemTitle = document.createTextNode(todoItem.title)
        todoLi.appendChild(todoItemTitle)
        todoList.appendChild(todoLi)
    }
}

const removeLi = () => {
while (todoList.hasChildNodes()){
  todoList.removeChild(todoList.firstChild)
}
}

const getUserId = () => {
  
}