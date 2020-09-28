import React, { useState, useRef, useEffect } from "react";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, Button, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink as RouterNavLink, Link } from "react-router-dom";
import styled from "styled-components";

//Styling
const NavStyle = styled.div`
  .logo {
    border-radius: 40px;
    height: 80px;
    width: 80px;
  }
  .dropdown-profile {
    color: black;
  }
  a {
    color: #ffffff;
  }
  .navbar{
    background-color:#451814;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
  }
`

const NavBar = () => {
  //Variables and States
  const [navBackground, setNavBackground] = useState()
  const navRef = useRef()
  navRef.current = navBackground

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const show = window.scrollY > 450
  //     if (navRef.current !== show) {
  //       setNavBackground(show)
  //     }
  //   }
  //   document.addEventListener('scroll', handleScroll)
  //   return () => {
  //     document.removeEventListener('scroll', handleScroll)
  //   }
  // }, [])

  const [isOpen, setIsOpen] = useState(false);

  const {
    user,
    isAuthenticated,
    loginWithRedirect,
    logout,
  } = useAuth0();

  const toggle = () => setIsOpen(!isOpen);

  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin,
    });

  return (
    <NavStyle>
      <div>
        <Navbar 
        expand="md"
        className="navbar"
        >
        <img src="./logo.png" className="logo" alt="logo" />
          {/* <Link to ="/Home">HOME </Link> */}
          <NavbarToggler onClick={toggle} className="hamburger" />
          {/* <Collapse isOpen={isOpen} navbar> */}
            <Nav className="mr-auto" navbar>
              <NavItem>
                <Link to ="/notes"> Notes</Link>
              </NavItem>
              {/* <NavItem>
                <Link to ="/farmers-markets">Farmers Market</Link>
              </NavItem> */}
            </Nav>
            <Nav className="d-none d-md-block" navbar>
              {!isAuthenticated && (
                <NavItem>
                  <Button
                    id="qsLoginBtn"
                    color="primary"
                    className="btn-margin"
                    onClick={() => loginWithRedirect()}
                  >
                    Log in
                  </Button>
                </NavItem>
              )}
              {/* Add User picture, Grocery List link, and Log out link if they are logged in */}
              {isAuthenticated && (
                <UncontrolledDropdown nav inNavbar className="dropdown">
                <DropdownToggle nav caret id="profileDropDown">
                  <img
                    src={user.picture}
                    alt="Profile"
                    className="nav-user-profile rounded-circle"
                    width="50"
                  />
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem header>{user.name}</DropdownItem>
                  <DropdownItem
                    tag={RouterNavLink}
                    to="./User"
                    className="dropdown-profile"
                  > Profile
                  </DropdownItem>
                  <DropdownItem
                    id="qsLogoutBtn"
                    onClick={() => logoutWithRedirect()}
                  > Log out
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              )}
            </Nav>
          {/* </Collapse> */}
        </Navbar>
      </div>
    </NavStyle>
  );
}

export default NavBar;
