import React, { Fragment } from 'react';
import DevTools from 'mobx-react-devtools';
import { TodoListView } from './components'
import { Todos } from './stores'

const todoList = new Todos();

const App = () => (
  <Fragment>
    <TodoListView todoList={todoList} />
    <DevTools />
  </Fragment>
)

export default App
