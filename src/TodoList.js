import React from 'react'

class TodoItem extends React.Component {
  render() {
    return (<p>{this.props.text}</p>)
  }
}

class TodoList extends React.Component {
  state = {
    todos: ['Play Game',],
    input: '',
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value })
  }

  addTodo = (event) => {
    event.preventDefault()
    const newTodos = this.state.todos.concat(this.state.input)
    this.setState({ todos: newTodos, input: '' })
  }

  render() {
    return (
      <div>
        <div>
          { this.state.todos.map((todo, index) => {
            return <TodoItem key={index} text={todo} /> }) }
        </div>
        <form onSubmit={this.addTodo}>
          <input type="text" value={this.state.input} onChange={this.onInputChange} />
          <input type="submit" value="create" />
        </form>
      </div>
    )
  }
}

export default TodoList