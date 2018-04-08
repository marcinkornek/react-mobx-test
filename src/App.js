import React, { Component, Fragment } from 'react';
import { observer } from 'mobx-react';
import { decorate, observable, computed, action } from "mobx"
import DevTools from 'mobx-react-devtools';

class TodoList {
  todos = [
    { id: 1, title: 'todo1', finished: false },
    { id: 1, title: 'todo1', finished: true }
  ];

  get unfinishedTodoCount() {
    return this.todos.filter(todo => !todo.finished).length;
  }

  get finishedTodoCount() {
    return this.todos.filter(todo => todo.finished).length;
  }
}

decorate(TodoList, {
  todos: observable,
  unfinishedTodoCount: computed,
  finishedTodoCount: computed,
})

const TodoListView = observer(class TodoListView extends Component {
  render() {
    const { todoList } = this.props

    return (
      <div>
        <ul>
          {todoList.todos.map(todo =>
            <TodoView todo={todo} key={todo.id} />
          )}
        </ul>
        <div>Tasks left: {todoList.unfinishedTodoCount}</div>
        <div>Tasks finished: {todoList.finishedTodoCount}</div>
      </div>
    )
  }
})

const TodoView = observer(({todo}) =>
  <li>
    <input
      type="checkbox"
      checked={todo.finished}
      onClick={() => todo.finished = !todo.finished}
    />
    {todo.title}
  </li>
)

const todoList = new TodoList();

const App = () => (
  <Fragment>
    <TodoListView todoList={todoList} />
    <DevTools />
  </Fragment>
)

export default App
