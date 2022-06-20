import {Button, Container , Message} from 'semantic-ui-react'
import "./listfooter.css"

function ListFooter ({deleteAll}) {
  
    let getLocalStorage = localStorage.getItem('TodoList')
    let listArray

    if(getLocalStorage == null) {
      listArray = []
    }else {
      listArray = JSON.parse(getLocalStorage)
    }

    function deleAll () {
      let getLocalStorage = localStorage.getItem('TodoList')
      let listArray = JSON.parse(getLocalStorage)

      listArray = []
      localStorage.setItem('TodoList',JSON.stringify(listArray))
      window.location.reload(true)
    }

    // showN?um(Length)

  return (
    <Container>
      <Message id="warpper">
        <Message.Header id="header" style={{position:"relative"}}>你還有 {listArray.length} 個事項未完成 !
        <Button id="type" style={{position:"absolute" ,right: "0",top:"0",margin:"-7px"}} onClick={()=>deleAll()}>清除全部</Button>
        </Message.Header>
      </Message>
    </Container>
  )
}

export default ListFooter