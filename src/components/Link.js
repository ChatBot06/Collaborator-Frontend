import React from 'react'
import PropTypes from 'prop-types'
// import Button from '@mui/material/Button';
const Link = ({ active, children, onClick }) => (
    <button
        onClick={onClick}
        disabled={active}
        className="btn btn-secondary"
        style={{
            marginLeft: '4px',
        }}
    >
        {children}
    </button>
);

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Link