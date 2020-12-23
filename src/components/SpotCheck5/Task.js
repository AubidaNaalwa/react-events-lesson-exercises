import React, { Component } from 'react';

class Task extends Component {
  complete = () => {
      this.props.completed(this.props.c.text)
  }

  render() {
    return (
      <div>
        <span>
            {this.props.c.text} -  
        </span>
        <span onClick = {this.complete}>Completed</span>
      </div>
    )
  }
}

export default Task;
