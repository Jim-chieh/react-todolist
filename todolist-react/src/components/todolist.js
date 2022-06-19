import ShowTodo from './ShowTodo'

function Todolist ({todos,}) {


  return (
    todos.map((todo)=>{
      return <ShowTodo  {...todo}/>
    })
  )
}

export default Todolist