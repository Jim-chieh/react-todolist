import React from 'react'
import {nanoid} from 'nanoid'
import { Container, Form , } from 'semantic-ui-react';

function TodoForm ({addTodo}) {

  const [todo ,setTodo] = React.useState(
    { id: "",
    task: "",
    completed: false
  })

function  handleInputChange(e) {
  setTodo({...todo , task:e.target.value})
  
}

function handleSubmit () {

  if (todo.task.trim()){
    addTodo({...todo ,id: nanoid()})
    setTodo({...todo , task: ""})
  }
 
}


  return (
    <div>
  <Container >
    <Form >
      <Form.Group >
        <Form.Input width={14} type="text" placeholder="Enter Todo" onChange={(e)=>handleInputChange(e)} />
        <Form.Button type='submit' onClick={handleSubmit}>新增</Form.Button>
      </Form.Group>
    </Form>
  </Container>
  </div>
  )
}

export default TodoForm