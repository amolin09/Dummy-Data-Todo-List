let arrayOfTodos = []
let todoList = document.getElementById("todo-list")
let useridHeadingPlace = document.getElementById("userIdHeading")
let filteredTodo = []
let userIdContainer = document.getElementById('user-id-container')
let userIdCheckedConfirm = false

const removeLi = () => {
  while (todoList.hasChildNodes()){
  todoList.removeChild(todoList.firstChild)
  }
}

const removeH1 = () => {
  if(useridHeadingPlace.hasChildNodes()){
  useridHeadingPlace.removeChild(useridHeadingPlace.firstChild)
}
}

const clearEverything = () => {
  removeLi()
  removeH1()
  clearIdField()
}

const clearIdField = () => {
  document.getElementById('user-Id-Field').value = ''
}

const getUserId = () => {
  return document.getElementById('user-Id-Field').value
}

const verifyUserIdFieldChecked = () =>{
  const userIdChecked = document.getElementById('user-id-checkbox').checked
    if(userIdChecked){
      const userIdField = document.createElement('input')
      userIdField.type = "number"
      userIdField.min = 1
      userIdField.max = 10
      userIdField.id = "user-Id-Field"
      userIdContainer.appendChild(userIdField)
      userIdCheckedConfirm = true
    }
    else{
      userIdContainer.removeChild(userIdContainer.firstChild)
      userIdCheckedConfirm = false
    }
}

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
  removeH1()
  removeLi()

  const completedSelected = document.getElementById('completed-checkbox').checked
  if(userIdCheckedConfirm){
    filterTodosById()
  }
  else if(completedSelected){
    filterTodosByCompleted()
  }
  else{
    console.log(arrayOfTodos)
    const userIdHeadingElement = document.createElement('h1')
    let userIdHeading = document.createTextNode('All Todos')
    userIdHeadingElement.appendChild(userIdHeading)
    useridHeadingPlace.appendChild(userIdHeadingElement)

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
}



const filterTodosById = () => {
  
  const userId = getUserId()
  clearIdField()
  
  if(userId < 1 || userId > 10 || !userId){
    alert('Please enter a valid ID number between 1 - 10')
  }
  else{
    removeH1()
    removeLi()
    filteredTodo = arrayOfTodos.filter(todo => todo.userId == userId)
    console.log(filteredTodo)
    const userIdHeadingElement = document.createElement('h1')
    let userIdHeading = document.createTextNode('Todos From User: ' + userId)
    userIdHeadingElement.appendChild(userIdHeading)
    useridHeadingPlace.appendChild(userIdHeadingElement)

    for(i = 0; i < filteredTodo.length; i++){
    const todoItem = filteredTodo[i]
    const todoLi = document.createElement('LI')
    let todoItemTitle = document.createTextNode(todoItem.title)
        todoLi.appendChild(todoItemTitle)
        todoList.appendChild(todoLi)
    }
  }
}

const filterTodosByCompleted = () =>{
  const userId = getUserId() 
  clearIdField()

 
  if(!userId){
    removeH1()
    removeLi()
    filteredTodo = arrayOfTodos.filter(todo => todo.completed)
    console.log(filteredTodo)
    const userIdHeadingElement = document.createElement('h1')
    let userIdHeading = document.createTextNode('Completed Todos From All')
    userIdHeadingElement.appendChild(userIdHeading)
    useridHeadingPlace.appendChild(userIdHeadingElement)

    for(i = 0; i < filteredTodo.length; i++){
      const todoItem = filteredTodo[i]
      const todoLi = document.createElement('LI')
      let todoItemTitle = document.createTextNode(todoItem.title)
          todoLi.appendChild(todoItemTitle)
          todoList.appendChild(todoLi)
      }
  }
  else if(userId >= 1 && userId <=10){
    removeH1()
    removeLi()
    filteredTodo = arrayOfTodos.filter(todo => todo.userId == userId)
    let furtherFiltered = filteredTodo.filter(newTodo => newTodo.completed)
    console.log(furtherFiltered)
    const userIdHeadingElement = document.createElement('h1')
    let userIdHeading = document.createTextNode('Completed Todos From User: ' + userId)
    userIdHeadingElement.appendChild(userIdHeading)
    useridHeadingPlace.appendChild(userIdHeadingElement)

    for(j = 0; j < furtherFiltered.length; j++){
      const todoItem = furtherFiltered[j]
      const todoLi = document.createElement('LI')
      let todoItemTitle = document.createTextNode(todoItem.title)
          todoLi.appendChild(todoItemTitle)
          todoList.appendChild(todoLi)
    }
  }
  else{
    alert('Please enter a valid ID number between 1 - 10')
  }
}

const filterTodosByIncompleted = () =>{
  const userId = getUserId() 
  clearIdField()

 
  if(!userId){
    removeH1()
    removeLi()
    filteredTodo = arrayOfTodos.filter(todo => !todo.completed)
    console.log(filteredTodo)
    const userIdHeadingElement = document.createElement('h1')
    let userIdHeading = document.createTextNode('Incomplete Todos From All')
    userIdHeadingElement.appendChild(userIdHeading)
    useridHeadingPlace.appendChild(userIdHeadingElement)

    for(i = 0; i < filteredTodo.length; i++){
      const todoItem = filteredTodo[i]
      const todoLi = document.createElement('LI')
      let todoItemTitle = document.createTextNode(todoItem.title)
          todoLi.appendChild(todoItemTitle)
          todoList.appendChild(todoLi)
      }
  }
  else if(userId >= 1 && userId <=10){
    removeH1()
    removeLi()
    filteredTodo = arrayOfTodos.filter(todo => todo.userId == userId)
    let furtherFiltered = filteredTodo.filter(newTodo => !newTodo.completed)
    console.log(furtherFiltered)
    const userIdHeadingElement = document.createElement('h1')
    let userIdHeading = document.createTextNode('Incomplete Todos From User: ' + userId)
    userIdHeadingElement.appendChild(userIdHeading)
    useridHeadingPlace.appendChild(userIdHeadingElement)

    for(j = 0; j < furtherFiltered.length; j++){
      const todoItem = furtherFiltered[j]
      const todoLi = document.createElement('LI')
      let todoItemTitle = document.createTextNode(todoItem.title)
          todoLi.appendChild(todoItemTitle)
          todoList.appendChild(todoLi)
    }
  }
  else{
    alert('Please enter a valid ID number between 1 - 10')
  }
}

