import React from 'react'
import {nanoid} from 'nanoid'
import { Container, Form , } from 'semantic-ui-react';
import './todoForm.css'

function TodoForm ({addTodo}) {

  const [textValue ,setTextValue] = React.useState('')

function  handleInputChange(e) {
 setTextValue(e.target.value)
}

function handleAddTodo (e) {
  let listArray = []
  let getLocalStorage = localStorage.getItem('TodoList')
  const todoObj = {
    id : nanoid(),
    task : textValue,
  }

  if (e.keyCode !== 13) return 
  if (textValue.trim() === ""){
    alert('請輸入事項!')
    e.target.value = ""
    return
  }
  if (getLocalStorage == null){
     listArray = []
  }else {
     listArray = JSON.parse(getLocalStorage)
  }
  listArray.push(todoObj)
  localStorage.setItem('TodoList',JSON.stringify(listArray))
  e.target.value = ""
  Todo(textValue)
}

let Todo = (todoObj)=>{
    addTodo(todoObj)
} 

function handleSubmit () {
  let getLocalStorage = localStorage.getItem('TodoList')
  let listArray
  const todoObj = {
    id :nanoid(),
    task : textValue,
  }
  if (textValue.trim() === "") {
    alert('請輸入事項!')
    setTextValue('')
    return
  }

  if(getLocalStorage == null) {
    listArray = []
  }else {
    listArray = JSON.parse(getLocalStorage)
  }
  listArray.push(todoObj)
  localStorage.setItem('TodoList',JSON.stringify(listArray))
  addTodo(todoObj)
  window.location.reload(true)
}


  return (
    <div>
  <Container >
    <Form >
      <Form.Group >
        <Form.Input id="input" width={14} type="text" placeholder="Enter Todo" onChange={(e)=>handleInputChange(e)} onKeyUp={e => handleAddTodo(e)} />
        <Form.Button id="button" type='button' onClick={(e)=>handleSubmit(e)}>新增</Form.Button>
      </Form.Group>
    </Form>
  </Container>
  </div>
  )
}

export default TodoForm