import React from 'react';
import PropTypes from 'prop-types';
import { Link, IndexLink} from 'react-router';

const Header = () => {
    return (
        <nav>
            <IndexLink to="/home" activeClassName="active">Home</IndexLink>
            { " | "}
            <IndexLink to="/courses" activeClassName="active">Courses</IndexLink>
            { " | "}
            <IndexLink to="/about" activeClassName="active">About</IndexLink>
        </nav>
    )
};

export default Header;