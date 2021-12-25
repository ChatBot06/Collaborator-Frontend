import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

const AddTodo = ({ dispatch }) => {
    let input
    const userList = useSelector((state) => state.userList)
    console.log("userList", userList)
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
                <div className="form-group">
                    <label>Task Name</label>
                    <input ref={node => input = node} className="form-control" />
                    <label>Assignee Name</label>
                    {/* <input className="form-control" /> */}
                    <select className="form-select" aria-label="Default select example">
                        <option>Select the Assignee</option>
                        {userList.users && userList.users.map(user =>
                            <option key={user._id} value="1">{user.name}</option>
                        )}
                    </select>
                    <br />
                    <button type="submit" className="btn btn-primary">
                        Add Todo
                    </button>
                </div>
            </form>
        </Container>
    )
}

export default connect()(AddTodo)