import React, { useState, useEffect } from 'react'
// import styles from './Home.module.scss';
import Footer from "../../components/Footer";
import VisibleToDoList from "../../containers/VisibleToDoList";
import AddToDo from "../../containers/AddToDo";
import { getAllTodos, listUsers } from '../../actions';
import { useDispatch, useSelector } from 'react-redux'
import { Button, Row, Container, Col } from 'react-bootstrap';
const Home = props => {
  const [todos, setTodos] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllTodos())
    dispatch(listUsers())
  }, [])


  return (
    // className={styles.root}
    <div >
      {/* <AddToDo />
      <VisibleToDoList /> */}
      {/* <Footer /> */}

    </div>
  );
};

Home.defaultProps = {

};

Home.propTypes = {

};

export default Home;
