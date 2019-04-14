import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = props => {
  const { branding } = props;
  return (
    <nav className="navbar navbar-expand-sm bg-primary navbar-dark mb-3">
      <div className="container" /> {/*making it in the middle */}
      <a href="/" className="navbar-brand">
        {branding}
      </a>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              <i className="fas fa-home" /> Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact/add" className="nav-link">
              <i className="fas fa-plus" />
              Add
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              <i className="fas fa-question" /> About
            </Link>
          </li>
        </ul>
        {/* mr = marging  */}
      </div>
    </nav>
  );
};

Header.defaultProps = {
  branding: "My app"
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
