import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { startLogout } from "../../store/actions/authActions";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText,
} from "reactstrap";

const Header = ({ startLogout }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar color="pink" light expand="md">
        <NavbarBrand href="/home">Tabreaa | تبرع</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto " navbar>
            <NavItem>
              <Link to="/home" className="nav-link">
                الرئسية
              </Link>
            </NavItem>
            <NavItem>
              <NavLink to="/donor/profile" className="nav-link">
                صفحة شخصبة
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/privacy" className="nav-link">
                شروط الإستخدام
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="" className="nav-link" onClick={startLogout}>
                تسجيل الخروج <i className=" fa fa-sign-out"></i>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

Navbar.propTypes = {
  light: PropTypes.bool,
  dark: PropTypes.bool,
  fixed: PropTypes.string,
  color: PropTypes.string,
  role: PropTypes.string,
  expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  // pass in custom element to use
};
NavbarBrand.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  // pass in custom element to use
};
NavbarText.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  // pass in custom element to use
};

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout()),
});
export default connect(undefined, mapDispatchToProps)(Header);
