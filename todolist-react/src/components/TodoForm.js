import React from 'react'
import {nanoid} from 'nanoid'
import { Container, Form , } from 'semantic-ui-react';

function TodoForm ({addTodo}) {

  const [textValue ,setTextValue] = React.useState('')

function  handleInputChange(e) {
 setTextValue(e.target.value)
}

function handleSubmit () {

  
}

function handleAddTodo (e) {
  const todoObj = {
    id : nanoid(),
    task : textValue,
    compeleted : false
  }

  if (e.keyCode !== 13) return 
  console.log(textValue)
  if (textValue.trim() === ""){
    alert('請輸入事項!')
    e.target.value = ""
    return
  }
  addTodo(todoObj)
  e.target.value = ""
}


  return (
    <div>
  <Container >
    <Form >
      <Form.Group >
        <Form.Input width={14} type="text" placeholder="Enter Todo" onChange={(e)=>handleInputChange(e)} onKeyUp={e => handleAddTodo(e)} />
        <Form.Button type='submit' onClick={handleSubmit}>新增</Form.Button>
      </Form.Group>
    </Form>
  </Container>
  </div>
  )
}

export default TodoForm