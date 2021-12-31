import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = props => {
  const { buttonText, ...rest } = props;
  return (
    <Button {...rest}>
      {buttonText}
    </Button>
  );
};

Button.defaultProps = {

};

Button.propTypes = {

};

export default Button;
