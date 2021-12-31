import React from 'react';
import PropTypes from 'prop-types';
import styles from './FormField.module.scss';
import { InputField, Button } from '..';

const FormField = props => {
  const { type } = props;
  const Component = () => {
    switch (type) {
      case "text":
      case "email":
      case "password":
      case "file":

        return InputField
      case "button":
      case "submit":
        return Button
      default:
        return null
    }
  }
  return (
    <Component  {...props} />
  );
};

FormField.defaultProps = {

};

FormField.propTypes = {

};

export default FormField;
