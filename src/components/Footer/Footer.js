import React from 'react';
import PropTypes from 'prop-types';
// import styles from './Footer.module.scss';
import FilterLink from '../../containers/FilterLink'
import { VisibilityFilters } from '../../actions'

const Footer = props => {
  return (
    // className={styles.root}
    <div>
           <FilterLink filter={VisibilityFilters.SHOW_ALL}>
            All
        </FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
            Active
        </FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
            Completed
        </FilterLink>
    </div>
  );
};

Footer.defaultProps = {

};

Footer.propTypes = {

};

export default Footer;
