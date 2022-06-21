import React from 'react'
import { Menu} from 'semantic-ui-react'

import Todolist from './components/todolist'
import TodoForm from './components/TodoForm'
import ListFooter from './components/listFooter'


function App (){ 
  const [todos , setTodos] = React.useState([])

  let getLocalStorage = localStorage.getItem('TodoList')
  let listArray

  if (getLocalStorage == null) {
    listArray = []
  }else {
    listArray = JSON.parse(getLocalStorage)
  }

  let addTodo = (todo) => {
    setTodos([...todos , todo])
  }

  let deleteTodo = (index) => {
    let getLocalStorage = localStorage.getItem('TodoList')
    let listArray

    if (getLocalStorage == null) {
      listArray = []
    }else {
      listArray = JSON.parse(getLocalStorage)
    }
    listArray.splice(index , 1)
    localStorage.setItem('TodoList',JSON.stringify(listArray))
    setTodos([todos])
  }

  let deleteAll  = (Num) => {
    setTodos([...todos , Num])
  }
   
  return (
    <>
    <Menu fluid widths={16} inverted  size={"large"}>
      <Menu.Item color={'red'}>
        Todo List
      </Menu.Item>
    </Menu>
    <TodoForm  addTodo={addTodo}/>
    <Todolist listArray={listArray} deleteTodo={deleteTodo}/>
    <ListFooter deleteAll={deleteAll}/>
    </>
  )
}


export default App