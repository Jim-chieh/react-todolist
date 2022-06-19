function ShowTodo ({id ,name ,done}) {
  return (
    <ul>
      <li>{name}{done ? "done" : "not yet"}</li>
    </ul>
  )
}

export default ShowTodo