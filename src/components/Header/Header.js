import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { BrowserRouter as Router, NavLink, Link, Switch } from "react-router-dom";
import {Navbar,Nav, Container,NavDropdown } from 'react-bootstrap'
import { logout } from '../../actions'

const Header = props => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <div>
  <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">ToDo</Navbar.Brand>
    <Nav className="me-auto">
    <LinkContainer to='/'>
      <Nav.Link>Home</Nav.Link>
      </LinkContainer>
      {!userInfo ? (  
        <>
      <LinkContainer to='/signup'>
      <Nav.Link to="/signup">SignUp</Nav.Link>
      </LinkContainer>
      <LinkContainer to='/signin'>
      <Nav.Link>SignIn</Nav.Link>
      </LinkContainer>
      </>
      ):<></>}
      {userInfo ? (
                <NavDropdown title={userInfo.name} id='username'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/dashboard'>
                    <NavDropdown.Item>Dashboard</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <></>
              )}
    </Nav>

    
    </Container>
  </Navbar>
    </div>
  );
};

Header.defaultProps = {

};

Header.propTypes = {

};

export default Header;
