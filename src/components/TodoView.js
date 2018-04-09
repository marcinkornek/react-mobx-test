import React from 'react';
import { observer } from 'mobx-react';

const TodoView = observer(({todo, onPress}) =>
  <li>
    <input
      type="checkbox"
      checked={todo.finished}
      onClick={() => onPress(todo.id)}
    />
    {todo.title}
  </li>
)

export default TodoView
