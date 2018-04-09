import React, { Component } from 'react';
import { observer } from 'mobx-react';

const TodoAdd = observer(class TodoAdd extends Component {
  state = {
    input: ""
  }

  onChange = (e) => (
    this.setState({ input: e.target.value })
  )

  onSubmit = () => {
    const { onPress } = this.props
    const { input } = this.state
    if (!input.length) return false

    onPress(input)
    this.setState({ input: '' })
  }

  render() {
    const { input } = this.state

    return (
      <li>
        Add new task
        <input
          onChange={this.onChange}
          value={input}
        />
        <span onClick={this.onSubmit}>
          Add todo
        </span>
      </li>
    )
  }
})

export default TodoAdd
