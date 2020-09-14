import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
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

const ProfileButton = () => {

    return (
        <Wrapper>
            <Button className="button"> <Link to="./User">Go to your account</Link></Button>
        </Wrapper>
    );
};

export default ProfileButton;