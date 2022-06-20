import './todolist.css'


function Todolist ({todos}) {

  console.log(todos)

  return (
    <ul>
    {todos.map((todo)=>{
     return (
       <li key={todo.id}>{todo.task} <button className="button">刪除</button></li>
     )
    })}
   </ul>
  )
}

export default Todolist