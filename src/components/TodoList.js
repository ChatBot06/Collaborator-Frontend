import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
import { useDispatch, useSelector } from 'react-redux'

import { Button, Row, Container, Col, Card, ListGroup, Badge, ToggleButton, CloseButton } from 'react-bootstrap';
import { deleteTodofromList } from '../actions';


const TodoList = ({ todos, toggleTodo }) => {
    const allTodos = useSelector((state) => state.todos)
    const dispatch = useDispatch()

    console.log("all todos", allTodos)
    const deleteTodo = (id) => {
        console.log("delete the todo", id);
        dispatch(deleteTodofromList(id));
    }
    return (
        <Container>
            {/* <Row>
                <Col>
                    <ul>
                        {todos.map(todo =>
                            <Todo
                                key={todo.id}
                                {...todo}
                                onClick={() => toggleTodo(todo._id, todo.completed)}
                            />
                        )}
                    </ul>
                </Col>
            </Row> */}
            <Row>
                <Col>
                    <Card style={{ width: '18rem' }} border="primary" bg="primary">
                        <Card.Header>All</Card.Header>
                        <ListGroup variant="flush">
                            {allTodos.map(todo =>
                                <ListGroup.Item key={todo._id}>{todo.task_name}</ListGroup.Item>
                            )}
                        </ListGroup>
                    </Card>

                </Col>
                <Col>
                    <Card style={{ width: '18rem' }} border="success" bg="success">
                        <Card.Header>Completed</Card.Header>
                        <ListGroup variant="flush">
                            {allTodos.map(todo =>
                                todo.completed && <ListGroup.Item key={todo._id}>{todo.task_name}</ListGroup.Item>
                            )}
                        </ListGroup>
                    </Card>

                </Col>
                <Col>
                    <Card style={{ width: '18rem' }} border="danger" bg="danger">
                        <Card.Header>Incomplete</Card.Header>
                        <ListGroup al="ol" numbered>
                            {allTodos.map(todo =>
                                !todo.completed && <ListGroup.Item
                                    as="li"
                                    className="d-flex justify-content-between align-items-start"
                                    key={todo._id}>
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">{todo.task_name}</div>
                                        Assignee Name
                                    </div>
                                    <CloseButton onClick={() => deleteTodo(todo._id)} />
                                </ListGroup.Item>
                            )}
                        </ListGroup>
                    </Card>

                </Col>
                {/* <Col>
                    <Card style={{ width: '18rem' }} border="danger" bg="danger">
                        <Card.Header>Incomplete</Card.Header>
                        <ListGroup as="ol" numbered>
                            <ListGroup.Item
                                as="li"
                                className="d-flex justify-content-between align-items-start"
                            >
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">Task name</div>
                                    Assignee Name
                                </div>
                                <Badge variant="primary" pill>
                                    14
                                </Badge>
                                <CloseButton onClick={() => deleteTodo()} />
                            </ListGroup.Item>
                            <ListGroup.Item
                                as="li"
                                className="d-flex justify-content-between align-items-start"
                            >
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">Subheading</div>
                                    Cras justo odio
                                </div>
                                <Badge variant="primary" pill>
                                    14
                                </Badge>
                                <CloseButton onClick={() => deleteTodo()} />
                            </ListGroup.Item>
                            <ListGroup.Item
                                as="li"
                                className="d-flex justify-content-between align-items-start"
                            >
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">Subheading</div>
                                    Cras justo odio
                                </div>
                                <Badge variant="primary" pill>
                                    14
                                </Badge>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>

                </Col> */}
            </Row>
        </Container>
    )
}


TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        task_name: PropTypes.string.isRequired
    }).isRequired).isRequired,

    toggleTodo: PropTypes.func.isRequired
};

export default TodoList
