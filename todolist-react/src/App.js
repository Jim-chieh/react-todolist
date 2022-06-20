import React from 'react'
import {Menu} from 'semantic-ui-react'

import Todolist from './components/todolist'
import TodoForm from './components/TodoForm'


function App (){
  const [todos, setTodos] = React.useState([])




  let addTodo = (todo)=>{
    console.log('app',todo)
    let getLlocalStorage = localStorage.getItem('TodoList')
    if (getLlocalStorage == null){
      let listArray = []
    }else {
      let listArray = JSON.parse(getLlocalStorage)
    }

    setTodos([...todos , todo])
  }  



  return (
    <>
    <Menu fluid widths={16} inverted  size={"large"}>
      <Menu.Item color={'red'}>
        Todo List
      </Menu.Item>
    </Menu>
    <TodoForm addTodo={addTodo} />
    <Todolist todos={todos} />
    </>
  )
}


export default App