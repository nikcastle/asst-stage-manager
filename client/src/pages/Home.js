import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import NavBar from "../components/navbar";
import LoginButton from "../components/login-button";
import ProfileButton from "../components/profile-button";
import styled from "styled-components";

const StyleWrapper = styled.div`
  text-align: center;
 .logo {
   justify-content: center;
 }
 .header {
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  color: #a95534;
 }
 .link {
  color: #451814;
  font-size: 22px;
  text-decoration: none;
}
.link:hover {
  color: #a95534;
}
`

const Home = () => {

    const { isAuthenticated } = useAuth0;

    return (
      <StyleWrapper>
        <header className="App-header">
          <img src="./logo.png" className="logo" alt="logo" />
          <p className="header">
            Welcome to the Assistant Stage Manager
          </p>
        </header>
      <div>
        {isAuthenticated ? <ProfileButton/> : <LoginButton /> }
      <p> or </p>
      <Link className="link" to ="/Notes">Get Started with Rehearsal Notes</Link>
      </div>
    </StyleWrapper>
    )
}

export default Home;
