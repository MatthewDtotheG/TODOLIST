class Todo {
  constructor(json){
    this.id = json.id
    this.title = json.attributes.title
    this.body = json.attributes.body
    Todo.all.push(this);
  }

  render(){
    return `
      <br>
      <br>
      <br>
      <input name='title' data-id="${this.id}" value='${this.title}'>
      <br>
      <input type='textarea' name='body' data-id="${this.id}" value='${this.body}'>
      <br>
      <button id="${this.id}" data-id="${this.id}" class="delete">delete</button>
      <button id="${this.id}" data-id="${this.id}" class="update">update</button>
    `
  }
}



// <button id="${this.id}" data-id="${this.id}">Update</button>

Todo.all = [];
