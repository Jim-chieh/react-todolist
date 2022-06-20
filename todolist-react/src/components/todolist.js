import {React} from 'react'
import {List ,Button, Container} from 'semantic-ui-react'

import './todolist.css'

function Todolist ({listArray , deleteTodo}) {

    function delTodo (index) {
      deleteTodo(index)
    }

  return (

    <>
    <Container>
    <List as='ol'  divided>
    {listArray.map((item,index)=>{
      return (
       <List.Content key={item.id}>{item.task} <Button primary id="button" onClick={()=>delTodo(index)}>刪除</Button></List.Content>
     )
    })}
   </List>
   </Container>
    </>
  )
}

export default Todolist