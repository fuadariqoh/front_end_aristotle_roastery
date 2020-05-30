import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBIcon,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdbreact";
import { connect } from "react-redux";

class NavbarPage extends Component {
  state = {
    isOpen: false,
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <MDBNavbar className="navbar_color" dark expand="md">
        <MDBNavbarBrand className="d-flex" href="/">
          <div className="navbar_text">Aristotle </div>
          <div className="navbar_text ml-3"> Roastery </div>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav
            className="d-flex justify-content-between navbar_text"
            right
          >
            {" "}
            <MDBNavItem className="mr-4  ">
              <MDBNavLink className="font-weight-bold text-dark" to="/about">
                About
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem className="mr-4">
              <MDBNavLink className="font-weight-bold text-dark" to="/shop">
                Shop
              </MDBNavLink>
            </MDBNavItem>
            {this.props.Auth.isLogin ? (
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <MDBIcon icon="user" />
                  </MDBDropdownToggle>
                  <MDBDropdownMenu className="dropdown1">
                    <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                    <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                    <MDBDropdownItem href="#!">
                      Something else here
                    </MDBDropdownItem>
                    <MDBDropdownItem href="#!">
                      Something else here
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
            ) : (
              <MDBNavItem>
                <MDBNavLink className="font-weight-bold text-dark" to="/login">
                  Login/Register
                </MDBNavLink>
              </MDBNavItem>
            )}
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

const MapStateToProps = ({ Auth }) => {
  return {
    Auth,
  };
};

export default connect(MapStateToProps)(NavbarPage);
