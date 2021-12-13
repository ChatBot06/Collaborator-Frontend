import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, completed, task_name }) => (
    <ul class="list-group">
        <li
            onClick={onClick}
            class="list-group-item"
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