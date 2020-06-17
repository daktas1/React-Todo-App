import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../index.css'


class TodoItem extends Component {
    
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: "1px #ccc dotted",
            textDecoration: this.props.todo.completed ? ('line-through') : 'none',
            fontStyle: this.props.todo.completed ? ('italic') : 'normal'
        }
    }

    render() {
        const { id, title} = this.props.todo

        return(
            <div style={this.getStyle()}>
                 <p>
                    <input type="checkbox" className="checkbox" onChange={this.props.markComplete.bind(this, id)}/>
                    {title}
                    <button className="clearButton" onClick={this.props.delTodo.bind(this, id)}>X</button>
                </p>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}



export default TodoItem