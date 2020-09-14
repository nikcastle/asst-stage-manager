import React, { useState, useRef, useEffect } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, Button, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink as RouterNavLink, Link } from "react-router-dom";
import styled from "styled-components";

//Styling
const NavStyle = styled.div`
  a {
    color:white;
    margin-right: 10px
  }
  .dropdown-profile {
    color: black;
  }
  .blue{
    background-color:#143d3d;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1030;
  }
  .transparent{
    background-color:transparent;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1030;
  }
`

const NavBar = () => {
  //Variables and States
  const [navBackground, setNavBackground] = useState()
  const navRef = useRef()
  navRef.current = navBackground
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 450
      if (navRef.current !== show) {
        setNavBackground(show)
      }
    }
    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])
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
        dark= {true}
        // className="fixed-top" 
        className={navBackground ? 'blue' : 'transparent'}
        style={{ transition: '1s ease' }}
        >
          <Link to ="/Home">HOME</Link>
          <NavbarToggler onClick={toggle} className="hamburger" />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              {/* <NavItem>
                <Link to ="/facts">Facts</Link>
              </NavItem>
              <NavItem>
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
                    > Productions
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
            {!isAuthenticated && (
              <Nav className="d-md-none" navbar>
                <NavItem>
                  <Button
                    id="qsLoginBtn"
                    color="primary"
                    block
                    onClick={() => loginWithRedirect({})}
                  >
                    Log in
                  </Button>
                </NavItem>
              </Nav>
            )}
            {isAuthenticated && (
              <Nav
                className="d-md-none justify-content-between"
                navbar
                style={{ minHeight: 170 }}
              >
                <NavItem>
                  <span className="user-info">
                    <img
                      src={user.picture}
                      alt="Profile"
                      className="nav-user-profile d-inline-block rounded-circle mr-3"
                      width="50"
                    />
                    <h6 className="d-inline-block">{user.name}</h6>
                  </span>
                </NavItem>
                <NavItem>
                  
                  <RouterNavLink
                    to="/profile"
                    activeClassName="router-link-exact-active"
                  >
                    Profile
                  </RouterNavLink>
                </NavItem>
                <NavItem>
                  
                  <RouterNavLink
                    to="#"
                    id="qsLogoutBtn"
                    onClick={() => logoutWithRedirect()}
                  >
                    Log out
                  </RouterNavLink>
                </NavItem>
              </Nav>
            )}
          </Collapse>
        </Navbar>
      </div>
    </NavStyle>
  );
}

export default NavBar;
