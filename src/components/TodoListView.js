import React, { Component } from 'react';
import { observer } from 'mobx-react';
import TodoAdd from './TodoAdd'
import TodoView from './TodoView'

const TodoListView = observer(class TodoListView extends Component {
  render() {
    const { todoList } = this.props

    return (
      <div>
        <ul>
          {todoList.todos.map(todo =>
            <TodoView todo={todo} key={todo.id} onPress={todoList.toggleFinished} />
          )}
        </ul>
        <div>Tasks left: {todoList.unfinishedTodoCount}</div>
        <div>Tasks finished: {todoList.finishedTodoCount}</div>
        <TodoAdd onPress={todoList.addTodo} />
      </div>
    )
  }
})

export default TodoListView
