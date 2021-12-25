import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, completed, task_name }) => (
    <ul className="list-group">
        <li
            onClick={onClick}
            className="list-group-item"
            style={{
                textDecoration: completed ? 'line-through' : 'none'
            }}
        >
            {task_name}
        </li>
    </ul>
)

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    task_name: PropTypes.string.isRequired
}

export default Todo