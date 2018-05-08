class Adapter {

  static getToDos(){
    fetch('http://localhost:3000/api/v1/todos')
    .then(x => x.json())
    .then(json => {
      json.data.forEach(obj => {
          let todo = new Todo(obj)
          document.getElementById('content').innerHTML += todo.render()
      })
    })
  }

  static addTodo(titleInfo, bodyInfo){
    fetch(`http://localhost:3000/api/v1/todos`, {
        method:"POST",
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json'},
        body: JSON.stringify({title: titleInfo.value, body: bodyInfo.value })
      }).then(x => x.json())
        .then( test => {
          let todo = new Todo(test.data)
          document.getElementById(`content`).innerHTML += todo.render()
    })
  }

  static deleteTodo(id){
      fetch(`http://localhost:3000/api/v1/todos/${id}`, {
          method: 'DELETE',
          headers: {"Content-type": "application/json"},
    })
}

  static updateTodo(id, title, body) {
    let todo = Todo.all.find(todo => todo.id === id)
    todo.body = body
    todo.title = title
      fetch(`http://localhost:3000/api/v1/todos/${id}`, {
        method: 'PATCH',
        headers: {'Accept': 'application/json', 'Content-type': 'application/json'},
        body: JSON.stringify({title: title, body: body})
      })
    }
      // pseudo code:
      // .then(get response change to json)
      // .then(update appropriate pieces of DOM based on response)
      // possibly checking for a failed update ^^ and doing whatever
      // in the case of failure and finally,
      // .catch(error => do something if the request itself fails)






}
