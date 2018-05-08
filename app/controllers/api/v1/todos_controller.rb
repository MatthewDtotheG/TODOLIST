class Api::V1::TodosController < ApplicationController
  before_action :set_todo, only: [:show,:update,:destroy]

  def index
    todos = Todo.all
    render json: todos, status: 200
  end

  def create
    todo = Todo.create(todo_params)
    render json: todo, status: 201
  end

  def update
    @todo.update(todo_params)
    render json: @todo, status: 200
  end

  def destroy
    todoId = @todo.id
    @todo.destroy
    render json: {message:"Zap! Todo deleted", todoId:todoId}
  end

  def show
    render json: @todo, status: 200
  end

  private
  def todo_params
    params.permit(:body, :title)
  end

  def set_todo
    @todo = Todo.find(params[:id])
  end
end
