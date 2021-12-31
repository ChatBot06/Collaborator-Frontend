import { Form, Button, Row, Col } from 'react-bootstrap'
import React from 'react';
import PropTypes from 'prop-types';
import styles from './InputField.module.scss';

const InputField = props => {
  const { label, id, ...rest } = props;
  return (
    <Form.Group controlId={id}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        {...rest}
      />
    </Form.Group>
  );
};

InputField.defaultProps = {

};

InputField.propTypes = {

};

export default InputField;
