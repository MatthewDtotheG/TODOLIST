class EventListener {

  static todoListener(x){
    let titleInfo = document.getElementById('title')
    let bodyInfo = document.getElementById('body')
    document.getElementById(`submit`).addEventListener('click', () => {
      console.log("testing add")
      Adapter.addTodo(titleInfo, bodyInfo)
        titleInfo.value = ''
        bodyInfo.value = ''
      })
  }

  static deleteListener(){
      let body = document.getElementById('content')
      body.addEventListener('click', (e) => {
        if (e.target.className === "delete"){
          body.innerHTML = " "
          Todo.all = Todo.all.filter(todo => todo.id != e.target.id)
          body.innerHTML = Todo.all.map(todo => todo.render())

          Adapter.deleteTodo(e.target.id)
        }
    })
}

  static updateListener(){
    let body = document.getElementById('content')
    body.addEventListener('click', (e) => {
      if (e.target.className === "update"){
        let title = document.querySelector(`input[data-id='${e.target.id}'][name="title"]`).value
        let body = document.querySelector(`input[data-id='${e.target.id}'][name="body"]`).value

        Adapter.updateTodo(e.target.id, title, body)
      }
    })
  }






}
