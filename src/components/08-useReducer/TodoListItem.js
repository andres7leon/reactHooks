import React from 'react'
import PropTypes from 'prop-types';

export const TodoListItem = ({ todos, handleToggle, handleRemove}) => {
    return (
        <ul className="list-group list-group-flush">
            {
                todos.map((todo,i)=>(
                <li key={ todo.id }
                className="list-group-item"                       
                >
                <p style={{cursor: 'pointer', textDecoration: todo.done ? 'line-through' : ''}} onClick={ ()=> { handleToggle(todo.id) } }>{ i + 1 }.  { todo.desc }</p>
                <button className="btn btn-danger" onClick={() => { handleRemove(todo.id) }}>
                    Borrar
                </button>
                </li> 
                ))
            } 
        </ul>
            
    )
}

TodoListItem.prototype = {
    todos: PropTypes.array
};
