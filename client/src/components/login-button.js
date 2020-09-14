import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

//Styling
const Wrapper = styled.article`
    .button {
        background: transparent;
        border: none;
        border-radius: 4px;
        color: #451814;
        cursor: pointer;
        padding: 10px 15px;
        font-size: 20px;
  }
  .button:hover {
      color: #a95534;
  }
`

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
      <Wrapper>
          <button className="button" onClick={() => loginWithRedirect()}>Log In</button>
      </Wrapper>
  );
};

export default LoginButton;