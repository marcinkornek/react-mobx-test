import { decorate, observable, computed, action } from "mobx"

class Todos {
  todos = [];

  toggleFinished = (todoId) => {
    const todo = this.todos.find((item) => item.id === todoId)
    return todo.finished = !todo.finished
  }

  addTodo = (newTodoText) => {
    const newTodo = {
      id: Math.random(),
      title: newTodoText,
      finished: false
    }

    return this.todos = [
      ...this.todos,
      newTodo
    ]
  }

  get unfinishedTodoCount() {
    return this.todos.filter(todo => !todo.finished).length;
  }

  get finishedTodoCount() {
    return this.todos.filter(todo => todo.finished).length;
  }
}

decorate(Todos, {
  todos: observable,
  unfinishedTodoCount: computed,
  finishedTodoCount: computed,
  toggleFinished: action,
})

export default Todos;

