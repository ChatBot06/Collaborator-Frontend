import React from 'react';
import PropTypes from 'prop-types';
// import styles from './Loader.module.scss';
import { Spinner } from 'react-bootstrap'

const Loader = props => {
  return (
    // className={styles.root}
    <div>
         <Spinner
      animation='border'
      role='status'
      style={{
        width: '100px',
        height: '100px',
        margin: 'auto',
        display: 'block',
      }}
    >
      <span className='sr-only'>Loading...</span>
    </Spinner>
    </div>
  );
};

Loader.defaultProps = {

};

Loader.propTypes = {

};

export default Loader;
