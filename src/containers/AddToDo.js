import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import { Container } from 'react-bootstrap'

const AddTodo = ({ dispatch }) => {
    let input

    return (
        <Container>
            <form onSubmit={e => {
                e.preventDefault()
                if (!input.value.trim()) {
                    return
                }
                dispatch(addTodo(input.value))
                input.value = ''
            }}>
                <div class="form-group">
                    <label>Task Name</label>
                    <input ref={node => input = node} class="form-control" />
                    <label>Assignee Name</label>
                    <input class="form-control" />
                    <br />
                    <button type="submit" class="btn btn-primary">
                        Add Todo
                    </button>
                </div>
            </form>
        </Container>
    )
}

export default connect()(AddTodo)