document.addEventListener('DOMContentLoaded', function() {
  //Call Adapter method that will run our GET fetch
  Adapter.getToDos()
  //Tell our app to listen to our "content" div for any clicks on a delete button
  EventListener.deleteListener()
  EventListener.todoListener()
  EventListener.updateListener()

})
