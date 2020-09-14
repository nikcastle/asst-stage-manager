import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import NavBar from "../components/navbar";
import Calendar from "../components/calendar";
import LoginButton from "../components/login-button";
import ProfileButton from "../components/profile-button";
import styled from "styled-components";

const StyleWrapper = styled.div`
 .logo {
   justify-content: center;
 }
 .header {
   text-align: center;
   font-size: 40px;
 }
 .link {
   
 }
`

const Home = () => {

    const { isAuthenticated } = useAuth0;

    return (
      <div className="Home">
        <header className="App-header">
          <img src="./logo.png" className="logo" alt="logo" />
          <p className="header">
            Welcome to the Assistant Stage Manager
          </p>
        </header>
      <div>
        {isAuthenticated ? <ProfileButton/> : <LoginButton />  }
      <p> or </p>
      <Link className="link" to ="/Notes">Get Started</Link>
      </div>
    </div>
    )
}

export default Home;
