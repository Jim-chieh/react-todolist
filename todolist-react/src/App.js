import React from 'react'
import {Menu} from 'semantic-ui-react'

import Todolist from './components/todolist'
import TodoForm from './components/TodoForm'


function App (){
  const [todos, setTodos] = React.useState([
    {
      id:"1",name:"abc",done:false
    },
    {
      id:"1",name:"abc",done:false
    },
    {
      id:"1",name:"abc",done:false
    }
  ])

  function addTodo (todo) {
    setTodos( todo , ...todos)
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