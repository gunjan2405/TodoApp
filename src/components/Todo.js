import React from 'react'
import { RiCloseCircleLine } from 'react-icons/ri';

export default class Todo extends React.Component {

  doneTodo = () => {
    let checked = this.props.todo.done ? false : true;
    this.props.onChecked(checked, this.props.todo.id);
  }

  deleteTodo(e) {
    e.preventDefault();
    this.props.onDelete(this.props.todo.id);
  }

  render() {
      const { todo } = this.props;
      const className = todo.done ? 'done-todo' : 'not-done';

    return (
      <div className="todo-item"  >
        <input className="toggle-todo" type="checkbox" onClick={() => this.doneTodo()} />
        <strong className={className}> {todo.title} </strong>
        <a className="delete-todo delete-button icons"><RiCloseCircleLine  
                onClick={(e) => this.deleteTodo(e)}
                className= 'delete-icon'
             /></a>
      </div>
    )
  }
}