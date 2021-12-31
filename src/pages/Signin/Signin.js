import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../components/Message/index'
import Loader from '../../components/Loader/index'
import FormContainer from '../../components/FormContainer'
import { login } from '../../actions/index'
import InputField from '../../components/InputField/InputField'
import { FormField } from '../../components'

const Signin = ({ location, navigate }) => {
  const [formValues, setFormValues] = useState({})



  const onChangeHandler = (event, id) => {
    const value = event.target.value;
    const formValuesClone = { ...formValues };
    formValuesClone[id] = value;
    setFormValues(formValuesClone);
  }

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {

  }, [])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(formValues))
  }

  const loginFormConfig = {
    email: {
      id: "email",
      type: "email",
      value: "",
      placeholder: "Enter Email Address",
      onChange: e => onChangeHandler(e, 'email')
    },
    password: {
      id: "password",
      type: "password",
      value: "",
      placeholder: "Enter Password Address",
      onChange: e => onChangeHandler(e, 'password')
    },
    submit: {
      id: "submit",
      type: "submit",
      variant: "primary",
      buttonText: "Sign In"
    }
  }
  const formFieldRenders = Object.keys(loginFormConfig).map(item => {
    const config = loginFormConfig[item];
    config.onChange = e => onChangeHandler(e, config.id)
    return <FormField {...config} />
  })

  return (
    // className={styles.root}
    <div>
      <FormContainer>
        <h1>Sign In</h1>
        {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader />}
        <Form onSubmit={submitHandler}>
          {formFieldRenders}

        </Form>

        <Row className='py-3'>
          <Col>
            New Customer?{' '}
            <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
              Register
            </Link>
          </Col>
        </Row>
      </FormContainer>
    </div>
  );
};

Signin.defaultProps = {

};

Signin.propTypes = {

};

export default Signin;
